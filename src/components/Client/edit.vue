<template>
  <v-card>
    <v-card-title>
      <span class="headline">Update Client</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <form-generator :schema="schema" :model="client"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red darken-1" flat @click.native="cancel">Cancel</v-btn>
      <v-btn color="blue darken-1" flat @click.native="updateClient">Update</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import formGenerator from "../shared/formGenerator";
import {clientSchema} from "../../constants/client";

export default {
  components: {
    "formGenerator": formGenerator
  },
  props: [
    "clientId"
  ],
  data() {
    //NOTE: Used to copy object, else it will mutate the state of the store
    return {
      valid: true,
      schema: clientSchema
    }
  },
  computed: {
    client() {
      return Object.assign({}, this.$store.getters.findClient(this.clientId));
    }
  },
  methods: {
    updateClient() {
      return "";
    },
    cancel() {
      this.$router.push({name: "Client"});
      this.resetForm();
    },
    resetForm() {
      console.log(this.client.businessName);
      this.client = Object.assign({}, this.$store.getters.findClient(this.clientId));
      console.log(this.$refs);
      //HACK: I'm pushing the reset to the end of the process
      setTimeout(() => {
        console.log(this.$refs);
        this.$refs.form.reset();
      }, 0);
    }
  }
}
</script>

<style lang="scss">

</style>
