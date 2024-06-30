<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
            <!-- Shopping Cart -->
            <div class="cart">
                <h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>
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
                <button @click="showModal = true"
                    class="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-500">Checkout</button>
            </div>

            <!-- Checkout Modal -->
            <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex z-50 items-center justify-center">
                <div class="bg-white relative p-8 rounded-lg w-full max-w-lg text-black"
                    v-if="currentStep === 'FirstPage'">
                    <button @click="closeModal()"
                        class="absolute  cursor-pointer  top-4 right-4 text-black hover:text-gray-600">
                        <closeIcon />
                    </button>

                    <h3 class="text-xl mb-4 text-center">Shipping Information</h3>
                    <div class="flex flex-col space-y-4">
                        <input type="email" class="w-full p-2 border rounded" placeholder="Lessee Email"
                            v-model="shippingInfo.email">
                        <input type="text" class="w-full p-2 border rounded" placeholder="Receiver First Name"
                            v-model="shippingInfo.firstName">
                        <input type="text" class="w-full p-2 border rounded" placeholder="Receiver Last Name"
                            v-model="shippingInfo.lastName">
                        <select class="w-full p-2 border rounded" v-model="shippingInfo.country">
                            <option value="" disabled selected>Country</option>
                            <option value="Egypt">Egypt</option>
                        </select>
                        <select class="w-full p-2 border rounded" v-model="shippingInfo.city">
                            <option value="" disabled selected>City</option>
                            <option value="Assuit">Assuit</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Sohag">Sohag</option>
                            <option value="Minia">Minia</option>
                            <option value="Mansora">Mansora</option>
                            <option value="Aswan">Aswan</option>
                            <option value="Alex">Alex</option>
                            <option value="Qena">Qena</option>
                        </select>
                        <input type="text" class="w-full p-2 border rounded" placeholder="Street Info"
                            v-model="shippingInfo.street">

                    </div>
                    <div class="mt-4 flex justify-between space-x-4">
                        <button @click="nextStep()"
                            class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Next</button>
                    </div>
                </div>

                <div class="bg-white relative p-8 rounded-lg w-full max-w-lg text-black"
                    v-if="currentStep === 'SecondPage'">
                    <button @click="closeModal()" class="absolute top-4 right-4 text-black hover:text-gray-600">
                        <closeIcon />
                    </button>
                    <h3 class="text-xl mb-4 text-center">Select Delivery Service</h3>
                    <div class="flex flex-col space-y-4">
                        <label class="text-light">Delivery Type</label>
                        <select id="deliveryType" class="w-full p-2 border rounded" @change="updateOptions">
                            <option value="" selected disabled>Select Delivery Type</option>
                            <option value="fast">Fast Delivery time</option>
                            <option value="medium">Medium Delivery time</option>
                            <option value="slow">Slower but cheap</option>
                            <option value="free">Free! you get what you pay for</option>
                        </select>
                        <label class="text-light">Delivery Time:</label>
                        <input type="text" id="deliveryTime" class="w-full p-2 border rounded"
                            placeholder="Delivery Time" readonly />
                        <label class="text-light">Delivery Cost:</label>
                        <input type="text" id="cost" class="w-full p-2 border rounded" placeholder="Delivery Cost"
                            readonly />
                        <label class="text-light">Delivery Name:</label>
                        <input type="text" id="DeliveryName" class="w-full p-2 border rounded"
                            placeholder="Delivery Name" readonly />
                    </div>
                    <div class="mt-4 flex justify-between space-x-4">
                        <button @click="previousStep()"
                            class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Back</button>
                        <button @click="nextStep()"
                            class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Next</button>
                    </div>
                </div>

                <!-- Calendar Page -->
                <div class="bg-white relative p-8 rounded-lg w-full max-w-lg text-black"
                    v-if="currentStep === 'CalendarPage'">
                    <button @click="closeModal()" class="absolute top-4 right-4 text-black hover:text-gray-600">
                        <closeIcon />
                    </button>
                    <h3 class="text-xl mb-4 text-center">Select a Date</h3>
                    <div class="calendar-container">
                        <div class="calendar-header">
                            <button @click="prevMonth" class="prev-month">‹</button>
                            <div class="month-year">{{ monthYear }}</div>
                            <button @click="nextMonth" class="next-month">›</button>
                        </div>
                        <div class="calendar-body">
                            <div class="day-name" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
                            <div class="day" v-for="day in daysInMonth" :key="day.date" @click="selectDate(day.date)"
                                :class="{ 'selected': day.isSelected }">
                                {{ day.date.getDate() }}
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-between space-x-4">
                        <button @click="previousStep()"
                            class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Back</button>
                        <button @click="nextStep()"
                            class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Next</button>
                    </div>
                </div>

                <div class="bg-white p-8 relative rounded-lg w-full max-w-lg text-black"
                    v-if="currentStep === 'ThirdPage'">
                    <button @click="closeModal()" class="absolute top-4 right-4 text-black hover:text-gray-600">
                        <closeIcon />
                    </button>
                    <h3 class="text-xl mb-4 text-center">Your Reservation</h3>
                    <div class="space-y-4">
                        <div v-for="(item, index) in cartItems" :key="index" class="flex justify-between items-center">
                            <input type="text" class="w-1/2 p-2 border rounded" :value="item.name" readonly>
                            <button class="text-red-600 hover:underline" @click="removeItem(item.id)">Remove</button>
                            <button class="text-green-600 hover:underline">+</button>
                        </div>
                    </div>
                    <div class="mt-4 space-y-4">
                        <div class="flex justify-between">
                            <h5>Subtotal:</h5>
                            <h5>$525</h5>
                        </div>
                        <div class="flex justify-between">
                            <h5>Commission:</h5>
                            <h5>+ 10%</h5>
                        </div>
                        <div class="flex justify-between">
                            <h5>Total Cost:</h5>
                            <h5>$577.5</h5>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-between space-x-4">
                        <button @click="previousStep()"
                            class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Back</button>
                        <button @click="finishReservation()"
                            class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400">Finish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import closeIcon from '@/components/icons/closeIcon.vue';
import image1 from '@/assets/images/popular-equipment/16666.jpg';
import image2 from '@/assets/images/popular-equipment/argculture.jpg';
import image3 from '@/assets/images/popular-equipment/container.jpg';

const showModal = ref(false);
const currentStep = ref('FirstPage');
const cartItems = ref([
    { id: 1, name: 'Mighty Mover', price: '£44.00', image: image1 },
    { id: 2, name: 'Robust Earthmover', price: '£249.00', image: image2 },
    { id: 3, name: 'Robust Load', price: '£119.99', image: image3 }
]);
const shippingInfo = ref({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    street: ''
});
const month = ref(new Date().getMonth());
const year = ref(new Date().getFullYear());
const selectedDate = ref(null);

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push({
            date: new Date(date),
            isSelected: selectedDate.value && date.toDateString() === selectedDate.value.toDateString()
        });
        date.setDate(date.getDate() + 1);
    }
    return days;
}

const daysInMonth = ref(getDaysInMonth(month.value, year.value));

const monthYear = ref(`${new Date(year.value, month.value).toLocaleString('default', { month: 'long' })} ${year.value}`);

function prevMonth() {
    if (month.value === 0) {
        month.value = 11;
        year.value -= 1;
    } else {
        month.value -= 1;
    }
    daysInMonth.value = getDaysInMonth(month.value, year.value);
    monthYear.value = `${new Date(year.value, month.value).toLocaleString('default', { month: 'long' })} ${year.value}`;
}

function nextMonth() {
    if (month.value === 11) {
        month.value = 0;
        year.value += 1;
    } else {
        month.value += 1;
    }
    daysInMonth.value = getDaysInMonth(month.value, year.value);
    monthYear.value = `${new Date(year.value, month.value).toLocaleString('default', { month: 'long' })} ${year.value}`;
}

function selectDate(date) {
    selectedDate.value = date;
    daysInMonth.value = getDaysInMonth(month.value, year.value);
}

function closeModal() {
    showModal.value = false;
}

function nextStep() {
    if (currentStep.value === 'FirstPage') {
        currentStep.value = 'SecondPage';
    } else if (currentStep.value === 'SecondPage') {
        currentStep.value = 'CalendarPage';
    } else if (currentStep.value === 'CalendarPage') {
        currentStep.value = 'ThirdPage';
    }
}

function previousStep() {
    if (currentStep.value === 'SecondPage') {
        currentStep.value = 'FirstPage';
    } else if (currentStep.value === 'CalendarPage') {
        currentStep.value = 'SecondPage';
    } else if (currentStep.value === 'ThirdPage') {
        currentStep.value = 'CalendarPage';
    }
}

function finishReservation() {
    console.log('Reservation completed');
    closeModal();
}

function removeItem(id) {
    cartItems.value = cartItems.value.filter(item => item.id !== id);
}

function updateOptions() {
    const deliveryType = document.getElementById('deliveryType').value;
    if (deliveryType === 'fast') {
        document.getElementById('deliveryTime').value = '1-2 days';
        document.getElementById('cost').value = '£20.00';
        document.getElementById('DeliveryName').value = 'Express Delivery';
    } else if (deliveryType === 'medium') {
        document.getElementById('deliveryTime').value = '3-5 days';
        document.getElementById('cost').value = '£10.00';
        document.getElementById('DeliveryName').value = 'Standard Delivery';
    } else if (deliveryType === 'slow') {
        document.getElementById('deliveryTime').value = '5-7 days';
        document.getElementById('cost').value = '£5.00';
        document.getElementById('DeliveryName').value = 'Economy Delivery';
    } else if (deliveryType === 'free') {
        document.getElementById('deliveryTime').value = '7-10 days';
        document.getElementById('cost').value = 'Free';
        document.getElementById('DeliveryName').value = 'Free Delivery';
    }
}
</script>

<style scoped>
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
</style>
