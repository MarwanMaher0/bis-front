<template>
    <div class=" pt-2 mt-24">
        <div class="flex">
            <EquipmentSideBar class="p-4 pt-8" />
            <div class="w-3/4 p-10 min-h-screen bg-white">
                <div class="container">
                    <div class="header rounded-xl bg-yellow-400 text-black font-bold text-2xl flex items-center p-5">
                        MACHINES RENTED
                    </div>
                    <div v-for="machine in rentedMachines" :key="machine.machineId"
                        class="machine flex bg-white p-4 mb-4 border-b border-gray-300">
                        <img :src="machine.imageUrl" class="machine-image w-24 h-20 mr-4" alt="Machine Image" />
                        <div class="machine-details">
                            <div class="machine-name text-xl font-bold text-yellow-500">{{ machine.machineName }}</div>
                            <div class="machine-owner text-gray-600">{{ machine.startDate }} / {{ machine.endDate }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import EquipmentSideBar from '@/components/EquipmentSaidBar.vue';

const rentedMachines = ref([]);

const fetchRentedMachines = async () => {
    try {
        const response = await axios.get('/api/Machine/GetRentedMachinesForLessor');
        const baseURL = axios.defaults.baseURL || 'https://your-base-url.com/'; // Replace with your actual base URL

        rentedMachines.value = response.data.map(machine => ({
            machineId: machine.machineId,
            machineName: machine.machineName,
            startDate: machine.startDate,
            endDate: machine.endDate,
            imageUrl: machine.imageUrl.replace('https://localhost:7021/', baseURL),
            LassorName: "Unknown", // Replace with actual field if present in the response
        }));
    } catch (error) {
        console.error('Error fetching rented machines:', error);
    }
};

onMounted(fetchRentedMachines);
</script>

<style scoped>
.header {
    margin-left: 200px;
    text-align: left;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    width: 700px;
}

.container {
    padding-bottom: 0;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.machine {
    margin-left: 200px;
    width: 700px;
}

.machine-image {
    float: left;
    margin-right: 10px;
    width: 100px;
    height: 80px;
}

.machine-details {
    margin-left: 120px;
}

.machine-name {
    font-size: 18px;
    font-weight: bold;
    color: gold;
}

.machine-id {
    font-size: 18px;
    color: black;
}

.machine-owner {
    font-size: 14px;
    color: #999;
}

.statu {
    text-align: right;
    font-size: 14px;
    margin-top: 10px;
    color: #666;
}
</style>
