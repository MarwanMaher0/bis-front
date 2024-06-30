<template>
    <div class="container  pt-2 mt-24">
        <div class="flex">
            <EquipmentSideBar class=" p-4 pt-8" />
            <div class="w-3/4 p-10 bg-white">
                <div class="cart">
                    <h2 class="text-2xl font-bold mb-4">Lessor Equipments Rented</h2>
                    <table class="w-full mb-4 text-left bg-gray-100 rounded-lg">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="p-4 rounded-tl-2xl">Product</th>
                                <th class="p-4">Price</th>
                                <th class="p-4 text-center rounded-tr-2xl">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cartItems" :key="item.id" class="border-b">
                                <td class="p-4 flex items-center">
                                    <img :src="item.image" alt="product" class="w-16 h-16 mr-4">
                                    <span>{{ item.name }}</span>
                                </td>
                                <td class="p-4">{{ item.price }}</td>
                                <td class="p-4 text-center">
                                    <button @click="removeItem(item.id)" class="text-red-600 hover:underline">
                                        <closeIcon class="fill-red-600" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <RouterLink to="/cart" class="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-500">
                        Checkout</RouterLink>
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
import image1 from '@/assets/images/popular-equipment/16666.jpg';
import image2 from '@/assets/images/popular-equipment/argculture.jpg';
import image3 from '@/assets/images/popular-equipment/container.jpg';
const equipments = ref([
    { id: 1, name: 'EQUIPMENT 1', image: WhatsAppimg },
    { id: 2, name: 'EQUIPMENT 2', image: WhatsAppimg },
    { id: 3, name: 'EQUIPMENT 3', image: WhatsAppimg },
    { id: 4, name: 'EQUIPMENT 4', image: WhatsAppimg },
]);
const showModal = ref(false);
const currentStep = ref('FirstPage');
const cartItems = ref([
    { id: 1, name: 'Mighty Mover', price: '£44.00', image: image1 },
    { id: 2, name: 'Robust Earthmover', price: '£249.00', image: image2 },
    { id: 3, name: 'Robust Load', price: '£119.99', image: image3 }
]);
</script>

<style scoped>
@import url('@/assets/AddEquipment.css');
</style>
