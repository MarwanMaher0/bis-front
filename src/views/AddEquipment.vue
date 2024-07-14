<template>
    <div class="container pt-2 mt-24">
        <div class="flex">
            <EquipmentSaidBar class="p-4 pt-8" />
            <div class="w-3/4 p-6 bg-white">
                <Form @submit="submitForm" class="w-3/4 mx-auto">
                    <div class="p-6 border-2 border-gray-200 shadow-lg">
                        <h1 class="bg-yellow-400 p-2 text-lg font-bold">Add New Equipment</h1>
                        <h6 class="mt-4">Add Image of your Equipment</h6>
                        <div class="flex flex-col space-y-4">
                            <div class="flex flex-wrap gap-4 image-upload-container">
                                <div v-for="(image, index) in images" :key="index" class="relative image-upload">
                                    <input type="file" accept="image/*" @change="(e) => previewImage(e, index)"
                                        class="block">
                                    <img v-if="image.src" :src="image.src" alt="Image Preview"
                                        class="mt-2 w-32 h-32 object-cover">
                                    <button @click="() => removeImage(index)" type="button"
                                        class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">×</button>
                                </div>
                                <div @click="addImageUpload"
                                    class="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full cursor-pointer">
                                    +
                                </div>
                            </div>
                            <div class="flex flex-col space-y-4">
                                <Field name="machineName" :rules="required" v-model="formData.machineName" as="input"
                                    class="form-control" placeholder="Equipment Name" />
                                <ErrorMessage name="machineName" />
                                <Field name="machineModel" :rules="required" v-model="formData.machineModel" as="input"
                                    class="form-control" placeholder="Machine Model" />
                                <ErrorMessage name="machineModel" />
                                <Field name="price" :rules="required | numeric" v-model="formData.price" as="input"
                                    type="number" class="form-control" placeholder="Price per day" />
                                <ErrorMessage name="price" />
                                <Field name="categoryId" :rules="required" v-model="formData.categoryId" as="select"
                                    class="form-control p-[10px]">
                                    <option value="" disabled selected hidden>Equipment Category</option>
                                    <option value="1">Agriculture</option>
                                    <option value="2">Industrial</option>
                                    <option value="3">Cosmetics</option>
                                    <option value="4">Electronics</option>
                                </Field>
                                <ErrorMessage name="categoryId" />
                                <Field name="weight" :rules="required | numeric" v-model="formData.weight" as="input"
                                    class="form-control" placeholder="Equipment Weight" />
                                <ErrorMessage name="weight" />
                                <Field name="capacity" :rules="required" v-model="formData.capacity" as="input"
                                    class="form-control" placeholder="Equipment Capacity" />
                                <ErrorMessage name="capacity" />
                                <Field name="description" :rules="required" v-model="formData.description" as="input"
                                    class="form-control" placeholder="Description" />
                                <ErrorMessage name="description" />
                                <Field name="width" :rules="required | numeric" v-model="formData.width" as="input"
                                    class="form-control" placeholder="Equipment Width" />
                                <ErrorMessage name="width" />
                                <Field name="height" :rules="required | numeric" v-model="formData.height" as="input"
                                    class="form-control" placeholder="Equipment Height" />
                                <ErrorMessage name="height" />
                            </div>
                            <h6>Upload Equipment Ownership Contract</h6>
                            <div>
                                <input class="form-control" id="formFileSm" type="file" @change="handleFileUpload" />
                            </div>
                            <div class="flex items-baseline gap-3">
                                <input type="checkbox" v-model="formData.poPular" id="popular" />
                                <label for="popular">Add to popular equipment page, commission: LE300</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
        <paymant v-if="showModal" @close="closeModal" />
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import EquipmentSaidBar from '@/components/EquipmentSaidBar.vue';
import { useForm, Field, ErrorMessage } from 'vee-validate';
import { required, numeric, min_value } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';
import paymant from '@/components/paymantPopular.vue';
import { useRoute } from 'vue-router';

defineRule('required', required);
defineRule('numeric', numeric);
defineRule('min_value', min_value);


const formData = ref({
    machineModel: '',
    machineName: '',
    contractImage: null,  // Field to store contract image file
    price: null,
    description: '',
    categoryId: null,
    poPular: false,
    capacity: null,
    width: null,
    height: null,
    weight: null,
});
const showModal = ref(false);
const isEditMode = ref(false);
const equipmentId = ref(null);  // Field to store the equipment ID
const images = ref([{ src: null, file: null }]);
const existingContractImageUrl = ref('');
const existingImageUrl = ref('');
const wasPoPularInitially = ref(false);

const previewImage = (event, index) => {
    const input = event.target;
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            images.value[index] = { src: reader.result, file };
        };
        reader.readAsDataURL(file);
    }
};

const addImageUpload = () => {
    images.value.push({ src: null, file: null });
};

const removeImage = (index) => {
    images.value.splice(index, 1);
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    formData.value.contractImage = file;  // Assign the file to contractImage
};

const { handleSubmit, resetForm, setValues } = useForm();

const submitForm = handleSubmit(async () => {
    const form = new FormData();
    form.append('MachineModel', formData.value.machineModel);
    form.append('MachineName', formData.value.machineName);
    form.append('price', formData.value.price);
    form.append('Description', formData.value.description);
    form.append('CategoryId', formData.value.categoryId);
    form.append('PoPular', formData.value.poPular);
    form.append('Capacity', formData.value.capacity);
    form.append('Width', formData.value.width);
    form.append('Height', formData.value.height);
    form.append('Weight', formData.value.weight);

    if (formData.value.contractImage) {
        form.append('ContractImage', formData.value.contractImage);  // Append the contract image file
        form.append('ContractImageName', formData.value.contractImage.name);  // Append the contract image name
    } else if (!isEditMode.value) {
        // New entries require a contract image
        alert('Please upload a contract image.');
        return;
    }

    if (images.value.length > 0 && images.value[0].file) {
        form.append('Image', images.value[0].file);
        form.append('ImageName', images.value[0].file.name); // Use the file name
    } else if (!isEditMode.value) {
        // New entries require an image
        alert('Please upload an image.');
        return;
    }

    if (isEditMode.value && equipmentId.value) {
        form.append('id', equipmentId.value);  // Append the equipment ID to the form data
    }

    // Log form data for debugging
    for (let [key, value] of form.entries()) {
        console.log(`${key}: ${value}`);
    }

    try {
        let response;

        if (isEditMode.value && equipmentId.value) {
            response = await axios.patch(`/api/Machine/PatchMachine/${equipmentId.value}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        } else {
            response = await axios.post('/api/Machine', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        }
        console.log('Response:', response.data);

        // Show payment modal if PoPular is selected
        if ((formData.value.poPular && !isEditMode.value) || (isEditMode.value && formData.value.poPular && !wasPoPularInitially.value)) {
            showModal.value = true;
        }

        // Handle success (e.g., notify the user, clear the form, etc.)
        resetForm();
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
    }
});

const closeModal = () => {
    showModal.value = false;
};

const route = useRoute();
onMounted(() => {
    if (route.query.equipmentData) {
        const equipmentData = JSON.parse(route.query.equipmentData);
        formData.value = {
            machineModel: equipmentData.machineModel,
            machineName: equipmentData.machineName,
            contractImage: null,
            price: equipmentData.priceOfRent,
            description: equipmentData.description,
            categoryId: equipmentData.categoryId,
            poPular: equipmentData.popular,
            capacity: equipmentData.capacity,
            width: equipmentData.width,
            height: equipmentData.height,
            weight: equipmentData.weight,
        };
        images.value = [{
            src: equipmentData.imageUrl,
            file: null
        }];
        existingContractImageUrl.value = equipmentData.contractImageUrl;  // Store existing contract image URL
        existingImageUrl.value = equipmentData.imageUrl;  // Store existing image URL
        isEditMode.value = true;
        equipmentId.value = equipmentData.id;  // Store the equipment ID
        wasPoPularInitially.value = equipmentData.popular;
    }
});
</script>








<style scoped>
@import url('@/assets/AddEquipment.css');

.custom-link {
    color: white;
    text-decoration: none;
}

.custom-link:hover {
    color: gold;
}

.add-image {
    cursor: pointer;
}

.delete-button {
    background: red;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
    margin-top: 10px;
}

input {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
