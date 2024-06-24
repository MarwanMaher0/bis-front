<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/FooterComponent.vue'

</script>

<template>
  <Navbar />
  <div class="mt-16">

    <RouterView />
  </div>
  <FooterComponent />

</template>


<style scoped></style>
