<template>
    <div class="bg-[#f8f0e5] p-10 mt-14">
        <div class="">
            <!-- Equipment Items -->
            <div class="grid grid-cols-3 gap-10">
                <div v-for="item in equipmentRow1" :key="item.id" class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img :src="item.image" :alt="item.altText" class="h-48 w-full object-cover">
                    <div class="p-4">
                        <p class="text-sm text-gray-600 mb-1">{{ item.category }}</p>
                        <h5 class="text-lg font-semibold mb-2">{{ item.title }}</h5>
                        <p class="text-gray-800 font-bold">{{ item.price }} per day</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Import images
import serviceLoaderImage from '@/assets/images/popular-equipment/service-loader-2.jpg';
import industrialCraneBlueSkyImage from '@/assets/images/popular-equipment/industrial-crane-blue-sky.jpg';
import cranesImage from '@/assets/images/popular-equipment/cranes.jpg';
import containerImage from '@/assets/images/popular-equipment/container.jpg';
import closeUpExcavatorImage from '@/assets/images/popular-equipment/close-up-construction-site-excavator.jpg';
import serviceCraneImage from '@/assets/images/popular-equipment/service-crane-3.jpg';
import excavatorsImage from '@/assets/images/popular-equipment/excaftors.jpg';

// Data for the equipment items
const equipmentRow1 = ref([
    {
        id: 1,
        image: serviceLoaderImage,
        altText: 'Wheel loader',
        category: 'Wheel loader',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 2,
        image: industrialCraneBlueSkyImage,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 3,
        image: cranesImage,
        altText: 'Crane',
        category: 'Crane',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 4,
        image: containerImage,
        altText: 'Container handler',
        category: 'Container handler',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 5,
        image: industrialCraneBlueSkyImage,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 6,
        image: closeUpExcavatorImage,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 7,
        image: serviceCraneImage,
        altText: 'Crane',
        category: 'Crane',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 8,
        image: industrialCraneBlueSkyImage,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 9,
        image: excavatorsImage,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
]);
</script>

<style scoped></style>