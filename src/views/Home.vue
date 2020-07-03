<template>
  <div class="home">
    <h1>Présentation du Produit</h1>

    <p>Ce produit sert à ...</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe velit eius neque magni, vitae fuga eaque magnam, odit voluptate laborum, excepturi molestiae voluptatibus ad corporis repellat. Eos, ipsa impedit.</p>

    <v-container>
      <p></p>
      <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Membre</v-list-item-title>
          <v-list-item-subtitle>Espace membre</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        >
        <v-img src="https://picsum.photos/510/300?random">
          </v-img>
          </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
             <v-btn :to="{name:'Member'}" class="mr-1" exact>Access</v-btn>
      </v-card-actions>
    </v-card>

    <p></p>
    
      <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Coach</v-list-item-title>
          <v-list-item-subtitle>Espace Coach</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        >
        <v-img src="https://picsum.photos/510/300?random">
          </v-img>
          </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn :to="{name:'Login'}" class="mr-1" exact>Access</v-btn>
      </v-card-actions>
    </v-card>
    </v-container>

  </div>
</template>

<script>

export default {
  name: "Home",

  components: {  },

  data: () => ({

  }),

  computed: {

  },
  methods: {
  }
};
</script>
