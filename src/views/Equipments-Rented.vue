<template>
    <div class="container  pt-2 mt-24">
        <div class="flex">
            <EquipmentSideBar class=" p-4 pt-8" />
            <div class="w-3/4 p-10 min-h-screen bg-white">

                <div class="containe ">
                    <div class="header rounded-xl">MACHIENS RENTED</div>

                    <div class="machine">
                        <img :src=image1 class="machine-image" alt="Machine Image" />
                        <div class="machine-details">
                            <div class="machine-name">ROBUST LOAD</div>
                            <div class="machine-id">184677</div>
                            <div class="machine-owner">Ahmed nabil</div>
                        </div>

                    </div>

                    <div class="machine">
                        <img :src=image2 class="machine-image" alt="Machine Image" />
                        <div class="machine-details">
                            <div class="machine-name">EFFICIENT EARTHMOVER</div>
                            <div class="machine-id">32456</div>
                            <div class="machine-owner">mohameed ali</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import EquipmentSideBar from '@/components/EquipmentSaidBar.vue';
import image1 from '@/assets/images/popular-equipment/16666.jpg';
import image2 from '@/assets/images/popular-equipment/argculture.jpg';


</script>

<style scoped>
@import url('@/assets/AddEquipment.css');
</style>

<style>
.header {
    margin-left: 200px;
    text-align: left;
    height: 100px;
    display: flex;
    font-size: 24px;
    font-weight: bold;
    align-items: center;
    color: black;
    background-color: #f9c262;
    padding-left: 5px;
    width: 700px;
}

.containe {
    padding-bottom: 0%;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    /* border-radius: 5%; */
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}



.machine {
    margin-left: 200px;
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    width: 700px;
}

.machine-image {
    float: left;
    margin-right: 10px;
    width: 100px;
    height: 80px;
}

.machine-details {
    margin-left: 120px;
}

.machine-name {
    font-size: 18px;
    font-weight: bold;
    color: gold;
}

.machine-id {
    font-size: 18px;
    color: black;
}

.machine-owner {
    font-size: 14px;
    color: #999;
}

.statu {
    text-align: right;
    font-size: 14px;
    margin-top: 10px;
    color: #666;
}
</style>