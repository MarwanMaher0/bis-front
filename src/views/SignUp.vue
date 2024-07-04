<template>
    <div class="max-w-md mx-auto my-36 p-8 border border-gray-300 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form @submit.prevent="signup">
            <div class="mb-4">
                <label for="role" class="block text-gray-700 font-semibold mb-2">Role:</label>
                <select id="role" v-model="form.role" required
                    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="Lassor">Lessor</option>
                    <option value="Lessee">Lessee</option>
                </select>
            </div>
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
                class="w-full py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600">Sign Up</button>
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
    displayName: '',
    phoneNumber: '',
    password: '',
    city: ''
});
const BasketsForm = ref({
    id: localStorage.getItem('basketId'),
    items: [""]
});
const error = ref('');
const success = ref('');

const signup = () => {
    axios.post('/api/Account/Register?Role=' + form.value.role, form.value, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            success.value = 'Signup successful!';
            localStorage.setItem('token', response.data.token);
            localStorage.removeItem('basketId');
            localStorage.setItem('basketId', form.value.email);


            error.value = '';
            creatBaskets();
        })
        .catch(error => {
            error.value = 'Signup failed. Please try again.';
            success.value = '';
        });
};
const creatBaskets = () => {
    axios.post('/api/Baskets', BasketsForm.value, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            router.push('/');

            error.value = '';
        })
        .catch(error => {
            error.value = 'Signup failed. Please try again.';
            success.value = '';
        });
};


</script>
