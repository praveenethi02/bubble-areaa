<template>
  <div class="min-h-screen bg-pink-50">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
</script>