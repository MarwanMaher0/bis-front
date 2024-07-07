<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex z-50 items-center justify-center">
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
                <button @click="postPay"
                    class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Pay</button>
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
    cvv: ''
});

const emit = defineEmits(['close']);

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
.CerditInfo {
    border: 1px solid #e3e3e3;
    border-radius: 8px;
}

.input-group-text {
    background-color: #f8f9fa;
    border-right: 0;
}

.form-control {
    border-left: 0;
}

.calendar-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
}

.calendar-header {
    grid-column: span 7;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.calendar-body {
    display: contents;
}

.day-name {
    font-weight: bold;
    text-align: center;
}

.day {
    text-align: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
}

.day:hover {
    background-color: #f0f0f0;
}

.selected {
    background-color: #ffd700;
}

.day.range {
    background-color: #ffd700;
}
</style>
