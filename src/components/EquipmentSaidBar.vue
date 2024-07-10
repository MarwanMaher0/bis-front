<template>
    <div class="w-1/4 bg-[#646752] mt-2 p-1">
        <ul class="flex flex-col space-y-4 text-lg font-bold text-white">
            <li v-if="showlink">
                <router-link class="custom-link" to="/AddEquipment" active-class="active-link">Add
                    Equipment</router-link>
            </li>
            <li v-if="showlink">
                <router-link class="custom-link" to="/Equipments" active-class="active-link">Lassor
                    Equipments</router-link>
            </li>
            <li v-if="showlink">
                <router-link class="custom-link" to="/Equipments-Rented" active-class="active-link">Lassor Equipments
                    Rented</router-link>
            </li>
            <li v-if="!showlink">
                <router-link class="custom-link" to="/LassorOrder" active-class="active-link">Lessee
                    Orders</router-link>
            </li>
        </ul>
    </div>
</template>

<style>
.custom-link {
    text-decoration: none;
    color: inherit;
}

.active-link {
    color: gold;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const role = ref(localStorage.getItem("role"));
console.log(role.value);
const showlink = ref(role.value === "Lassor");

const updateRole = () => {
    const newRole = localStorage.getItem("role");
    if (role.value !== newRole) {
        role.value = newRole;
        showlink.value = role.value === "Lassor";
    }
};

onMounted(() => {
    window.addEventListener('storage', updateRole);
});

onUnmounted(() => {
    window.removeEventListener('storage', updateRole);
});
</script>
