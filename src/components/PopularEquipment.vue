<template>
  <div class="w-full">
    <div class="bg-[#646852] p-4 py-10">
      <h1 class="text-white text-3xl text-center mb-8">Popular Equipment</h1>
      <div class="grid grid-cols-3 gap-5">
        <div class="h-[300px]" v-for="(item, index) in equipment" :key="index">
          <router-link :to="{ name: 'Description', params: { id: item.id } }">

            <div class="relative h-[300px]  rounded-lg transform transition-transform duration-500 hover:scale-105">
              <img :src="item.imageUrl" alt="Equipment" class="h-full w-full">
              <div
                class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white flex flex-col justify-end">
                <p class="text-sm"><i class="fa-regular fa-compass"></i> {{ item.machineName }}</p>
                <h4 class="text-xl font-semibold">{{ item.description }}</h4>
                <p class="text-lg">From LE {{ item.priceOfRent }} per day</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <router-link to="/AllEquipment">
        <div class="flex justify-center mt-8">
          <button
            class="bg-yellow-500 text-black hover:bg-black hover:text-white py-2 px-8 rounded-full transition-colors duration-300">
            SEE ALL EQUIPMENT
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const equipment = ref([]);

const GetAllPopularMachines = async () => {
  try {
    const response = await axios.get('/api/Machine/GetAllPopularMachines');
    equipment.value = response.data.map(machine => ({
      ...machine,
      imageUrl: machine.imageUrl.replace('https://localhost:7021/', axios.defaults.baseURL),
      contractImageUrl: machine.contractImageUrl.replace('https://localhost:7021/', axios.defaults.baseURL),
    }));
    console.log(equipment.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  GetAllPopularMachines();
});
</script>
<style scoped>
.machine-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
}

.machine-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.machine-card h3 {
  margin: 8px 0;
}
</style>