<template>
    <header>
        <nav :class="{ 'bg-transparent': isTransparent, 'bg-black': !isTransparent }"
            class="fixed w-full z-50 top-0 py-2 shadow-md transition-colors duration-300">
            <div class="container mx-auto flex items-center justify-between ">
                <router-link class="text-white text-lg font-semibold" to="/">
                    <i class="fa-solid fa-truck-monster"></i>
                    <img src="@/assets/images/Logo2.png" class="w-[170px]" alt="logo">
                </router-link>
                <button class="text-white lg:hidden focus:outline-none" @click="toggleNavbar">
                    <i class="fa-solid fa-list"></i>
                </button>
                <div :class="{ 'hidden lg:flex': !isNavbarOpen, 'flex flex-col lg:flex-row': isNavbarOpen }"
                    class="w-full lg:w-auto">
                    <ul class="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
                        <li class="nav-item">
                            <router-link class="text-white py-2 px-4 hover:bg-gray-700 rounded" to="/"
                                exact-active-class="text-yellow-500">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="text-white py-2 px-4 hover:bg-gray-700 rounded" to="/AllEquipment"
                                exact-active-class="text-yellow-500">Shop online</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="text-white py-2 px-4 hover:bg-gray-700 rounded" to="/AddEquipment"
                                exact-active-class="text-yellow-500">Add advertise</router-link>
                        </li>
                        <li class="relative nav-item dropdown">
                            <button class="text-white px-4 hover:bg-gray-700 rounded inline-flex items-center"
                                @click="toggleDropdown">
                                <span>Category</span>
                                <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M5.293 7.293l4.293 4.293 4.293-4.293-1.293-1.293-3 3-3-3z" />
                                </svg>
                            </button>
                            <ul :class="{ 'hidden': !isDropdownOpen, 'block': isDropdownOpen }"
                                class="absolute bg-white text-black rounded shadow-lg">
                                <li><router-link class="block px-4 py-2 hover:bg-gray-200"
                                        to="/AllEquipment">Agriculture</router-link></li>
                                <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Industrial</a></li>
                                <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Electronics</a></li>
                                <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Cosmetics</a></li>
                                <li>
                                    <hr class="border-gray-300">
                                </li>
                                <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Other</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
                        <li class="nav-item">
                            <router-link class="text-white py-2 px-4 hover:bg-gray-700 rounded" to="/Equipments"
                                exact-active-class="text-yellow-500"><i
                                    class="fa-regular fa-user mr-2"></i>Profile</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="text-white py-2 px-4 hover:bg-gray-700 rounded" to="/cart"
                                exact-active-class="text-yellow-500"><i
                                    class="fa-regular fa-user mr-2"></i>Cart</router-link>
                        </li>
                        <li class="relative dropdown">
                            <button class="text-white px-4 hover:bg-gray-700 rounded inline-flex items-center"
                                @click="toggleRegisterDropdown">
                                <span>Register</span>
                                <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M5.293 7.293l4.293 4.293 4.293-4.293-1.293-1.293-3 3-3-3z" />
                                </svg>
                            </button>
                            <ul :class="{ 'hidden': !isRegisterDropdownOpen, 'block': isRegisterDropdownOpen }"
                                class="absolute bg-white text-black pt-1 mt-1 rounded shadow-lg">
                                <li><router-link class="block px-4 py-2 hover:bg-gray-200"
                                        to="/Login">Login</router-link></li>
                                <li><router-link class="block px-4 py-2 hover:bg-gray-200" to="/SignUp">Sign
                                        up</router-link></li>
                                <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Log out</a></li>
                                <li>
                                    <hr class="border-gray-300">
                                </li>
                                <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Other</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    isTransparent: Boolean
});

const isNavbarOpen = ref(false);
const isDropdownOpen = ref(false);
const isRegisterDropdownOpen = ref(false);

const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
};

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleRegisterDropdown = () => {
    isRegisterDropdownOpen.value = !isRegisterDropdownOpen.value;
};
</script>

<style scoped>
.cursor-not-allowed {
    cursor: not-allowed;
}
</style>
