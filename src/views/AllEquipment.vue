<template>
    <div class="bg-[#f8f0e5] p-10 pt-32">
        <div>
            <!-- Equipment Items -->
            <div class="grid grid-cols-3 gap-10">
                <div v-for="item in equipment" :key="item.id" class="bg-white rounded-lg shadow-md overflow-hidden">
                    <router-link :to="{ name: 'Description', params: { id: item.id } }">
                        <img :src="item.imageUrl" :alt="item.machineName" class="h-48 w-full object-cover" />
                        <div class="p-4">
                            <p class="text-sm text-gray-600 mb-1">{{ item.category || 'No Category' }}</p>
                            <h5 class="text-lg font-semibold mb-2">{{ item.machineName }}</h5>
                            <p class="text-gray-800 font-bold">${{ item.priceOfRent }} per day</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const equipment = ref([]);

const getAllMachines = async () => {
    try {
        const response = await axios.get('/api/Machine/GetAllMachines');
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
    getAllMachines();
});
</script>

<style scoped></style>