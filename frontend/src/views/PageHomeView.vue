<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPageGalaxy() {
  router.push({ name: 'galaxy' })
}

function goToPageCockpit() {
  router.push({ name: 'cockpit' })
}
</script>

<template>
  <div class="home-page">

    <img src="@/assets/La_nasa.jpg" class="bg-fullscreen" alt="Fond Espace" />

    <div class="Premier_plans">
      
      <h2 class="Titre_Page">Bienvenue à la NASA 2.0</h2>
      
      <div class="Barre_dattache">
        <p class="mydiv1">Vous voulez accéder à la page :</p>

        <div class="buttons-container">
          <button @click="goToPageCockpit">Cockpit</button>
          <button @click="goToPageGalaxy">Galaxy</button>
        </div>
      </div>

      <div class="info-block">
        <h3 class="Titre_Texte">La NASA ?</h3>
        <p class="mydiv2">
          La National Aeronautics and Space Administration (en français : « Administration nationale
          de l'aéronautique et de l'espace »), plus connue sous son acronyme NASA, est l'agence fédérale
          responsable de la majeure partie du programme spatial civil des États-Unis.
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* --- 1. LE FOND --- */
.home-page {
  position: relative;
  width: 100vw;
  height: 100vh;      /* Prend toute la hauteur de l'écran */
  overflow: hidden;   /* Pas de scroll */
}

.bg-fullscreen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;  /* L'image remplit tout sans déformer */
  z-index: 0;         /* Derrière */
  filter: brightness(0.6); /* Astuce : Assombrit l'image pour mieux lire le texte */
}

/* --- 2. LE CONTENU (Au premier plan) --- */
.Premier_plans {
  position: relative;
  z-index: 1;         /* Devant */
  height: 100%;
  
  
  /* CORRECTION 3 : Flexbox pour tout centrer au milieu de l'écran */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre verticalement */
  align-items: center;     /* Centre horizontalement */
  padding: 20px;
}

/* --- 3. TYPOGRAPHIE --- */
.Titre_Page {
  color: #ffffff; /* CORRECTION 2 : Blanc (au lieu de noir) pour voir sur l'espace */
  font-size: 3rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.8); /* Ombre pour lisibilité */
}

.Barre_dattache {
  text-align: center;
  margin-bottom: 40px;
}

.mydiv1 {
  font-weight: bold;
  color: #ddd; /* Gris clair */
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.buttons-container button { /*le bouton tout court */
  margin: 0 10px; /* Espace entre les boutons */
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #d35400; /* Orange NASA */
  color: white;
  border: none;
  border-radius: 5px;
}

.buttons-container button:hover { /*celui la c'est quand le bouton est survoler par la souris */
  background-color: #e67e22;
}/*

/* --- 4. BLOC DE TEXTE INFO --- */
.info-block { /* le bloc en arriere ne noir ou le texte est dessus*/
  background-color: rgba(0, 0, 0, 0.6); /* Fond noir transparent pour lire le texte */
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  text-align: center;
}

.Titre_Texte { /* Titr eTexte */
  color: #f1c40f; /* Jaune doré (plus clair pour être lisible sur fond noir) */
  margin-bottom: 10px;
  font-weight: bold;
}

.mydiv2 {
  color: #ffffff; /* Blanc */
  line-height: 1.6;
  font-weight: bold;
}
</style>