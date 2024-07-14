<template>
  <section class="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
    <div
      class="bg-[#646852] rounded-3xl w-4/5 max-w-full h-24 mx-10 my-6 text-center py-20 px-0 border-2 border-black relative z-10">
      <h2 class="text-xs text-yellow-500 mt-[-4.3rem]">Our Trusted Partner</h2>
      <h1 class="text-xl text-white font-bold leading-none">Our Trusted Companies</h1>
    </div>
    <div
      class="bg-white grid grid-cols-5 rounded-[1.8rem]  max-w-full h-auto py-20 px-0 whitespace-nowrap text-0 mt-[-4.5rem] mx-12 border-2 border-black relative z-20">
      <a v-for="(image, index) in images" :key="index" href="https://www.albahar.com/">
        <img :src="image" class="  h-24   mt-[-2.06rem] mx-12">
      </a>
    </div>
  </section>
</template>

<script setup>
import pic1 from '@/assets/images/TrustCompany/pic1.jpg';
import pic2 from '@/assets/images/TrustCompany/pic2.jpg';
import pic3 from '@/assets/images/TrustCompany/pic3.jpg';
import pic4 from '@/assets/images/TrustCompany/pic4.jpg';
import picc5 from '@/assets/images/TrustCompany/picc5.jpg';

const images = [pic1, pic2, pic3, pic4, picc5];
</script>

<style scoped>
/* Custom styles can be added here if necessary */
</style>
