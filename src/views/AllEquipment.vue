<template>
    <div class="bg-[#f8f0e5] p-10">
        <div class="">
            <!-- Equipment Items -->
            <div class="grid grid-cols-3 gap-10">

                <div v-for="item in equipmentRow1" :key="item.id" class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img :src="item.image" :alt="item.altText" class=" h-48 w-full object-cover">
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

// Data for the equipment items
const equipmentRow1 = ref([
    {
        id: 1,
        image: new URL('@/assets/images/popular-equipment/service-loader-2.jpg', import.meta.url).href,
        altText: 'Wheel loader',
        category: 'Wheel loader',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 2,
        image: new URL('@/assets/images/popular-equipment/industrial-crane-blue-sky.jpg', import.meta.url).href,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 3,
        image: new URL('@/assets/images/popular-equipment/cranes.jpg', import.meta.url).href,
        altText: 'Crane',
        category: 'Crane',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 4,
        image: new URL('@/assets/images/popular-equipment/container.jpg', import.meta.url).href,
        altText: 'Container handler',
        category: 'Container handler',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 5,
        image: new URL('@/assets/images/popular-equipment/industrial-crane-blue-sky.jpg', import.meta.url).href,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 6,
        image: new URL('@/assets/images/popular-equipment/close-up-construction-site-excavator.jpg', import.meta.url).href,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 7,
        image: new URL('@/assets/images/popular-equipment/service-crane-3.jpg', import.meta.url).href,
        altText: 'Crane',
        category: 'Crane',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 8,
        image: new URL('@/assets/images/popular-equipment/industrial-crane-blue-sky.jpg', import.meta.url).href,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
    {
        id: 9,
        image: new URL('@/assets/images/popular-equipment/excaftors.jpg', import.meta.url).href,
        altText: 'Excavator',
        category: 'Excavator',
        title: 'Efficient earth mover',
        price: '$75',
    },
]);
</script>

<style scoped></style>