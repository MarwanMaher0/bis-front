<template>
    <div class="border p-4 rounded-lg shadow-md">
        <h2 class="bg-yellow-600 text-white p-2 text-center rounded-t-lg">{{ equipment.name }}</h2>
        <div class="mt-4 flex flex-col items-center">
            <img :src="equipment.image" alt="Equipment Image" class="w-full   mb-4 rounded-lg" />
            <div class="flex gap-5">
                <button @click="editEquipment"
                    class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition duration-300">
                    <i class="fas fa-edit mr-2"></i> Edit
                </button>
                <button @click="confirmDelete"
                    class="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-700 transition duration-300">
                    <i class="fas fa-trash mr-2"></i> Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const props = defineProps({
    equipment: Object,
    fetchEquipments: Function
});

const emit = defineEmits(['equipmentDeleted']);
const router = useRouter();

const deleteEquipment = async () => {
    try {
        await axios.delete(`/api/Machine/${props.equipment.id}`);
        emit('equipmentDeleted', props.equipment.id);
        props.fetchEquipments();
    } catch (error) {
        console.error('Error deleting equipment:', error);
    }
};

const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete this equipment?')) {
        deleteEquipment();
    }
};

const editEquipment = async () => {
    try {
        const response = await axios.get(`/api/Machine/${props.equipment.id}`);
        let equipmentData = response.data;
        // Assuming baseURL is defined somewhere in your component or imported
        const baseURL = axios.defaults.baseURL; // Use your actual base URL

        equipmentData.imageUrl = equipmentData.imageUrl.replace('https://localhost:7021/', baseURL);
        router.push({ name: 'AddEquipment', query: { equipmentData: JSON.stringify(equipmentData) } });
    } catch (error) {
        console.error('Error fetching equipment data:', error);
    }
};
</script>

<style scoped>
button i {
    margin-right: 8px;
}
</style>
