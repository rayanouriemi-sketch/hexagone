<script setup lang="ts">
import { ref } from 'vue'

const compteur = ref(0)

function incrementCompteur() {
    compteur.value = compteur.value +10
}
</script>

<template>
    <div>
        <button @click="incrementCompteur">Incrementer le compteur</button>
        <p class="compteur">Compteur: {{ compteur }}</p>
    </div>
</template>

<style scoped>
.compteur {
    color: red;
    font-size: 20px;
    font-weight: bold;
}
</style>