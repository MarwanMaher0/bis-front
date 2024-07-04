<template>
    <div class="max-w-md mx-auto my-36 p-8 border border-gray-300 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
        <form @submit.prevent="login">
            <div class="mb-4">
                <label for="role" class="block text-gray-700 font-semibold mb-2">Role:</label>
                <select id="role" v-model="form.role" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="Lessor">Lessor</option>
                    <option value="Lessee">Lessee</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-semibold mb-2">Email:</label>
                <input type="email" id="email" v-model="form.email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-semibold mb-2">Password:</label>
                <input type="password" id="password" v-model="form.password" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <button type="submit"
                class="w-full py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600">Login</button>
        </form>
        <div v-if="error" class="mt-4 text-red-500 text-center">{{ error }}</div>
        <div v-if="success" class="mt-4 text-green-500 text-center">{{ success }}</div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
    role: 'Lessor',
    email: '',
    password: ''
});

const error = ref('');
const success = ref('');

const login = async () => {
    try {
        const response = await axios.post('/api/Account/Login', form.value, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        success.value = 'Login successful!';
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('buskitId', form.value.email);
        router.push('/');
        error.value = '';
    } catch (err) {
        error.value = 'Login failed. Please try again.';
        success.value = '';
    }
};
</script>
