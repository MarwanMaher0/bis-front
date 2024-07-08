<template>
    <header>
        <nav :class="{ 'bg-transparent': isTransparent, 'bg-black': !isTransparent }"
            class="fixed w-full z-50 top-0 py-2 shadow-md transition-colors duration-300">
            <div class="container mx-auto flex items-center justify-between">
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
                        <li v-if="showlink" class="nav-item">
                            <router-link class="text-white py-2 px-4 hover:bg-gray-700 rounded" to="/AddEquipment"
                                exact-active-class="text-yellow-500">Add advertise</router-link>
                        </li>
                        <li class="relative nav-item dropdown" @mouseover="openDropdown" @mouseleave="closeDropdown">
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
                                <li v-for="category in categories" :key="category.id">
                                    <a class="block px-4 py-2 hover:bg-gray-200" @click="goToCategory(category.id)">
                                        {{ category.name }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
                        <li class="nav-item">
                            <router-link :to="profileRoute" class="text-white py-2 px-4 hover:bg-gray-700 rounded"
                                exact-active-class="text-yellow-500"><i
                                    class="fa-regular fa-user mr-2"></i>Profile</router-link>
                        </li>
                        <li v-if="!showlink" class="nav-item">
                            <router-link class="text-white flex px-2 hover:bg-gray-700 rounded" to="/cart"
                                exact-active-class="text-yellow-500">
                                <IconShoppingCart /> Cart
                            </router-link>
                        </li>
                        <li class="relative nav-item dropdown" @mouseover="openRegisterDropdown"
                            @mouseleave="closeRegisterDropdown">
                            <button class="text-white px-4 hover:bg-gray-700 rounded inline-flex items-center"
                                @click="toggleRegisterDropdown">
                                <span>Register</span>
                                <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M5.293 7.293l4.293 4.293 4.293-4.293-1.293-1.293-3 3-3-3z" />
                                </svg>
                            </button>
                            <ul :class="{ 'hidden': !isRegisterDropdownOpen, 'block': isRegisterDropdownOpen }"
                                class="absolute bg-white text-black pt-1  rounded shadow-lg">
                                <li><router-link class="block px-4 py-2 hover:bg-gray-200"
                                        to="/Login">Login</router-link></li>
                                <li><router-link class="block px-4 py-2 hover:bg-gray-200" to="/SignUp">Sign
                                        up</router-link></li>
                                <li><a class="block px-4 py-2 hover:bg-gray-200" href="#" @click="signOut">Log out</a>
                                </li>
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import IconShoppingCart from '@/components/icons/icon-shopping-cart.vue';

defineProps({
    isTransparent: Boolean
});

const router = useRouter();
const isNavbarOpen = ref(false);
const isDropdownOpen = ref(false);
const isRegisterDropdownOpen = ref(false);
const categories = ref([]);
const Role = localStorage.getItem("role");

const showlink = ref(Role === "Lessor" ? true : false);
const profileRoute = computed(() => (showlink.value ? '/Equipments' : '/LessorOrder'));

const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
};

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const openDropdown = () => {
    isDropdownOpen.value = true;
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

const toggleRegisterDropdown = () => {
    isRegisterDropdownOpen.value = !isRegisterDropdownOpen.value;
};

const openRegisterDropdown = () => {
    isRegisterDropdownOpen.value = true;
};

const closeRegisterDropdown = () => {
    isRegisterDropdownOpen.value = false;
};

const goToCategory = (categoryId) => {
    router.push({ path: '/AllEquipment', query: { categoryId } });
    isDropdownOpen.value = false;  // Close the dropdown after selection
};

const fetchCategories = async () => {
    try {
        const response = await axios.get('/api/Machine/Category');
        categories.value = response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

const signOut = async () => {
    try {
        await axios.post('/api/Account/signout');
        localStorage.removeItem('token');
        localStorage.removeItem('basketId');
        localStorage.removeItem('role');

        router.push('/Login');
    } catch (error) {
        console.error('Error signing out:', error);
    }
};

onMounted(() => {
    fetchCategories();
});
</script>

<style scoped>
.cursor-not-allowed {
    cursor: not-allowed;
}
</style>
