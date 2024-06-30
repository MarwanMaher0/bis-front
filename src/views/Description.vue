<template>
    <div class="p-4 h-screen pt-36 bg-[#646752] text-white">
        <h1 class="text-4xl mt-5 py-6 text-center text-antiquewhite">Equipment Description Details</h1>
        <div class=" flex flex-col items-center">
            <div class="inline-block">

                <div class="w-screen  bg-[#faebd6] flex items-start">
                    <div class=" md:w-1/2">
                        <swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 2000 }" pagination>
                            <swiper-slide>
                                <img src="@/assets/images/description/equip2.jpg"
                                    class="block w-full h-auto object-cover" alt="Equipment 1">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="@/assets/images/description/equip2.jpg"
                                    class="block w-full h-auto object-cover" alt="Equipment 2">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="@/assets/images/description/equip1.jpg"
                                    class="block w-full h-auto object-cover" alt="Equipment 3">
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="w-full h-full md:w-1/2 p-12 flex flex-col justify-center bg-[#f3e3cf] text-black">
                        <h3 class="text-2xl mb-4 font-bold">Description</h3>
                        <p class="mb-4">Renting a wheel loader provides businesses with the flexibility to access and
                            utilize this powerful construction machine.</p>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

                        <div class="grid grid-cols-2 space-y-2 mb-4">
                            <p>Weight: 25t</p>
                            <p>Capacity: 1.60m</p>
                            <p>Height: 3.30m</p>
                            <p>Width: 2.2m</p>
                        </div>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">


                        <div class="mt-4 flex justify-between items-center">
                            <router-link to="/cart"
                                class="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
                                @click="addToCart">BOOK NOW</router-link>
                            <p class="text-2xl text-red-600">$375 per day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const addToCart = () => {
    // Add to cart logic
};
</script>
