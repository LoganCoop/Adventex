import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import TheDate from './components/TheDate.vue'
// import ForestQuest from './components/ForestQuest.vue'
// import SpaceOutpost from './components/SpaceOutpost.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/the-date', name: 'TheDate', component: TheDate },
  // { path: '/forest-quest', name: 'ForestQuest', component: ForestQuest },
  // { path: '/space-outpost', name: 'SpaceOutpost', component: SpaceOutpost },
]

const router = createRouter({
  history: createWebHistory('/Adventex/'), // Set base for GitHub Pages
  routes,
})

export default router
