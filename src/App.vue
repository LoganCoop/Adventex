<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <strong>Adventex</strong>
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/the-date">The Date</router-link>
        <!-- Forest Quest and Space Outpost links hidden for now -->
        <!-- <router-link class="navbar-item" to="/forest-quest">Forest Quest</router-link> -->
        <!-- <router-link class="navbar-item" to="/space-outpost">Space Outpost</router-link> -->
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
</script>

<style scoped>
.navbar {
  margin-bottom: 2rem;
}
</style>
