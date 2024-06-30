<template>
    <div class="bg-white">
        <!-- Carousel -->
        <div class="relative">
            <swiper :loop="true" :slides-per-view="1" :autoplay="{ delay: 200 }"
                class="relative max-h-screen overflow-hidden">
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

        <!-- Popular Equipment -->
        <!-- <div class="bg-gray-800 py-12">
            <h1 class="text-center text-white text-3xl mb-8">Popular Equipment</h1>
            <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img :src="industrialCrane" class="w-full h-48 object-cover" alt="Wheel loader" />
                    <div class="p-4">
                        <p class="text-yellow-500"><i class="fa-regular fa-compass"></i> Wheel loader</p>
                        <h4 class="text-lg font-bold">Efficient earth mover</h4>
                        <p>from 75$ per day</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img :src="excavators" class="w-full h-48 object-cover" alt="Excavator" />
                    <div class="p-4">
                        <p class="text-yellow-500"><i class="fa-regular fa-compass"></i> Excavator</p>
                        <h4 class="text-lg font-bold">Efficient earth mover</h4>
                        <p>from 75$ per day</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img :src="container" class="w-full h-48 object-cover" alt="Wheel loader" />
                    <div class="p-4">
                        <p class="text-yellow-500"><i class="fa-regular fa-compass"></i> Wheel loader</p>
                        <h4 class="text-lg font-bold">Efficient earth mover</h4>
                        <p>from 75$ per day</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8">
                <router-link to="/allequipment">
                    <button class="px-6 py-3 bg-yellow-500 rounded">SEE ALL EQUIPMENT</button>
                </router-link>
            </div>
        </div> -->
        <PopularEquipment />


        <!-- Trusted Companies -->
        <!-- <section class="bg-gray-100 py-12">
            <div class="container mx-auto text-center">
                <h2 class="text-yellow-500 text-sm">Our Trusted Partner</h2>
                <h1 class="text-3xl font-bold text-gray-800 mb-8">Our Trusted Companies</h1>
                <div class="flex justify-center space-x-8">
                    <img :src="pic1" class="h-20" alt="Trusted Company 1" />
                    <img :src="pic2" class="h-20" alt="Trusted Company 2" />
                    <img :src="pic3" class="h-20" alt="Trusted Company 3" />
                    <img :src="pic4" class="h-20" alt="Trusted Company 4" />
                    <img :src="pic5" class="h-20" alt="Trusted Company 5" />
                </div>
            </div>
        </section> -->
        <TrustedCompanies />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
// import { Navigation, Autoplay } from 'swiper';
import validImage from '@/assets/images/homepage/istockphoto-1387256339-1024x1024.webp';
import twoEquipment from '@/assets/images/homepage/twoEqipment.jpg';
import plasticInjection from '@/assets/images/homepage/plastic-injection-molding-factory-generative-ai_547471-983.jpg';
import industrialCrane from '@/assets/images/popular-equipment/industrial-crane-blue-sky.jpg';
import excavators from '@/assets/images/popular-equipment/excaftors.jpg';
import container from '@/assets/images/popular-equipment/container.jpg';
import pic1 from '@/assets/images/TrustCompany/pic1.jpg';
import pic2 from '@/assets/images/TrustCompany/pic2.jpg';
import pic3 from '@/assets/images/TrustCompany/pic3.jpg';
import pic4 from '@/assets/images/TrustCompany/pic4.jpg';
import pic5 from '@/assets/images/TrustCompany/picc5.jpg';
import PopularEquipment from '@/components/PopularEquipment.vue';
import TrustedCompanies from '@/components/TrustedCompanies.vue';

// SwiperCore.use([Navigation, Autoplay]);


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