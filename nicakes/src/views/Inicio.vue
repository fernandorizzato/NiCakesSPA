<template>
  <v-container class="pink lighten-4">
    <v-row class="fill-height ma-0" align="center" justify="center">
      <v-img max-height="200" max-width="200" src="../assets/logo.png"></v-img>
    </v-row>
    <h2>Oi, eu sou a Ni! Sou designer e boleira, 
      faça já sua cotação sem compromisso!</h2>
    <v-carousel class="inicio-imagem">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/bolo1.jpg"),
        },
        {
          src: require("../assets/bolo3.jpg"),
        },
        {
          src: require("../assets/bolo4.jpg"),
        },
        {
          src: require("../assets/bolo5.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
 .inicio-imagem {
  border-radius: 10px;
}
</style>
