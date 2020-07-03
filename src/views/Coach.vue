<template>


  <v-container>
    
    
  <Loading v-if="loading" />
  <div v-for="client in clients" :key="client.id">
              <p></p>
    <div v-for="rapport in client.rapports" :key="rapport.id">
      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <v-container fluid class="grey lighten-5">
            <div>Numéro: {{ rapport.id }}</div>
            <p class="display-1 text--primary">
              {{rapport.prenom}} {{ rapport.nom }}
            </p>
          </v-container>
          <p></p>
          <v-container fluid class="grey lighten-5">
          <h2>Sport durée Intensité</h2>
                <div class="text--primary">
                  {{ rapport.sport }}
                </div>
          </v-container>
                    <p></p>
          <v-container fluid class="grey lighten-5">
            <h2>Repas</h2>  
                <div class="text--primary">
                  {{ rapport.repas }}
                  <p v-if="rapport.Collation == true">une collation</p>
                </div>
          </v-container>
                              <p></p>
          <v-container fluid class="grey lighten-5">
          <h2>Poid</h2>
                <div class="text--primary">
                  {{ rapport.poid}} Kg
                </div>  
          </v-container>
                                        <p></p>
          <v-container fluid class="grey lighten-5">
          <h2>Humeur</h2>
                <div class="text--primary">
                  {{ rapport.humeur }}
                </div>
          </v-container>
        </v-card-text>
      </v-card>
    </div>
  </div>

  </v-container>


</template>


<script>
import Loading from '../components/Loading.vue'
export default {
  components: {
        Loading
    },
  data() {
    return {
        clients: [],
        loading:false
    };
  },
   async created() {
        this.loading=true;
        const clientsFromDB = await this.axios.get(
            `${process.env.VUE_APP_API_SERVER}/clients`
        );

        this.clients = clientsFromDB.data;
        this.loading=false;
    }
};
</script>

<style lang="scss" scoped>
</style>