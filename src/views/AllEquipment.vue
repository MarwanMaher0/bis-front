<template>
    <div class="bg-[#f8f0e5] h-full p-10 pt-32">
        <div>
            <!-- Equipment Items -->
            <div class="grid grid-cols-4 gap-10">
                <div v-for="item in equipment" :key="item.id"
                    class="bg-white rounded-lg shadow-none overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105">

                    <router-link :to="{ name: 'Description', params: { id: item.id } }">
                        <img :src="item.imageUrl" :alt="item.machineName" class="h-48 w-full object-cover" />
                        <div class="p-4">
                            <p class="text-sm text-gray-600 mb-1">{{ item.machineModel || 'No Machine Model' }}</p>
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
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const equipment = ref([]);

const mapMachineData = (machine) => ({
    ...machine,
    imageUrl: (machine.imageUrl || machine.machineImage).replace('https://localhost:7021/', axios.defaults.baseURL),
    contractImageUrl: (machine.contractImageUrl || machine.machineContractr).replace('https://localhost:7021/', axios.defaults.baseURL),
    description: machine.description || '',
    categoryId: machine.categoryId || 0,
});

const getMachinesInCategory = async (categoryId) => {
    try {
        const response = await axios.get(`/api/Machine/GetMachinesInCategory?Id=${categoryId}`);
        equipment.value = response.data.map(mapMachineData);
    } catch (error) {
        console.error('Error fetching machines in category:', error);
    }
};

const getAllMachines = async () => {
    try {
        const response = await axios.get('/api/Machine/GetAllMachines');
        equipment.value = response.data.map(mapMachineData);
    } catch (error) {
        console.error('Error fetching all machines:', error);
    }
};

const fetchMachines = async () => {
    const categoryId = route.query.categoryId;
    if (categoryId) {
        await getMachinesInCategory(categoryId);
    } else {
        await getAllMachines();
    }
};

onMounted(() => {
    fetchMachines();
});

watch(() => route.query.categoryId, async (newCategoryId) => {
    await fetchMachines();
});
</script>

<style scoped></style>
