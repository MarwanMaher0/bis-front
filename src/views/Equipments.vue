<template>
    <div class="container pt-2 mt-24">
        <div class="flex h-screen">
            <EquipmentSideBar class="p-4 pt-8" />
            <div class="w-3/4 p-6 bg-white">
                <div class="grid grid-cols-2 gap-4">
                    <EquipmentCard v-for="equipment in equipments" :key="equipment.id" :equipment="equipment" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import EquipmentSideBar from '@/components/EquipmentSaidBar.vue';
import EquipmentCard from '@/components/EquipmentCard.vue';

const equipments = ref([]);

const fetchEquipments = async () => {
    try {
        const response = await axios.get('/api/Machine/GetAllMachineForSpecificUser');
        const baseURL = axios.defaults.baseURL; // Use your actual base URL
        equipments.value = response.data.map(machine => ({
            id: machine.id,
            name: machine.machineName,
            image: machine.imageUrl.replace('https://localhost:7021/', baseURL),
            priceOfRent: machine.priceOfRent,
            description: machine.description,
            category: machine.category,
        }));
    } catch (error) {
        console.error('Error fetching equipment:', error);
    }
};

onMounted(fetchEquipments);
</script>

<style scoped>
@import url('@/assets/AddEquipment.css');
</style>
