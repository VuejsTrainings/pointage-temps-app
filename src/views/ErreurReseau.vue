<template>
  <h1>Erreur réseau</h1>
  <p>Il semblerait que le serveur ne réponde plus à nos appels :-&lt;</p>
  <p>
    Vous pouvez réessayer en cliquant
    <a href="#" @click="$router.go(-1)">ici</a>
  </p>
</template>
