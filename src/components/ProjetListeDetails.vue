<template>
  <router-link
    class="projet-link"
    :to="{ name: 'details-projet', params: { id: projet.id } }"
  >
    <div class="card">
      <h3>{{ projet.nom }}</h3>
      <p>{{ projet.client }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProjetListeDetails",
  props: {
    projet: Object,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.card {
  width: 390px;
  border: 1px solid black;
  margin: 0 auto 1em;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 10px 5px 5px #666;
}

.projet-link {
  text-decoration: none;
  color: black;
}
</style>
