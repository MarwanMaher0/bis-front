<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import FooterComponent from './components/FooterComponent.vue';

const isTransparent = ref(true);
const route = useRoute();

const handleScroll = () => {
  if (route.path === '/' && window.scrollY === 0) {
    isTransparent.value = true;
  } else {
    isTransparent.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Watch for route changes
watch(route, () => {
  handleScroll(); // Update transparency when route changes
});
</script>

<template>
  <Navbar :isTransparent="isTransparent" />
  <div>
    <RouterView />
  </div>
  <FooterComponent />
</template>

<style scoped></style>
