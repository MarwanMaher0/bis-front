<template>
    <div class="bg-white relative p-8 rounded-lg w-full max-w-lg text-black">
        <button @click="closeModal" class="absolute top-4 right-4 text-black hover:text-gray-600">
            <closeIcon />
        </button>
        <h3 class="text-xl mb-4 text-center">Payment Method</h3>
        <div class="flex flex-col space-y-4">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="paymentMethod" id="Cash" value="Cash"
                    v-model="paymentMethod">
                <label class="form-check-label" for="Cash">Cash</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="paymentMethod" id="CreditCard" value="CreditCard"
                    v-model="paymentMethod">
                <label class="form-check-label" for="CreditCard">Credit Card</label>
            </div>
            <div class="CerditInfo p-3" v-if="paymentMethod === 'CreditCard'">
                <div class="card-body">
                    <div class="input-group">
                        <span class="input-group-text">Card Number</span>
                        <input type="text" class="form-control" placeholder="Card Number"
                            v-model="creditCardInfo.number">
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Expiry Date</span>
                        <input type="text" class="form-control" placeholder="MM/YY" v-model="creditCardInfo.expiry">
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">CVV</span>
                        <input type="text" class="form-control" placeholder="CVV" v-model="creditCardInfo.cvv">
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 flex justify-between space-x-4">
            <button @click="previousStep"
                class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Back</button>
            <button @click="PostPay" class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Pay</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
    cartItems: Array,
});

const emit = defineEmits(['close', 'previous', 'next', 'finish']);

const paymentMethod = ref('');
const creditCardInfo = ref({
    number: '',
    expiry: '',
    cvv: ''
});

const closeModal = () => {
    emit('close');
};

const previousStep = () => {
    emit('previous');
};

const nextStep = () => {
    emit('next');
};

const id = ref(null);

const PostPay = async () => {
    try {
        const response = await axios.post('/api/Payment/LesseePayForUser', {
            cardNumber: creditCardInfo.value.number,
            cvc: creditCardInfo.value.cvv,
            mmyy: creditCardInfo.value.expiry,
            orderId: id.value
        });
        console.log('Payment successful:', response.data);
        emit('finish', response.data); // Emit finish event with response data
    } catch (error) {
        console.error('Payment failed:', error);
    }
};

const fetchOrders = async () => {
    try {
        const response = await axios.get('/api/Orders');
        if (response.data.length > 0) {
            id.value = response.data[0].id; // Get the first order's ID
        } else {
            console.error('No orders found');
        }
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
};

onMounted(() => {
    fetchOrders();
});
</script>
