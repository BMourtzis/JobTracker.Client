<template>
  <v-card>
    <v-card-title>
      <v-btn color="blue darken-1" flat @click.native="back"><v-icon>chevron_left</v-icon>Back</v-btn>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <form-generator :schema="schema" :model="client"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
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
      schema: clientSchema,
      client: this.$store.getters.findClient(this.clientId)
    }
  },
  methods: {
    updateClient() {
      if (this.$refs.form.validate()) {
        // In order to assign the true values instead of all the extra things needed
        // to track changes
        let newClient = {};
        Object.assign(newClient, this.client);

        this.$store.dispatch("updateClient", newClient).then(() => {
          this.$router.push({name: "Client"});
        });
      }
    },
    back() {
      this.$router.back();
      this.resetForm();
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

<style lang="scss">

</style>
