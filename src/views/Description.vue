<template>
    <div class="p-4 bg-gray-800 text-white">
        <h1 class="text-4xl mt-5 text-center text-antiquewhite">Equipment Description Details:</h1>
        <div class="container mx-auto flex flex-col items-center">
            <div class="w-full md:flex md:items-end">
                <div class="w-full md:w-1/2 p-4">
                    <swiper :slides-per-view="1" navigation pagination>
                        <swiper-slide>
                            <img src="@/assets/images/description/equip2.jpg" class="block w-full" alt="Equipment 1">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/description/equip2.jpg" class="block w-full" alt="Equipment 2">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/description/equip1.jpg" class="block w-full" alt="Equipment 3">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="w-full md:w-1/2 p-4 flex flex-col justify-center">
                    <div class="bg-gray-700 p-4 rounded-lg">
                        <h3 class="text-xl mb-2">Description</h3>
                        <p class="mb-4">Renting a wheel loader provides businesses with the flexibility to access and
                            utilize this powerful construction machine.</p>
                        <div class="flex flex-col space-y-2">
                            <p>Weight: 25t</p>
                            <p>Capacity: 1.60m</p>
                            <p>Height: 3.30m</p>
                            <p>Width: 2.2m</p>
                        </div>
                        <div class="mt-4 flex justify-between items-center">
                            <router-link to="/cart" class="bg-yellow-500 text-black py-2 px-4 rounded"
                                @click="addToCart">ADD TO
                                CART</router-link>
                            <p class="text-xl">$375 per day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 
        <div v-if="showModal" class="fixed inset-0 bg-black   bg-opacity-50 flex z-50 items-center justify-center">

            <div class="bg-gray-700 p-8 text-black  rounded-lg w-1/2" v-if="currentStep === 'FirstPage'">
                <button @click="closeModal()" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 384 512">
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>
                <h3 class="text-xl mb-4 text-center">Shipping Information</h3>
                <div class="flex flex-col space-y-4">
                    <input type="email" class="form-control p-2 rounded" placeholder="Lessee Email"
                        v-model="shippingInfo.email">
                    <input type="text" class="form-control p-2 rounded" placeholder="Receiver First Name"
                        v-model="shippingInfo.firstName">
                    <input type="text" class="form-control p-2 rounded" placeholder="Receiver Last Name"
                        v-model="shippingInfo.lastName">
                    <select class="form-select p-2 rounded" v-model="shippingInfo.country">
                        <option value="" selected disabled hidden>Country</option>
                        <option value="Egypt">Egypt</option>
                    </select>
                    <select class="form-select p-2 rounded" v-model="shippingInfo.city">
                        <option value="" selected disabled hidden>City</option>
                        <option value="Assuit">Assuit</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Sohag">Sohag</option>
                        <option value="Minia">Minia</option>
                        <option value="Mansora">Mansora</option>
                        <option value="Aswan">Aswan</option>
                        <option value="Alex">Alex</option>
                        <option value="Qena">Qena</option>
                    </select>
                    <input type="text" class="form-control p-2 rounded" placeholder="Street info"
                        v-model="shippingInfo.street">
                </div>
                <div class="mt-4 flex justify-end space-x-4">
                    <button type="button" class="bg-yellow-500 text-black py-2 px-4 rounded"
                        @click="nextStep">Next</button>
                </div>
            </div>

            <div class="bg-gray-700 p-8 text-black rounded-lg w-1/2" v-if="currentStep === 'SecondPage'">


                <button @click="closeModal()" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 384 512">
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>
                <h3 class="text-xl mb-4 text-center">Select Delivery Service</h3>
                <div class="flex flex-col space-y-4">
                    <label class="text-light">Delivery Type</label>
                    <select id="deliveryType" class="form-select bg-s p-2 rounded" @change="updateOptions">
                        <option value="" selected disabled hidden>Select Delivery Type</option>
                        <option value="fast">Fast Delivery time</option>
                        <option value="medium">Medium Delivery time</option>
                        <option value="slow">Slower but cheap</option>
                        <option value="free">Free! you get what you pay for</option>
                    </select>
                    <label class="text-light">Delivery Time:</label>
                    <input type="text" id="deliveryTime" class="form-control p-2 rounded" placeholder="Delivery Time"
                        readonly />
                    <label class="text-light">Delivery Cost:</label>
                    <input type="text" id="cost" class="form-control p-2 rounded" placeholder="Delivery Cost"
                        readonly />
                    <label class="text-light">Delivery Name:</label>
                    <input type="text" id="DeliveryName" class="form-control p-2 rounded" placeholder="Delivery Name"
                        readonly />
                </div>
                <div class="mt-4 flex justify-between space-x-4">
                    <button type="button" class="bg-yellow-500 text-black py-2 px-4 rounded"
                        @click="previousStep">Back</button>
                    <button type="button" class="bg-yellow-500 text-black py-2 px-4 rounded"
                        @click="nextStep">Next</button>
                </div>
            </div>

            <div class="bg-gray-700 p-8 rounded-lg w-1/2" v-if="currentStep === 'ThirdPage'">
                <button @click="closeModal()" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 384 512">
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>
                <h3 class="text-xl mb-4 text-center">Your Reservation</h3>
                <div class="card">
                    <div class="card-body">
                        <div class="item-details">
                            <input type="text" class="form-control-plaintext" value="Versatile Material Handler"
                                readonly>
                        </div>
                        <button class="btn btn-outline-danger btn-sm">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="btn btn-outline-success btn-sm">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="item-details">
                            <input type="text" class="form-control-plaintext" value="Versatile Material Handler"
                                readonly>
                        </div>
                        <button class="btn btn-outline-danger btn-sm">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="btn btn-outline-success btn-sm">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="item-details">
                            <input type="text" class="form-control-plaintext" value="Versatile Material Handler"
                                readonly>
                        </div>
                        <button class="btn btn-outline-danger btn-sm">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="btn btn-outline-success btn-sm">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="total-section">
                    <h5>Sub total:</h5>
                    <h5 id="total-amount">$525</h5>
                </div>
                <div class="total-section">
                    <h5>Commision:</h5>
                    <h5 id="total-amount"> + 10</h5>
                </div>
                <div class="total-section">
                    <h5>Shipping Cost:</h5>
                    <h5 id="total-amount"> + 50 </h5>
                </div>
                <hr class="custom-hr">
                <div class="total-section">
                    <h5>Total:</h5>
                    <h5 id="total-amount"> $585</h5>
                </div>
                <div class="mt-4 flex justify-between space-x-4">
                    <button type="button" class="bg-yellow-500 text-black py-2 px-4 rounded"
                        @click="previousStep">Back</button>
                    <button type="button" class="bg-yellow-500 text-black py-2 px-4 rounded"
                        @click="finishReservation">Finish</button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const showModal = ref(false);
const currentStep = ref('FirstPage');
const shippingInfo = ref({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    street: ''
});

function addToCart() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
    currentStep.value = 'FirstPage';
}

function nextStep() {
    if (currentStep.value === 'FirstPage') {
        currentStep.value = 'SecondPage';
    } else if (currentStep.value === 'SecondPage') {
        currentStep.value = 'ThirdPage';
    }
}

function previousStep() {
    if (currentStep.value === 'SecondPage') {
        currentStep.value = 'FirstPage';
    } else if (currentStep.value === 'ThirdPage') {
        currentStep.value = 'SecondPage';
    }
}

function updateOptions() {
    const deliveryType = document.getElementById('deliveryType').value;
    let deliveryTime = '';
    let cost = '';
    let name = '';
    switch (deliveryType) {
        case 'fast':
            deliveryTime = '24 hours';
            cost = '$200';
            name = 'Fast Express';
            break;
        case 'medium':
            deliveryTime = '3-5 days';
            cost = '$100';
            name = 'Standard Delivery';
            break;
        case 'slow':
            deliveryTime = '1-2 weeks';
            cost = '$50';
            name = 'Economy Delivery';
            break;
        case 'free':
            deliveryTime = '2-3 weeks';
            cost = 'Free';
            name = 'Free Shipping';
            break;
        default:
            break;
    }
    document.getElementById('deliveryTime').value = deliveryTime;
    document.getElementById('cost').value = cost;
    document.getElementById('DeliveryName').value = name;
}

function finishReservation() {
    // Handle finishing the reservation
}
</script>

<style scoped>
.closeIcon {
    cursor: pointer;
}

.custom-hr {
    border: 1px solid #ccc;
    margin: 10px 0;
}

.total-section {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
}

.item-details {
    flex-grow: 1;
}

.item-details input {
    width: 100%;
    border: none;
    background: transparent;
    color: #fff;
}

.btn {
    margin-left: 5px;
}
</style>
