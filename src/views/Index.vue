<template>
    <div class="bg-white">
        <!-- Carousel -->
        <div class="relative">
            <swiper :loop="true" :modules="[Autoplay, Navigation, Pagination]" :slides-per-view="1"
                :autoplay="{ delay: 1000 }" class="relative max-h-screen overflow-hidden">
                <swiper-slide>
                    <img :src="validImage" class="object-cover w-full h-full" alt="Top Rated Equipment" />
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
                        <h5 class="text-xl">Top Rated equipment</h5>
                        <h1 class="text-4xl">Rental Equipment</h1>
                        <button class="px-4 py-2 mt-4 bg-yellow-500 rounded">Explore</button>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img :src="twoEquipment" class="object-cover w-full h-full" alt="Top Rated Equipment" />
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
                        <h5 class="text-xl">Top Rated equipment</h5>
                        <h1 class="text-4xl">Rental Equipment</h1>
                        <button class="px-4 py-2 mt-4 bg-yellow-500 rounded">Explore</button>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img :src="plasticInjection" class="object-cover w-full h-full" alt="Top Rated Equipment" />
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
                        <h5 class="text-xl">Top Rated equipment</h5>
                        <h1 class="text-4xl">Rental Equipment</h1>
                        <button class="px-4 py-2 mt-4 bg-yellow-500 rounded">Explore</button>
                    </div>
                </swiper-slide>
            </swiper>

            <div class="absolute inset-x-0 bottom-0 flex justify-center space-x-3">
                <button :class="activeSlide === 0 ? 'bg-white' : 'bg-gray-300'" class="w-3 h-3 rounded-full"
                    @click="setSlide(0)"></button>
                <button :class="activeSlide === 1 ? 'bg-white' : 'bg-gray-300'" class="w-3 h-3 rounded-full"
                    @click="setSlide(1)"></button>
                <button :class="activeSlide === 2 ? 'bg-white' : 'bg-gray-300'" class="w-3 h-3 rounded-full"
                    @click="setSlide(2)"></button>
            </div>
            <button class="absolute top-1/2 left-4 transform -translate-y-1/2" @click="prevSlide">
                <span class="w-8 h-8 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 000 16zm-1-11a1 1 011.707-.707l3 3a1 1 010 1.414l-3 3A1 1 0117.293 13L10 10.414 7.707 8.707A1 1 09 7z"
                            clip-rule="evenodd"></path>
                    </svg>
                </span>
            </button>
            <button class="absolute top-1/2 right-4 transform -translate-y-1/2" @click="nextSlide">
                <span class="w-8 h-8 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 000 16zm1-11a1 1 00-1.707-.707L6.293 9.293a1 1 000 1.414l3 3a1 1 001.414-1.414L8.414 10l2.293-2.293A1 1 0011 7z"
                            clip-rule="evenodd"></path>
                    </svg>
                </span>
            </button>
        </div>

        <PopularEquipment />
        <TrustedCompanies />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

import validImage from '@/assets/images/homepage/istockphoto-1387256339-1024x1024.webp';
import twoEquipment from '@/assets/images/homepage/twoEqipment.jpg';
import plasticInjection from '@/assets/images/homepage/plastic-injection-molding-factory-generative-ai_547471-983.jpg';

import PopularEquipment from '@/components/PopularEquipment.vue';
import TrustedCompanies from '@/components/TrustedCompanies.vue';

const activeSlide = ref(0);

const setSlide = (index) => {
    activeSlide.value = index;
};

const prevSlide = () => {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.slidePrev();
};

const nextSlide = () => {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.slideNext();
};
</script>

<style scoped>
.carousel-inner img {
    max-height: 400px;
}

.carousel-item {
    display: none;
    transition: transform 0.6s ease-in-out;
}

.carousel-item.active {
    display: block;
}
</style>