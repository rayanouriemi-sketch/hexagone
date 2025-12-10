<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const imgUrl = ref('')
const textUrl = ref('')

function goToPageHome() {
    router.push({ name: 'home' })
}
function goToPageCockpit() {
    router.push({ name: 'cockpit' })
}

function Mercure() {
    imgUrl.value = "/Planete/mercure.jpg"; // Définit le chemin vers sa source
    textUrl.value = (`MERCURE: C'est la plus petite planète du système et la plus proche du Soleil, ce qui lui vaut des écarts de température 
    extrêmes entre le jour et la nuit. Sa surface est criblée de cratères, ressemblant beaucoup à celle de notre Lune, et elle ne 
    possède pratiquement pas d'atmosphère.`);
}
function Venus() {
    imgUrl.value = "/Planete/Venus.jpg"; // Définit le chemin vers sa source
    textUrl.value = (`VENNUS: Souvent appelée la "jumelle de la Terre" en raison de sa taille similaire, 
    c'est pourtant une fournaise infernale à cause d'un effet de serre galopant. 
    Elle tourne sur elle-même dans le sens inverse des autres planètes et brille intensément dans notre ciel.`);
}
function Terre() {
    imgUrl.value = "/Planete/Terre.jpg"; // Définit le chemin vers sa source
    textUrl.value = (`TERRE: Notre maison est la seule planète connue à ce jour abritant la vie, grâce à 
    sa position idéale dans la "zone habitable" et à la présence d'eau liquide. 
    Elle possède une atmosphère riche en oxygène et un champ magnétique qui la protège des radiations solaires.`);
}
function Mars() {
    imgUrl.value = "/Planete/Mars.jpg"; // Définit le chemin vers sa source
    textUrl.value = (`MARS: Surnommée la "planète rouge" à cause de l'oxyde de fer (rouille) qui recouvre sa surface,
     c'est un désert froid et poussiéreux. Elle abrite le plus haut volcan du système solaire, le mont Olympe, 
     et porte les cicatrices d'un passé où l'eau coulait à sa surface.`);
}
function Jupiter() {
    imgUrl.value = "/Planete/Jupiter.jpg"; // Définit le chemin vers sa source 
    textUrl.value = (`JUPITER: C'est la reine des planètes, une géante gazeuse si massive qu'elle pourrait contenir toutes les autres 
    planètes réunies. Elle est célèbre pour sa "Grande Tache rouge", une tempête anticyclonique gigantesque qui fait rage depuis des siècles.`);
}
function Saturne() {
    imgUrl.value = "/Planete/Saturne.jpg"; // Définit le chemin vers sa source
    textUrl.value = (`SATURNE: Immédiatement reconnaissable grâce à son système d'anneaux spectaculaires composés de glace et de roche, 
    c'est une géante gazeuse très peu dense. Si l'on disposait d'une piscine assez grande pour la contenir, Saturne flotterait sur l'eau.`);
}
function Uranus() {
    imgUrl.value = "/Planete/Uranus.jpg"; // Définit le chemin vers sa source
    textUrl.value = (`URANUS: Cette géante de glace possède une atmosphère bleu-vert due au méthane et a la particularité 
    unique de tourner complètement "couchée" sur son orbite. C'est un monde très froid et venteux, entouré d'anneaux fins et sombres.`);
}
function Neptune() {
    imgUrl.value = "/Planete/Neptune.png"; // Définit le chemin vers sa source 
    textUrl.value = (`NEPTUNE: Planète la plus éloignée du Soleil, c'est une géante de glace d'un bleu profond balayée par 
    les vents les plus violents du système solaire (plus de 2000 km/h). Elle reste mystérieuse et froide, 
    orbitant dans les confins obscurs de notre système.`);
}


</script>


<template>
    <div class="home-page">

        <img src="@/assets/Etoile.jpg" class="bg-fullscreen" alt="Fond Espace" />

        <div class="Premier_plans">

            <h2 class="Titre_Page">Bienvenue dans la Galaxie</h2>

            <div class="Barre_dattache">
                <p class="mydiv1">Vous voulez accéder à la page :</p>

                <div class="buttons-container">
                    <button @click="goToPageCockpit">Cockpit</button>
                    <button @click="goToPageHome">Home</button>
                </div>
            </div>
            <h3 class="Titre_pour-Planete">Voici les planètes du système solaire :</h3>
            <div class="Boutton_Planete">
                <button @click="Mercure">Mercure</button>
                <button @click="Venus">Vénus</button>
                <button @click="Terre">Terre</button>
                <button @click="Mars">Mars</button>
                <button @click="Jupiter">Jupiter</button>
                <button @click="Saturne">Saturne</button>
                <button @click="Uranus">Uranus</button>
                <button @click="Neptune">Neptune</button>
            </div>

            <img class="taille" v-if="imgUrl !== ''" :src="imgUrl" alt="Test">
            <p v-if="textUrl !== ''" class="texte-bio">{{ textUrl }}</p>

        </div>
    </div>
</template>


<style scoped>
/* --- 1. LE FOND --- */
.home-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    /* Prend toute la hauteur de l'écran */
    overflow: hidden;
    /* Pas de scroll */
}

.bg-fullscreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* L'image remplit tout sans déformer */
    z-index: 0;
    /* Derrière */
    filter: brightness(0.6);
    /* Astuce : Assombrit l'image pour mieux lire le texte */
}

/* --- 2. LE CONTENU (Au premier plan) --- */
.Premier_plans {
    position: relative;
    z-index: 1;
    /* Devant */
    height: 100%;


    /* CORRECTION 3 : Flexbox pour tout centrer au milieu de l'écran */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Centre verticalement */
    align-items: center;
    /* Centre horizontalement */
    padding: 20px;
}

/* --- 3. TYPOGRAPHIE --- */
.Titre_Page {
    color: #ffffff;
    /* CORRECTION 2 : Blanc (au lieu de noir) pour voir sur l'espace */
    font-size: 3rem;
    margin-bottom: 30px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
    /* Ombre pour lisibilité */
}

.Barre_dattache {
    text-align: center;
    margin-bottom: 40px;
}

.mydiv1 {
    font-weight: bold;
    color: #ddd;
    /* Gris clair */
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.buttons-container button {
    /*le bouton tout court */
    margin: 0 10px;
    /* Espace entre les boutons */
    padding: 12px 24px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #534a44;
    color: white;
    border: none;
    border-radius: 5px;
}

.buttons-container button:hover {
    /*celui la c'est quand le bouton est survoler par la souris */
    background-color: #e67e22;
}

.taille {
    width: 500px;
}

.Boutton_Planete {
    /*le bouton tout court */
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    padding: 12px 24px;
    font-size: 1rem;
    background-color: #534a44;
    margin-bottom: 30px;

    color: white;
    border: none;
    border-radius: 5px;
}

.Boutton_Planete button {
    outline: none; /* Ça, c'est ce qui enlève le cadre bleu ! */
    border: none;  /* Ça, c'est pour enlever la bordure grise par défaut */
    
    /* Je te rajoute ça pour qu'ils soient jolis : */
    background-color: #6d4765; /* Orange (ou une autre couleur si tu veux) */
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    cursor:cell;
}


.Boutton_Planete button:hover {
    color:#ffffff;
    background-color: #522a52;
}

.Titre_pour-Planete {
    font-weight: bold;
    color: white;
    align-content: center;
}

.texte-bio {
    color: white;
    font-size: 1.2rem;
    max-width: 600px; /* Pour éviter que le texte ne soit trop large */
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5); /* Un petit fond sombre pour la lisibilité */
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
}
</style>
