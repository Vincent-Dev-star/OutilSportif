<template>
<v-content>
    <h1 align="center" justify="center" >Rapport journalier</h1>

    <v-container fluid class="grey lighten-5">
            <h2>Sport réalisé avec durée et intensité</h2>
            <v-row >
            <v-col cols="10" md="10">
                <v-textarea
                solo
                name="input-7-4"
                label="Solo textarea"
                ></v-textarea>
            </v-col>
            </v-row>
    </v-container>

        <v-spacer><p></p></v-spacer> <!-- pas tres bo -->

    
    <v-container fluid class="grey lighten-5"> 
        <h2>REPAS</h2>
        <v-row align="center">
        
        
        <v-col class="d-flex" cols="12" sm="6">
            <v-select
            :items="itemsRepas"
            label="Outlined style"
            outlined
            ></v-select>
    
        </v-col>

        <v-checkbox v-model="disabled" class="mx-2" label="Collation"></v-checkbox>


        </v-row>
    </v-container>

    <v-spacer><p></p></v-spacer> <!-- pas tres bo -->

    <v-container fluid class="grey lighten-5">
      <h2>POID</h2>
      <v-row>
      <v-col cols="8">
        <v-text-field
          suffix="kg"
        ></v-text-field>
      </v-col>
    </v-row>
    </v-container>

    <v-spacer><p></p></v-spacer> <!-- pas tres bo -->

    <v-container fluid class="grey lighten-5"> 
        <h2>HUMEUR</h2>
        <v-row align="center">
        
        
        <v-col class="d-flex" cols="12" sm="6">
            <v-select
            v-model="value"
            :items="itemsHumeur"
            label="Outlined style"
            outlined
            ></v-select>

        </v-col>

        </v-row>
    </v-container>

    <v-spacer ><p> 
        </p></v-spacer> <!-- pas tres bo -->

    
   <div class="my-2">
        <v-btn large color="primary" @click="SendRapport()">Envoyer</v-btn>
        <v-alert v-if="send" type="success">{{ send }}</v-alert>
      </div>
    

</v-content>
    
    
</template>

<script>
  export default {
      data: () => ({
        itemsRepas: ['Léger', 'Normalement', 'Beaucoup'],
        itemsHumeur :['Maussade', 'Normal', 'Bien', 'Très Bien'],
        send:null,
        ItemsChoice : ['leger']
      }
  ),
  computed: {
      rapports() {
        return this.$store.state.rapports.rapports
    }
  },
  methods:{

      async SendRapport() {

      const rapportsIn=this.$store.state.rapports.rapports;
      rapportsIn.push(this.itemsRepas);
      this.$store.dispatch("updateRapports",rapportsIn)

        const form = { rapport : this.rapport };



        try {
          //Ajoute la commande en base de données
          await this.axios.post(
            `${process.env.VUE_APP_API_SERVER}/clients`,form
          );
          this.send = "Votre rapport a été envoyé";
          this.$store.dispatch("updateRapports",[])

        } catch {
          alert(
            ""
          );
        }
      }
  }
}
</script>