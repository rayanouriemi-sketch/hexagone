<script setup lang="ts">
import { ref } from 'vue'

const redige = ref(0)

function pour_rediger() {
    redige.value = 0
}

function pour_developper() {
    redige.value = 0
}
</script>


<template>
    <div class="all_page">
        <div class="sur_le_cote">

            <div class="test">
                <div class="icone_sur_le_cote_en_haut">
                    <img src="@/assets/trait.png" class="Img_3trait" alt="''" />
                    <img src="@/assets/recherche.png" class="Img_recherche" alt="''" />
                </div>

                <div class="text_sur_le_cote_en_haut">
                    <p>Nouvelle discussion</p>
                    <p>Mes contenues</p>
                    <p>Gems</p>
                    <p>Discussions</p>
                </div>
            </div>


            <div clas="sur_le_cote_en_bas">
                <div class="text_sur_le_cote_en_bas">

                    <div class="Icone_text_1">
                        <img src="@/assets/66.png" class="icone_temp" alt="''" />
                        <p>Activité</p>
                    </div>

                    <div class="Icone_text_2">
                        <img src="@/assets/parametre.png" class="icone_heure" alt="''" />
                        <p>Paramètre et aide</p>
                    </div>
                </div>
                <div class="text_sur_le_cote_en_bas_2">
                    <ul>
                        <li class="Arg">Argenteuil, France</li>
                    </ul>
                    <p class="AdresseIp">D'après votre adresse IP</p>
                    <p class="a_jour">Metrre à jour la position</p>
                </div>
            </div>
        </div>
        <div class="le_millieu">

            <div class="en_haut_millieu">
                <p class="pour_nom_gemini"> Gemini</p>
                <img src="@/assets/google.png" class="Img_gmail" alt="''" />
            </div>

            <div class="en_bas_millieu">
                <div>
                    <div class="Titre_et_img">


                        <img src="@/assets/img_gemini.jpg" class="Img_icone_gemini" alt="''" />
                        <div class="Titre">
                            <h2>Bonjour Rayan</h2>
                            <h1>Par où commencer ?</h1>
                        </div>
                    </div>


                    <div class="block_recherche">
                        <h4 class="Pour_demander_a_gemini">Demandez à Gemini</h4>
                    </div>
                    <div class="buttons-container">
                        <button @click="pour_rediger">Rédiger</button>
                        <button @click="pour_developper">Dévolopper une idée</button>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>


<style scoped>
</style>