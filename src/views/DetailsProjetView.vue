<template>
  <div v-if="projet">
    <h1>{{ projet.nom }}</h1>
    <p>{{ projet.client }}</p>
    <p>{{ projet.echeance }}</p>
    <p>{{ projet.budget }}</p>
    <p v-if="projet.pointagePossible">
      <button @click.prevent="terminer">Marquer comme terminé</button>
    </p>
  </div>
</template>

<script>
import ProjetService from "@/services/ProjetsService";

export default {
  name: "DetailsProjet",
  data() {
    return {
      projet: null,
    };
  },
  created() {
    this.$store.dispatch("setEnAttente", true);
    let id = this.$route.params.id;
    ProjetService.getProjet(id)
      .then((response) => (this.projet = response.data))
      .catch(() => {
        this.$router.push({ name: "ressource-non-trouvee" });
      })
      .finally(() => {
        this.$store.dispatch("setEnAttente", false);
      });
  },
  methods: {
    terminer() {
      // appel à l'API
      this.$store.dispatch("setEnAttente", true);
      setTimeout(() => {
        // Spinner
        this.$store.dispatch("setEnAttente", false);
        // Projet terminé, donc non pointable
        this.projet.pointagePossible = false;
        // toaster
        this.$store.dispatch(
          "setToaster",
          "Le projet a été marqué comme terminé!"
        );
      }, 1200);
    },
  },
};
</script>

<style></style>
