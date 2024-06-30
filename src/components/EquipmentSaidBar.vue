<template>
    <div class="w-1/4 bg-[#646752] mt-2 p-1">
        <ul class="flex flex-col space-y-4 text-lg font-bold text-white">
            <li>
                <router-link class="custom-link" to="/AddEquipment" active-class="active-link">Add
                    Equipment</router-link>
            </li>
            <li>
                <router-link class="custom-link" to="/Equipments" active-class="active-link">Lessor
                    Equipments</router-link>
            </li>
            <li>
                <router-link class="custom-link" to="/Equipments-Rented" active-class="active-link">Lessor Equipments
                    Rented</router-link>
            </li>
            <li>
                <router-link class="custom-link" to="/LessorOrder" active-class="active-link">Lessee
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
