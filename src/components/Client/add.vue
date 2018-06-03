<template>
    <v-card>
      <v-card-title>
        <span class="headline">New Client</span>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <form-generator :schema="schema" :model="client"/>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" flat @click.native="cancel">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click.native="createClient">Create</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import formGenerator from "../shared/formGenerator";
import {clientSchema} from "../../constants/client";

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
        this.$store.dispatch("closeDialog");

        // In order to assign the true values instead of all the extra things needed
        // to track changes
        let newClient = {};
        Object.assign(newClient, this.client);

        this.$store.dispatch("enableLoading", "Loading...");
        this.$store.dispatch("addClient", newClient).then(
          () => {
            setTimeout(() => {
              this.emptyForm();
            }, 300);
          },
          (err) => {
            this.dialog = true;
          }
        ).finally(() => {
          this.$store.dispatch("disableLoading");
        })
      }
    },

    /**
     * cancel - Closes the dialog, empty the form and removes the errors
     *
     * @return {Null}  null
     */
    cancel() {
      this.$store.dispatch("closeDialog", "Client");
      setTimeout(() => {
        this.emptyForm();
      }, 300);
    },

    //TODO: maybe remove it from the methods list as it is used by the component
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
    }
  }
};
</script>

<style lang="scss">

</style>
