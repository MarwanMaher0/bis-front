<template>
    <div class="max-w-md mx-auto my-36 p-8 border border-gray-300 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form @submit.prevent="signup">
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-semibold mb-2">Email:</label>
                <input type="email" id="email" v-model="form.email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div class="mb-4">
                <label for="displayName" class="block text-gray-700 font-semibold mb-2">Display Name:</label>
                <input type="text" id="displayName" v-model="form.displayName" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div class="mb-4">
                <label for="phoneNumber" class="block text-gray-700 font-semibold mb-2">Phone Number:</label>
                <input type="text" id="phoneNumber" v-model="form.phoneNumber" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-semibold mb-2">Password:</label>
                <input type="password" id="password" v-model="form.password" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div class="mb-6">
                <label for="city" class="block text-gray-700 font-semibold mb-2">City:</label>
                <input type="text" id="city" v-model="form.city" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <button type="submit"
                class="w-full py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600">Sign
                Up</button>
        </form>
        <div v-if="error" class="mt-4 text-red-500 text-center">{{ error }}</div>
        <div v-if="success" class="mt-4 text-green-500 text-center">{{ success }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
    email: '',
    displayName: '',
    phoneNumber: '',
    password: '',
    city: ''
});

const error = ref('');
const success = ref('');

const signup = async () => {
    try {
        const response = await axios.post('https://022a-156-209-94-241.ngrok-free.app/api/Account/Register?Role=Lessee', form.value, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        success.value = 'Signup successful!';
        error.value = '';
    } catch (err) {
        error.value = 'Signup failed. Please try again.';
        success.value = '';
    }
};
</script>