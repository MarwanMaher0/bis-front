<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import FooterComponent from './components/FooterComponent.vue';
import { loadingState } from './loading'; // Import the loading state

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
  <div>
    <Navbar :isTransparent="isTransparent" />
    <div class="min-h-screen">
      <RouterView />
    </div>
    <FooterComponent />
    <div v-if="loadingState.isLoading"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped>
/* Loader styling */
.loader {
  width: 40px;
  height: 26px;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 8px calc(100% - 4px);
  position: relative;
}

.loader:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  left: 0;
  top: 0;
  animation:
    l3-1 1.5s linear infinite alternate,
    l3-2 0.75s cubic-bezier(0, 200, .8, 200) infinite;
}

@keyframes l3-1 {
  100% {
    left: calc(100% - 8px);
  }
}

@keyframes l3-2 {
  100% {
    top: -0.1px;
  }
}
</style>
