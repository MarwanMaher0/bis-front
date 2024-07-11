<template>
    <div class=" min-h-screen pt-36 bg-[#646752] text-white">
        <h1 class="text-4xl mt-5 py-6 text-center text-antiquewhite">Equipment Description Details</h1>
        <div class="flex flex-col items-center">
            <div class="max-w-full min-w-full bg-[#faebd6] flex items-start">
                <div class="md:w-1/2">
                    <swiper :loop="true" :modules="[Autoplay, Navigation, Pagination]" :slides-per-view="1"
                        :autoplay="{ delay: 1000 }">
                        <swiper-slide v-for="(image, index) in machineImages" :key="index">
                            <img :src="image" class="block w-full max-h-[480px]" :alt="'Equipment ' + (index + 1)">
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
                        <div class="flex justify-between items-center w-full">
                            <button v-if="!showlink"
                                class="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
                                @click="addToCart">
                                BOOK NOW
                            </button>
                            <p class="text-2xl text-red-600">${{ machine.priceOfRent }} per day</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div class="mt-8 grid grid-cols-5">
            <div class=""></div>
            <div class="col-span-3">
                <div class="mb-8">
                    <h3 class="text-2xl mb-4">Add Your Review</h3>
                    <form @submit.prevent="submitReview">

                        <div class="mb-4">
                            <label for="comment" class="block text-lg font-bold mb-2">Comment</label>
                            <textarea v-model="newReview.comment" id="comment"
                                class="w-full text-black px-3 py-2 border rounded" required></textarea>
                        </div>
                        <button type="submit"
                            class="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600">Submit</button>
                    </form>
                </div>
                <h2 class="text-3xl mb-4 font-bold">Reviews</h2>

                <!-- Reviews List -->
                <div v-if="reviews.length > 0">
                    <div v-for="(review, index) in reviews" :key="index"
                        class="mb-4 p-4 bg-[#f3e3cf] text-black rounded">
                        <h4 class="text-xl font-bold">{{ review.displayName }}</h4>
                        <p>{{ review.comment }}</p>
                    </div>
                </div>
                <p class="mb-8" v-else>No reviews yet.</p>

                <!-- Add Review Form -->

            </div>
            <div class=""></div>

        </div>

    </div>
</template>




<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import axios from 'axios';

const baseURL = axios.defaults.baseURL;
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const machine = ref({});
const machineImages = ref([]);
const quantity = ref(1);
const Role = localStorage.getItem("role");

const showlink = Role === "Lassor";

// Reviews state
const reviews = ref([]);
const newReview = ref({
    displayName: '',
    comment: '',
});

const fetchMachineDetails = async () => {
    try {
        const response = await axios.get(`api/Machine/${id}/`);
        machine.value = response.data;

        machine.value.imageUrl = machine.value.imageUrl.replace('https://localhost:7021/', baseURL);
        machine.value.contractImageUrl = machine.value.contractImageUrl.replace('https://localhost:7021/', baseURL);

        machineImages.value = [machine.value.imageUrl, machine.value.contractImageUrl];
    } catch (error) {
        console.error(error);
    }
};

const fetchReviews = async () => {
    try {
        const response = await axios.get(`/api/Reviews/GetAllReviews/${id}`);
        if (response.data === "No Any Reviews On this Equipment") {
            reviews.value = []; // No reviews available
        } else {
            reviews.value = response.data;
        }
    } catch (error) {
        console.error('Failed to fetch reviews', error.response ? error.response.data : error);
        reviews.value = []; // Ensure reviews is an empty array if there's an error
    }
};



const submitReview = async () => {
    try {
        await axios.post('/api/Reviews', {
            ...newReview.value,
            machineId: id
        });
        fetchReviews();
        newReview.value.displayName = '';
        newReview.value.comment = '';
    } catch (error) {
        alert('you have to rent this equipment to be able to review it');

    }
};

onMounted(() => {
    fetchMachineDetails();
    fetchReviews();
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
