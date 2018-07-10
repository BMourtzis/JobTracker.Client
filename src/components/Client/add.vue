<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12>
      <v-btn color="primary" class="mb-2 left" @click.native="back">
        <v-icon left>fa-angle-left</v-icon>{{$t("message.general.backButton")}}
      </v-btn>
    </v-flex>
  <v-card>
    <v-card-title>
      <span class="headline">{{$t("message.client.new")}}</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <form-generator :schema="schema" :model="client"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click.native="createClient">{{$t("message.general.createButton")}}</v-btn>
    </v-card-actions>
  </v-card>
</v-layout>
</template>

<script>
import formGenerator from "../shared/formGenerator";
import { clientSchema } from "../../constants/client";

export default {
  components: {
    "form-generator": formGenerator
  },
  name: "client-add",
  data() {
    return {
      valid: true,
      client: {
        businessName: "",
        invoicePrefix: "",
        address: "",
        firstName: "",
        lastName: "",
        email: "",
        primaryPhone: "",
        contacts: []
      },
      schema: clientSchema
    };
  },
  methods: {
    /**
     * createClient - Creates a new client, sends it to the server and saves the
     * response to the store
     *
     * @return {Null}  null
     */
    createClient() {
      if (this.$refs.form.validate()) {

        // In order to assign the true values instead of all the extra things needed
        // to track changes
        let newClient = {};
        Object.assign(newClient, this.client);

        this.$store.dispatch("enableLoading", "Loading...");
        this.$store
          .dispatch("addClient", newClient)
          .then(
            () => {
              this.emptyForm();
            },
            err => {
              this.dialog = true;
            }
          )
          .finally(() => {
            this.$store.dispatch("disableLoading");
            this.$router.back();
          });
      }
    },

    /**
     * cancel - Closes the dialog, empty the form and removes the errors
     *
     * @return {Null}  null
     */
    cancel() {
      this.$router.push({name: "Client"})
      this.emptyForm();
    },

    /**
     * emptyForm - Empty the form and removes the errors
     *
     * @return {Null}  null
     */
    emptyForm() {
      this.client.businessName = "";
      this.client.invoicePrefix = "";
      this.client.address = "";
      this.client.firstName = "";
      this.client.lastName = "";
      this.client.email = "";
      this.client.primaryPhone = "";
      this.client.contacts = [];

      //HACK: I'm pushing the reset to the end of the process
      setTimeout(() => {
        this.$refs.form.reset();
      }, 0);
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">

</style>
