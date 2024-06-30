<template>
    <div class="container  pt-2 mt-24">
        <div class="flex">
            <Equipment-saidBar class=" p-4 pt-8" />
            <div class=" w-3/4 p-6 bg-white">
                <form @submit.prevent="submitForm" class="w-3/4 mx-auto">
                    <div class="p-6 border-2 border-gray-200 shadow-lg">
                        <h1 class="bg-yellow-400 p-2 text-lg font-bold">Add New Equipment</h1>
                        <h6 class="mt-4">Add Image of your Equipment</h6>
                        <div class="flex flex-col space-y-4">
                            <div class="flex flex-wrap gap-4 image-upload-container">
                                <div v-for="(image, index) in images" :key="index" class="relative image-upload">
                                    <input type="file" accept="image/*" @change="(e) => previewImage(e, index)"
                                        class="block">
                                    <button @click="() => removeImage(index)" type="button"
                                        class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">×</button>
                                </div>
                                <div @click="addImageUpload"
                                    class="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full cursor-pointer">
                                    +</div>
                            </div>
                            <div class="flex flex-col space-y-4">
                                <input class="form-control" type="text" v-model="formData.equipmentName"
                                    placeholder="Equipment Name">
                                <input class="form-control" type="number" v-model="formData.price"
                                    placeholder="Price per day">
                                <select class="form-control p-[10px]" v-model="formData.category">
                                    <option value="" disabled selected hidden>Equipment Category</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Industrial">Industrial</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Cosmetics">Cosmetics</option>
                                    <option value="Other">Other</option>
                                </select>
                                <input class="form-control" type="text" v-model="formData.weight"
                                    placeholder="Equipment Weight">
                                <input class="form-control" type="text" v-model="formData.capacity"
                                    placeholder="Equipment Capacity">
                                <input class="form-control" type="text" v-model="formData.description"
                                    placeholder="Description">
                                <input class="form-control" type="text" v-model="formData.width"
                                    placeholder="Equipment Width">
                                <input class="form-control" type="text" v-model="formData.height"
                                    placeholder="Equipment Height">
                            </div>
                            <h6>Upload Equipment Ownership Contract</h6>
                            <div>
                                <input class="form-control" id="formFileSm" type="file" @change="handleFileUpload">
                            </div>
                            <div class="flex items-baseline gap-3">
                                <input type="checkbox" class="" v-model="formData.addToPopular" id="commesion">
                                <label for="commesion">Add to popular equipment page, commission: $100</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import EquipmentSaidBar from '@/components/EquipmentSaidBar.vue';

const formData = ref({
    equipmentName: '',
    price: '',
    category: '',
    weight: '',
    capacity: '',
    description: '',
    width: '',
    height: '',
    addToPopular: false,
    ownershipContract: null,
});

const images = ref([{ src: null, file: null }]);

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
    formData.value.ownershipContract = file;
};

const submitForm = () => {
    console.log('Form Data:', formData.value);
    console.log('Images:', images.value);
};
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