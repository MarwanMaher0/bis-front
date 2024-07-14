<template>
    <div class="lightbox-Container" :class="{ 'd-none': currentPage !== 'FirstPage' }" id="FirstPage">
        <div class="lightbox-Items">
            <div class="Information w-50" id="1">
                <i class="closeIcon fa-solid fa-xmark fa-3x d-flex justify-content-end w-100 text-white"
                    @click="closePage"></i>
                <h3>Shipping Information</h3>
                <input type="email" class="form-control" placeholder="Lessee Email" aria-label="Username"
                    aria-describedby="basic-addon1" />
                <input type="text" class="form-control" placeholder="Receiver Person First Name" aria-label="Username"
                    aria-describedby="basic-addon1" />
                <input type="text" class="form-control" placeholder="Receiver Person Last Name" aria-label="Username"
                    aria-describedby="basic-addon1" />
                <select class="form-select bg-s">
                    <option value="" selected disabled hidden>Country</option>
                    <option value="1">Egypt</option>
                </select>
                <select class="form-select bg-s">
                    <option selected class="text-muted">City</option>
                    <option value="2">Assuit</option>
                    <option value="2">Cairo</option>
                    <option value="2">Sohag</option>
                    <option value="2">Minia</option>
                    <option value="2">Mansora</option>
                    <option value="2">Aswan</option>
                    <option value="2">Alex</option>
                    <option value="2">Qena</option>
                </select>
                <input type="text" class="form-control" placeholder="Street info" aria-label="Username"
                    aria-describedby="basic-addon1" />
                <div class="Boxbuttons d-flex justify-content-evenly">
                    <button type="button" class="btn btn-outline-warning" @click="nextPage('SecondPage')">Next</button>
                </div>
            </div>
        </div>
    </div>

    <div class="lightbox-Container" :class="{ 'd-none': currentPage !== 'SecondPage' }" id="SecondPage">
        <div class="lightbox-Items">
            <div class="Information w-50">
                <i class="closeIcon fa-solid fa-xmark fa-3x d-flex justify-content-end w-100 text-white"
                    @click="closePage"></i>
                <h3>Select Delivery Service</h3>
                <form class="w-100 d-flex flex-column align-content-around flex-wrap">
                    <label class="text-light">Delivery Type</label>
                    <select id="deliveryType" class="form-select bg-s" @change="updateOptions">
                        <option value="" selected disabled hidden>Select Delivery Type</option>
                        <option value="fast">Fast Delivery time:</option>
                        <option value="medium">Medium Delivery time</option>
                        <option value="slow">Slower but cheap</option>
                        <option value="free">Free! you get what you pay for</option>
                    </select>
                    <br>
                    <label class="text-light">Delivery Time:</label>
                    <input type="text" id="deliveryTime" class="form-control" placeholder="Delivery Time" readonly />
                    <br>
                    <label class="text-light">Delivery Cost:</label>
                    <input type="text" id="cost" class="form-control" placeholder="Delivery Cost" readonly />
                    <br>
                    <label class="text-light">Delivery Name:</label>
                    <input type="text" id="DeliveryName" class="form-control" placeholder="Delivery Name" readonly />
                    <br>
                    <div class="Boxbuttons d-flex justify-content-evenly">
                        <button type="button" class="btn btn-outline-warning"
                            @click="previousPage('FirstPage')">Back</button>
                        <button type="button" class="btn btn-outline-warning"
                            @click="nextPage('ThirdPage')">Next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="lightbox-Container" :class="{ 'd-none': currentPage !== 'ThirdPage' }" id="ThirdPage">
        <div class="lightbox-Items">
            <div class="Information w-50" id="1">
                <i class="closeIcon fa-solid fa-xmark fa-3x d-flex justify-content-end w-100 text-white"
                    @click="closePage"></i>
                <h3 class="mb-3">Your Reservation</h3>
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
                    <h5 id="total-amount">LE525</h5>
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
                    <h5 id="total-amount"> LE585</h5>
                </div>
                <div class="Boxbuttons mb-3 d-flex justify-content-evenly">
                    <button type="button" class="btn btn-outline-warning"
                        @click="previousPage('SecondPage')">Back</button>
                    <button type="button" class="btn btn-outline-warning" @click="nextPage('FourthPage')">Next</button>
                </div>
            </div>
        </div>
    </div>

    <div class="lightbox-Container" :class="{ 'd-none': currentPage !== 'FourthPage' }" id="FourthPage">
        <div class="lightbox-Items">
            <div class="Information w-50" id="1">
                <div class="calendar">
                    <div class="header">
                        <button id="prev" @click="changeMonth(-1)">Prev</button>
                        <div class="month-year">
                            <span id="month">{{ monthNames[currentDate.getMonth()] }}</span>
                            <span id="year">{{ currentDate.getFullYear() }}</span>
                        </div>
                        <button id="next" @click="changeMonth(1)">Next</button>
                    </div>
                    <div class="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div class="days" id="days">
                        <div v-for="day in calendarDays" :key="day.date" :class="{ inactive: !day.isCurrentMonth }">
                            {{ day.date.getDate() }}
                        </div>
                    </div>
                </div>
                <div class="Boxbuttons d-flex justify-content-evenly">
                    <button type="button" class="btn btn-outline-warning" @click="nextPage('FirstPage')">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const currentPage = ref('FirstPage');

const showFirstPage = () => {
    currentPage.value = 'FirstPage';
};

const closePage = () => {
    currentPage.value = null;
};

const nextPage = (page) => {
    currentPage.value = page;
};

const previousPage = (page) => {
    currentPage.value = page;
};

const updateOptions = () => {
    const deliveryType = document.getElementById('deliveryType').value;
    let deliveryTime = '';
    let cost = '';
    let name = '';
    switch (deliveryType) {
        case 'fast':
            deliveryTime = '24 hours';
            cost = 'LE200';
            name = 'Fast Express';
            break;
        case 'medium':
            deliveryTime = '3-5 days';
            cost = 'LE100';
            name = 'Standard Delivery';
            break;
        case 'slow':
            deliveryTime = '1-2 weeks';
            cost = 'LE50';
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
};

// Calendar
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = ref(new Date());

const calendarDays = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = currentDate.value.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = [];

    for (let i = 0; i < firstDay; i++) {
        daysArray.push({ date: new Date(year, month, i - firstDay + 1), isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }

    return daysArray;
});

const changeMonth = (delta) => {
    currentDate.value.setMonth(currentDate.value.getMonth() + delta);
};
</script>