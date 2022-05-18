<template>
  <div id="toaster" v-if="$store.state.toasterMessage">
    {{ $store.state.toasterMessage }}
  </div>
  <div v-if="$store.state.enAttente">
    <spinner></spinner>
  </div>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'projets' }">Projets</router-link>
  </nav>
  <router-view />
</template>
<script>
import Spinner from "@/components/AppSpinner.vue";

export default {
  components: {
    Spinner,
  },
};
</script>
<style>
@keyframes fonduFond {
  0% {
    background: #a5e7c9;
    border-color: black;
    color: black;
  }
  5% {
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  10% {
    background: #a5e7c9;
    border-color: black;
    color: black;
  }
  100% {
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
}

#toaster {
  animation: fonduFond 3500ms;
  position: absolute;
  border: 1px solid black;
  padding: 1em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
