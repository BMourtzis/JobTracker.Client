<template>
<v-layout row wrap>
  <v-flex xs12 sm12 md12>
    <v-btn color="primary" class="mb-2 left" @click.native="back"><v-icon left>fa-angle-left</v-icon>{{$t("message.general.backButton")}}</v-btn>
  </v-flex>
  <v-flex xs12 sm12 md12>
    <v-card>
      <v-card-title>
        <span class="headline">{{$t("message.client.edit")}}</span>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <form-generator :schema="schema" :model="client"/>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="updateClient">{{$t("message.general.updateButton")}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import formGenerator from "../shared/formGenerator";
import { clientSchema } from "../../constants/client";

export default {
  components: {
    formGenerator: formGenerator
  },
  props: ["clientId"],
  data() {
    return {
      valid: true,
      schema: clientSchema,
      client: this.$store.getters.findClient(this.clientId)
    };
  },
  methods: {
    updateClient() {
      if (this.$refs.form.validate()) {
        // In order to assign the true values instead of all the extra things needed
        // to track changes
        let newClient = {};
        Object.assign(newClient, this.client);

        this.$store.dispatch("updateClient", newClient).then(() => {
          this.$router.back();
        });
      }
    },
    back() {
      this.$router.back();
      this.resetForm();
    },
    resetForm() {
      this.client = Object.assign(
        {},
        this.$store.getters.findClient(this.clientId)
      );
      //HACK: I'm pushing the reset to the end of the process
      setTimeout(() => {
        this.$refs.form.reset();
      }, 0);
    }
  }
};
</script>

<style lang="scss">

</style>
