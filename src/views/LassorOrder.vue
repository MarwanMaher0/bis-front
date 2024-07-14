<template>
    <div class="container pt-2 mt-24">
        <div class="flex min-h-screen">
            <EquipmentSideBar class="p-4 pt-8" />
            <div class="w-3/4 p-10 min-h-screen bg-white">
                <div class="containe">
                    <div class="header rounded-xl">My Orders</div>
                    <div v-for="order in orders" :key="order.id" class="order">

                        <div class="order-details">
                            <div class="order-date">Order Date: {{ new Date(order.orderDate).toLocaleDateString() }}
                            </div>
                            <div class="order-statu">Order Total: LE{{ order.total }}</div>

                        </div>
                        <div v-for="item in order.items" :key="item.productId" class="machine">
                            <img :src="item.productUrl" class="machine-image" alt="Product Image" />
                            <div class="machine-details">
                                <div class="machine-name">{{ item.productName }}</div>
                            </div>
                            <div class="statu">Price: LE{{ item.price }} </div>
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

const orders = ref([]);


const fetchOrders = async () => {
    try {
        const response = await axios.get('/api/Orders');
        const baseURL = axios.defaults.baseURL; // Replace with your actual base URL

        orders.value = response.data.map(order => ({
            ...order,
            items: order.items.map(item => ({
                ...item,
                productUrl: item.productUrl.replace('https://localhost:7021/', baseURL)
            }))
        }));
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
};

onMounted(fetchOrders);
</script>

<style scoped>
@import url('@/assets/AddEquipment.css');
</style>

<style>
.header {
    margin-left: 200px;
    text-align: left;
    height: 100px;
    display: flex;
    font-size: 24px;
    font-weight: bold;
    align-items: center;
    color: black;
    background-color: #f9c262;
    padding-left: 5px;
    width: 700px;
}

.containe {
    padding-bottom: 0%;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    /* border-radius: 5%; */
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}



.machine {
    margin-left: 200px;
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
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