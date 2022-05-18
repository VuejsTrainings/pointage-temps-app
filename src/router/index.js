// DOcumentation officielle de Vue Router
// https://router.vuejs.org/

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjetsView from "../views/ProjetsView.vue";
import DetailsProjetView from "../views/DetailsProjetView.vue";
import NonTrouveView from "../views/NonTrouveView.vue";
import ErreurReseau from "../views/ErreurReseau.vue";

const utilisateurConnecte = true;

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projets",
    name: "projets",
    component: ProjetsView,
    meta: { connecte: true },
  },
  {
    path: "/a-propos-de-nous",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/about",
    redirect: { name: "about" },
  },
  {
    path: "/projets/:id",
    name: "details-projet",
    component: DetailsProjetView,
    meta: { connecte: true },
  },
  // Routes d'erreurs
  {
    path: "/404/:ressouce",
    name: "ressource-non-trouvee",
    component: NonTrouveView,
  },
  {
    path: "/erreur-reseau",
    name: "erreur-reseau",
    component: ErreurReseau,
  },
  {
    path: "/:routeInconnue(.*)",
    name: "page-non-trouvee",
    component: NonTrouveView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Ajouter les intercepteurs de navigation globaux ici, si besion.
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.connecte == true) {
    if (utilisateurConnecte) {
      next();
    } else {
      next("page-non-trouvee");
    }
  } else {
    next();
  }
});

export default router;
