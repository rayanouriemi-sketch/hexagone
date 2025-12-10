<script setup lang="ts">
import { useRouter } from 'vue-router'
import Compteur from '../components/Compteur.vue'
import { ref } from 'vue'

const router = useRouter()

const vitesse = ref(0)

function SpeedUp() {
    vitesse.value += 10
}

function SpeedDown() {
    if (vitesse.value != 0) {
        vitesse.value -= 10
    }
    else {
        vitesse.value == 0
        console.log(`La vitesse ets déjà de 0 km, impossible de ralentir ! `)
    }

}

function Reset() {
    vitesse.value = 0
}

function Decollage() {
    if (vitesse.value == 10) {
        console.log(`Décolage`)
    }
}

function goToPageHome() {
    router.push({ name: 'home' })
}

function goToPageGalaxy() {
    router.push({ name: 'galaxy' })
}
</script>



<template>
    <div class="home-page">


        <img src="@/assets/cockpit.webp" class="bg-fullscreen" alt="Fond Espace" />

        <div class="contenue_cockpit">



            <h2 class="mydiv2">Bienvenue dans le Cockpit</h2>
            <div class="Barre_dattache">
                <p class="mydiv1">Vous voulez accéder à la page :</p>

                <div class="buttons-container">
                    <button @click="goToPageHome">Home</button>
                    <button @click="goToPageGalaxy">Galaxy</button>
                </div>
            </div>



            <div class="fonction_bouton">
                <p class="mydiv2">La vitesse est de {{ vitesse }}km.</p>
                <div class="fonction_bouton_2">
                    <button @click="SpeedUp">+</button>
                    <button @click="SpeedDown">-</button>
                    <button @click="Reset">RESET</button>
                </div>
            </div>
        </div>
    </div>
</template>





<style scoped>
/* --- 1. LE FOND --- */
.home-page {
    position: relative;
    width: 100vw;
    height: 100vh;/* Prend toute la hauteur de l'écran */
    overflow: hidden;/* Pas de scroll */
}

.bg-fullscreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit:cover;
    /* L'image remplit tout sans déformer */
    z-index: 0;
    /* Derrière */
    filter: brightness(0.6);
    /* Astuce : Assombrit l'image pour mieux lire le texte */
    opacity: 0.85;
}

.Barre_dattache {
    text-align: center;
    margin-bottom: 40px;
}

.mydiv1 {
    font-weight: bold;
}

.mydiv2 {
    font-weight: bold;
    text-align: center;
}



.fonction_bouton {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    padding: 9px 24px;
    font-size: 1rem;
    background-color: #967e6e;
    margin-bottom: 30px;

    color: white;
    border: none;
    border-radius: 5px;

}

.fonction_bouton_2 button {
    margin: 0 10px;
    /* Espace entre les boutons */
    padding: 9px 15px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #94aab9;
    /* Orange NASA */
    color: white;
    border: none;
    border-radius: 5px;
}

.fonction_bouton_2 button:hover {
    background-color: #6d3a81;
}


.contenue_cockpit {

    position: relative;
    /* Important pour que z-index fonctionne */
    z-index: 1;
    /* Met ce bloc DEVANT l'image (qui est à 0) */
    color: white;
    /* Met le texte en blanc pour le voir sur le fond noir */

    /* Optionnel : Pour bien centrer tout au milieu de l'écran */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* Espace entre les éléments */
}

.buttons-container button {
    /*le bouton tout court */
    margin: 0 10px;
    /* Espace entre les boutons */
    padding: 12px 24px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #967e6e;
    /* Orange NASA */
    color: white;
    border: none;
    border-radius: 5px;
}

.buttons-container button:hover {
    /*celui la c'est quand le bouton est survoler par la souris */
    background-color: #6d3a81;
}
</style>