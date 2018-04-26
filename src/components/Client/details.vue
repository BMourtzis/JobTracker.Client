<template>
<!-- <v-dialog v-model="open" max-width="50vw"> -->
  <v-card v-if="client">
    <v-card-title>
      <span class="headline">{{client.businessName}} ({{client.invoicePrefix}})</span>
      <v-btn color="blue darken-1" flat @click.native=""><v-icon>edit</v-icon>Edit</v-btn>
    </v-card-title>
    <v-card-text>
      <detailsGenerator :schema="schema" :model="client"/>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red darken-1" flat @click.native="close">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import detailsGenerator from "../shared/detailsGenerator";
import {clientDetailsSchema} from "../../constants/client";

export default {
  components:{
    "detailsGenerator": detailsGenerator
  },
  props: [
    "clientId",
  ],
  data() {
    return {
      schema: clientDetailsSchema
    }
  },
  computed: {
    client() {
      let client = this.$store.getters.findClient(this.clientId);
      Object.defineProperty(client, "fullname", {get: function() {return `${this.firstName} ${this.lastName}`}});
      // client.fullname = `${client.firstName} ${client.lastName}`;
      return client;

    }
  },
  methods: {
    close() {
      this.$store.dispatch("closeDialog");
    }
  }
}
</script>

<style lang="scss">

</style>
