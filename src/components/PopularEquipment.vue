<template>
  <div class=" w-full ">
    <div class="bg-[#646852] p-4 py-10 ">
      <h1 class="text-white text-3xl text-center mb-8">Popular Equipment</h1>
      <div class="grid grid-cols-3 gap-5">

        <div class="h-[300px]" v-for="(item, index) in equipment" :key="index">
          <div
            class="relative h-[300px] overflow-hidden rounded-lg transform transition-transform duration-500 hover:scale-105">
            <img :src="item.image" alt="Equipment" class="  object-cover">
            <div
              class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white flex flex-col justify-end">
              <p class="text-sm"><i class="fa-regular fa-compass"></i> {{ item.name }}</p>
              <h4 class="text-xl font-semibold">{{ item.description }}</h4>
              <p class="text-lg">{{ item.price }}</p>
            </div>
          </div>
        </div>

      </div>
      <router-link to="/all-equipment">
        <div class="flex justify-center mt-8">
          <button
            class="bg-yellow-500 text-black hover:bg-black hover:text-white py-2 px-8 rounded-full transition-colors duration-300">SEE
            ALL EQUIPMENT</button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import argcultureImage from '@/assets/images/popular-equipment/argculture.jpg'
import equipmentImage from '@/assets/images/popular-equipment/equipment.jpg'
import img16666 from '@/assets/images/popular-equipment/16666.jpg'

const equipment = [
  {
    image: img16666,
    name: 'Wheel loader',
    description: 'Efficient earth mover',
    price: 'from 75$ per day'
  },
  {
    image: argcultureImage,
    name: 'Excavators',
    description: 'Efficient earth mover',
    price: 'from 75$ per day'
  },
  {
    image: equipmentImage,
    name: 'Wheel loader',
    description: 'Efficient earth mover',
    price: 'from 75$ per day'
  },
  {
    image: img16666,
    name: 'Wheel loader',
    description: 'Efficient earth mover',
    price: 'from 75$ per day'
  },
  {
    image: equipmentImage,
    name: 'Wheel loader',
    description: 'Efficient earth mover',
    price: 'from 75$ per day'
  },
  {
    image: argcultureImage,
    name: 'Wheel loader',
    description: 'Efficient earth mover',
    price: 'from 75$ per day'
  }
]
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>
