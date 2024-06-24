<template>
    <div class="border p-4 rounded-lg shadow-md">
        <h2 class="bg-green-700 text-white p-2 text-center rounded-t-lg">{{ equipment.name }}</h2>
        <div class="mt-4 flex flex-col items-center">
            <img :src="equipment.image" alt="Equipment Image" class="w-full h-48 object-cover mb-4 rounded-lg" />
            <div class="flex gap-5">
                <button
                    class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition duration-300">
                    <i class="fas fa-edit mr-2"></i> Edit
                </button>
                <button
                    class="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-700 transition duration-300">
                    <i class="fas fa-trash mr-2"></i> Delete
                </button>
            </div>
        </div>
    </div>
</template>



<script setup>
defineProps({
    equipment: Object
});
</script>

<style scoped>
button i {
    margin-right: 8px;
}
</style>