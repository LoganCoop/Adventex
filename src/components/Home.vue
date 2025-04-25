<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Welcome to Adventex</h1>
      <h2 class="subtitle">A collection of text adventure games.</h2>
      <p>Select a game from the navigation bar to begin your adventure!</p>
      <div v-if="firstVisit" class="notification is-info mt-5">
        <button class="delete" @click="dismissWelcome"></button>
        Thanks for visiting Adventex! Choose a game to start your adventure.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Example: Show a welcome message only on first visit
const firstVisit = ref(true)
const dismissWelcome = () => {
  firstVisit.value = false
}
</script>

<style scoped>
.section {
  margin-top: 2rem;
}
</style>
