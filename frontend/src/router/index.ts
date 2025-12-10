import { createRouter, createWebHistory } from 'vue-router'

// On met les VRAIS noms de tes fichiers ici :
import HomeView from '../views/PageHomeView.vue'
import CockpitView from '../views/PageCockpitView.vue'
import GalaxyView from '../views/PageGalaxyView.vue'
import GeminiView from '../views/GeminiView.vue'
import GeminiView2 from '../views/GeminiView2.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home', name: 'home', component: HomeView,
    },

    {
      path: '/cockpit', name: 'cockpit', component: CockpitView,
    },

    {
      path: '/galaxy', name: 'galaxy', component: GalaxyView,
    },
    {
      path: '/gemini', name: 'gemini', component: GeminiView,
    },
    {
      path: '/gemini2', name: 'gemini2', component: GeminiView2,
    }
  ],
})

export default router
