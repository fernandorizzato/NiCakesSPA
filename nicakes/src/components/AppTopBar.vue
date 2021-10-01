<template>
  <div class="app-top-bar" >
    <v-app-bar color="pink accent-1" dense dark>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="pink--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="pink--text"> <div>NiCakes</div></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="pink--text text--lighten-3"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon class="pink--text">
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/cardapio">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cake-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cardápio</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/contato">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cellphone-sound</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Contato</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>