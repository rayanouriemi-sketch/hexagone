<script setup lang="ts">
console.log('Hello World')
</script>

<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;   /* Enlève la marge par défaut du navigateur */
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
}
</style>
