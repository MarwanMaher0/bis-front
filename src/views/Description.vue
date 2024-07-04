<template>
    <div class="py-4 h-screen pt-36 bg-[#646752] text-white">
        <h1 class="text-4xl mt-5 py-6 text-center text-antiquewhite">Equipment Description Details</h1>
        <div class="flex flex-col items-center">
            <div class="inline-block">
                <div class="w-screen bg-[#faebd6] flex items-start">
                    <div class="md:w-1/2">
                        <swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 2000 }" pagination>
                            <swiper-slide v-for="(image, index) in machineImages" :key="index">
                                <img :src="image" class="block w-full h-auto object-cover"
                                    :alt="`Equipment ${index + 1}`">
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="w-full h-full md:w-1/2 p-12 flex flex-col justify-center bg-[#f3e3cf] text-black">
                        <h3 class="text-3xl mb-4 font-bold">Description</h3>
                        <p class="mb-4 text-xl">{{ machine.description }}</p>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                        <div class="grid grid-cols-2 space-y-2 mb-4">
                            <p>Weight: {{ machine.weight }}</p>
                            <p>Capacity: {{ machine.capacity }}</p>
                            <p>Height: {{ machine.height }}</p>
                            <p>Width: {{ machine.width }}</p>
                        </div>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                        <div class="mt-4 flex flex-col items-start">
                            <div class="flex items-center space-x-4 mb-4">
                                <label for="quantity" class="text-lg font-bold">Quantity:</label>
                                <input id="quantity" type="number" v-model="quantity" min="1"
                                    class="w-16 text-center bg-gray-200 p-2 rounded" />
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <button class="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
                                    @click="addToCart">
                                    BOOK NOW
                                </button>
                                <p class="text-2xl text-red-600">${{ machine.priceOfRent }} per day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const machine = ref({});
const machineImages = ref([]);
const quantity = ref(1); // Quantity state

const fetchMachineDetails = async () => {
    try {
        const response = await axios.get(`api/Machine/${id}/`);
        machine.value = response.data;
        machineImages.value = response.data.images || [];
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    fetchMachineDetails();
});

const addToCart = async () => {
    const basketId = localStorage.getItem("basketId");
    const newItem = {
        machineId: machine.value.id,
        name: machine.value.machineName,
        PicturUrl: machine.value.imageUrl,
        category: machine.value.category,
        price: machine.value.priceOfRent,
        quantity: quantity.value
    };

    try {
        const response = await axios.get(`/api/Baskets/${basketId}`);
        let basketItems = response.data.items;

        // Initialize basketItems if it is null or undefined
        if (!basketItems) {
            basketItems = [];
        }

        const existingItem = basketItems.find(item => item.machineId === newItem.machineId);
        if (existingItem) {
            existingItem.quantity += newItem.quantity;
        } else {
            basketItems.push(newItem);
        }

        const updateResponse = await axios.put(`/api/Baskets/${basketId}`, {
            id: basketId,
            items: basketItems
        });

        console.log('Successfully added to cart:', updateResponse.data);
        localStorage.setItem("basketId", updateResponse.data.id);
        router.push('/cart');
    } catch (error) {
        console.error('Failed to add item to cart', error.response ? error.response.data : error);
    }
};

</script>
