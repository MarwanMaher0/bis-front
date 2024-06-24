<template>
    <div class="w-1/4 bg-gray-700 p-4">
        <ul class="flex flex-col space-y-4 text-lg font-bold text-white">
            <li>
                <router-link class="custom-link" to="/AddEquipment">Add Equipment</router-link>
            </li>
            <li>
                <router-link class="custom-link" to="/Equipments">Lessor Equipments</router-link>
            </li>
            <li>
                <router-link class="custom-link" to="/EquipmentsRented">Lessor Equipments Rented</router-link>
            </li>
            <li>
                <router-link class="custom-link" to="/LesseeOrders">Lessee Orders</router-link>
            </li>
        </ul>
    </div>
</template>