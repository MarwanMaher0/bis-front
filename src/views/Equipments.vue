<template>
    <div class="container  pt-2 mt-24">
        <div class="flex h-screen">
            <EquipmentSideBar class=" p-4 pt-8" />
            <div class="w-3/4 p-6 bg-white">
                <div class="grid grid-cols-2 gap-4">
                    <EquipmentCard v-for="equipment in equipments" :key="equipment.id" :equipment="equipment" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import EquipmentSideBar from '@/components/EquipmentSaidBar.vue';
import EquipmentCard from '@/components/EquipmentCard.vue';
import WhatsAppimg from '@/assets/images/NewFolder/WhatsApp Image 2024-06-22 at 16.03.42_16147654.jpg';

const equipments = ref([
    { id: 1, name: 'EQUIPMENT 1', image: WhatsAppimg },
    { id: 2, name: 'EQUIPMENT 2', image: WhatsAppimg },
    { id: 3, name: 'EQUIPMENT 3', image: WhatsAppimg },
    { id: 4, name: 'EQUIPMENT 4', image: WhatsAppimg },
]);


</script>

<style scoped>
@import url('@/assets/AddEquipment.css');
</style>
