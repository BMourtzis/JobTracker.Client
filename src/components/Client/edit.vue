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
    //Used to copy object, else it will mutate the state of the store
    let client = Object.assign({}, this.$store.getters.findClient(this.clientId));
    return {
      valid: true,
      client,
      schema: clientSchema
    }
  },
  methods: {
    updateClient() {
      return "";
    },
    cancel() {
      this.$store.dispatch("closeDialog", "Client");
      setTimeout(() => {
        this.resetForm();
      }, 300);
    },
    resetForm() {
      this.client = Object.assign({}, this.$store.getters.findClient(this.clientId));
      //HACK: I'm pushing the reset to the end of the process
      setTimeout(() => {
        this.$refs.form.reset();
      }, 0);
    }
  }
}
</script>

<style>

</style>
