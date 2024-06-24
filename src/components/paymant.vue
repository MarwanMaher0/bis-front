<template>
    <div class="bg-olive-500 p-6 rounded-lg w-96 mx-auto relative">
        <button class="absolute top-2 right-2 text-white" @click="closeOrder">X</button>
        <h2 class="text-white text-xl">Your Order</h2>
        <div class="mt-4">
            <div class="flex justify-between text-white">
                <span>Digging Dynamo</span>
                <span>$700</span>
            </div>
            <div class="flex justify-between text-white mt-2">
                <span>Subtotal</span>
                <span>$700</span>
            </div>
            <div class="flex justify-between text-white mt-2">
                <span>Total</span>
                <span>$700</span>
            </div>
        </div>
        <div class="mt-6">
            <h3 class="text-white text-lg">Payment Method</h3>
            <div class="mt-2">
                <input type="radio" id="payOnSite" value="pay-on-site" v-model="selectedPayment">
                <label for="payOnSite" class="text-white ml-2">Pay on-site</label>
            </div>
            <div class="mt-2">
                <input type="radio" id="bankTransfer" value="bank-transfer" v-model="selectedPayment">
                <label for="bankTransfer" class="text-white ml-2">Direct bank transfer</label>
            </div>
            <div class="mt-2">
                <input type="radio" id="creditCard" value="credit-card" v-model="selectedPayment">
                <label for="creditCard" class="text-white ml-2">Credit card (Stripe)</label>
                <div v-if="selectedPayment === 'credit-card'" class="mt-2 text-white text-sm">
                    <p>Pay with your credit card via Stripe. Use the card number 4242424242424242 with CVC 123, a valid
                        expiration
                        date and random 5-digit ZIP-code to test a payment.</p>
                </div>
            </div>
            <div class="mt-2">
                <input type="radio" id="paypal" value="paypal" v-model="selectedPayment">
                <label for="paypal" class="text-white ml-2">Pay by PayPal</label>
            </div>
        </div>
        <div class="flex justify-between mt-6">
            <button class="bg-white text-olive-500 px-4 py-2 rounded" @click="reserveOrder">Reserve</button>
            <button class="bg-gray-300 text-gray-800 px-4 py-2 rounded" @click="goBack">Back</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedPayment = ref('pay-on-site');

const closeOrder = () => {
    // Handle closing the order
};

const reserveOrder = () => {
    // Handle reserving the order
};

const goBack = () => {
    // Handle going back to the previous step
};
</script>

<style>
/* Add any additional styles if needed */
.bg-olive-500 {
    background-color: #6d6d46;
}
</style>