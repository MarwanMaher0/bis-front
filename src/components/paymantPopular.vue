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
                <button @click="postPay"
                    class="px-6 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300 ease-in-out">Pay
                    $300.00</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import closeIcon from './icons/closeIcon.vue';
import router from '@/router';
import { useRouter } from 'vue-router';

const paymentMethod = ref('');
const creditCardInfo = ref({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
});

const emit = defineEmits(['close']);
const closeModal = () => {
    emit('close');
};

const postPay = () => {
    axios.post('/api/Payment/PayForPopular', {
        cardNumber: creditCardInfo.value.number,
        cvc: creditCardInfo.value.cvv,
    })
        .then(response => {
            console.log('Payment successful:', response.data);
            emit('close');
            router.push("/Equipments");
        })
        .catch(error => {
            console.error('Payment failed:', error);
        });
};

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
