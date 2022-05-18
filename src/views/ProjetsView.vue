<template>
  <h1>Projets pointables</h1>
  <un-projet
    v-for="projet in projets"
    :key="projet.id"
    :projet="projet"
  ></un-projet>
  <nav v-if="projets">
    <router-link
      id="prev"
      rel="prev"
      :to="{ name: 'projets', query: { page: pageActive - 1 } }"
      ><span v-if="pageActive != 1">Précédents</span></router-link
    >
    <router-link
      id="next"
      v-if="pageActive < nombreTotalPages"
      rel="next"
      :to="{ name: 'projets', query: { page: pageActive + 1 } }"
      >Suivants</router-link
    >
  </nav>
</template>

<script>
import UnProjet from "@/components/ProjetListeDetails";
import ProjetsService from "@/services/ProjetsService";
import NProgress from "nprogress";

export default {
  name: "ProjetsView",
  components: {
    UnProjet,
  },
  data() {
    return {
      projets: null,
      nombreTotalProjets: 0,
    };
  },
  computed: {
    pageActive() {
      return parseInt(this.$route.query.page) || 1;
    },
    nombreTotalPages() {
      return Math.ceil(this.nombreTotalProjets / 3);
    },
  },
  beforeRouteEnter(to, from, next) {
    NProgress.start();

    next((composant) => {
      composant.$store.dispatch("setEnAttente", true);
      ProjetsService.getProjets(3, parseInt(to.query.page) || 1)
        .then((response) => {
          // Résolution positive de l'intercepteur de route (la navigation peut se faire)
          composant.projets = response.data;
          composant.nombreTotalProjets = response.headers["x-total-count"];
          next();
        })
        .catch(() => next({ name: "erreur-reseau" }))
        .finally(() => {
          NProgress.done();
          composant.$store.dispatch("setEnAttente", false);
        });
    });
  },
  beforeRouteUpdate(to) {
    this.projets = null;
    NProgress.start();
    this.$store.dispatch("setEnAttente", true);
    ProjetsService.getProjets(3, to.query.page)
      .then((response) => {
        // Résolution positive de l'intercepteur de route (la navigation peut se faire)
        this.projets = response.data;
        this.nombreTotalProjets = response.headers["x-total-count"];
      })
      .catch(() => this.$router.push({ name: "erreur-reseau" }))
      .finally(() => {
        NProgress.done();
        this.$store.dispatch("setEnAttente", false);
      });
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 0;
  width: 390px;
  justify-items: first baseline;
}
nav a {
  display: block;
  margin: 0;
}
#next {
  text-align: right;
}

#prev {
  text-align: left;
}
</style>
