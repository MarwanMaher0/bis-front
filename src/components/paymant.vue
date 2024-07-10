<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex z-50 items-center justify-center">
        <div class="bg-white relative p-8 rounded-lg w-full max-w-lg text-black shadow-lg">
            <button @click="closeModal" class="absolute top-4 right-4 text-black hover:text-gray-600">
                <closeIcon />
            </button>
            <h3 class="text-2xl mb-6 text-center font-semibold text-gray-800">Payment Method</h3>
            <div class="flex flex-col space-y-4">
                <div class="form-check flex items-center space-x-2">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="Cash" value="Cash"
                        v-model="paymentMethod">
                    <label class="form-check-label text-lg text-gray-700" for="Cash">Cash</label>
                </div>
                <div class="form-check flex items-center space-x-2">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="CreditCard" value="CreditCard"
                        v-model="paymentMethod">
                    <label class="form-check-label text-lg text-gray-700" for="CreditCard">Credit Card</label>
                </div>
                <div class="CreditInfo p-4 border rounded-lg bg-gray-50" v-if="paymentMethod === 'CreditCard'">
                    <div class="card-body space-y-4">
                        <div class="input-group flex flex-col">
                            <label class="input-label text-gray-700 mb-1" for="cardNumber">Card Number</label>
                            <div class="flex items-center">
                                <input id="cardNumber" type="text"
                                    class="form-control border border-gray-300 p-2 rounded-l-lg w-full"
                                    placeholder="5136 1845 5468 3894" v-model="creditCardInfo.number">
                                <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Card Logo"
                                    class="w-8 h-8 ml-2">
                            </div>
                        </div>
                        <div class="flex space-x-4">
                            <div class="input-group flex flex-col w-full">
                                <label class="input-label text-gray-700 mb-1" for="expiryDate">Expiration Date</label>
                                <div class="flex items-center">
                                    <input id="expiryDate" type="text"
                                        class="form-control border border-gray-300 p-2 rounded-l-lg w-full"
                                        placeholder="MM/YY" v-model="creditCardInfo.expiry">
                                    <i class="fa fa-calendar ml-2 text-gray-400"></i>
                                </div>
                            </div>
                            <div class="input-group flex flex-col w-full">
                                <label class="input-label text-gray-700 mb-1" for="cvv">CVV</label>
                                <div class="flex items-center">
                                    <input id="cvv" type="text"
                                        class="form-control border border-gray-300 p-2 rounded-l-lg w-full"
                                        placeholder="•••" v-model="creditCardInfo.cvv">
                                    <i class="fa fa-lock ml-2 text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                        <div class="input-group flex flex-col">
                            <label class="input-label text-gray-700 mb-1" for="cardName">Name</label>
                            <div class="flex items-center">
                                <input id="cardName" type="text"
                                    class="form-control border border-gray-300 p-2 rounded-l-lg w-full"
                                    placeholder="Nada Mo'men" v-model="creditCardInfo.name">
                                <i class="fa fa-user ml-2 text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex justify-end space-x-4">
                <button @click="previousStep"
                    class="px-6 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300 ease-in-out">Back</button>
                <button @click="postPay"
                    class="px-6 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300 ease-in-out">Pay</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineProps, defineEmits } from 'vue';
import axios from 'axios';
import closeIcon from './icons/closeIcon.vue';
import router from '@/router';

const props = defineProps({
    cartItems: Array,
});

const emit = defineEmits(['close', 'previous', 'next', 'finish']);

const paymentMethod = ref('');
const creditCardInfo = ref({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
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

async function clearBasket() {
    const basketId = localStorage.getItem('basketId');
    if (!basketId) return;

    try {
        const response = await axios.put(`/api/Baskets/${basketId}`, {
            id: basketId,
            items: []
        });
        props.cartItems.splice(0, props.cartItems.length); // Clear the cartItems array
        console.log('Successfully cleared the basket:', response.data);
    } catch (error) {
        console.error('Failed to clear the basket', error.response ? error.response.data : error);
    }
}

const postPay = () => {
    axios.post('/api/Payment/LesseePayForUser', {
        cardNumber: creditCardInfo.value.number,
        cvc: creditCardInfo.value.cvv,
        mmyy: creditCardInfo.value.expiry,
        orderId: id.value
    })
        .then(response => {
            console.log('Payment successful:', response.data);
            clearBasket();
            closeModal();
            router.push("/LassorOrder");
        })
        .catch(error => {
            console.error('Payment failed:', error);
        });
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

<style scoped>
.form-check-input {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
}

.form-check-label {
    cursor: pointer;
}

.CreditInfo {
    border: 1px solid #e3e3e3;
    border-radius: 8px;
}

.input-group {
    display: flex;
    flex-direction: column;
}

.input-label {
    font-weight: 600;
}

.input-group-text {
    background-color: #f8f9fa;
    border-right: 0;
    padding: 0.5rem;
    border-radius: 0.375rem 0 0 0.375rem;
}

.form-control {
    padding: 0.5rem;
    border-radius: 0.375rem;
    width: 100%;
}

input:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.5);
}

button:focus {
    outline: none;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
