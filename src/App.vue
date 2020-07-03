<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <v-toolbar-title>OutilSportif</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn :to="{name:'Home'}" class="mr-1" exact>Accueil</v-btn>
      <v-btn :to="{name:'About'}" class="mr-1">About</v-btn>

    </v-app-bar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    achats() {
      return this.$store.state.achats.achats;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
</style>