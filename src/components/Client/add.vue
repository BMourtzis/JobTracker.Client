<template>
  <v-dialog v-model="dialog" max-width="50vw">
    <v-btn color="primary" slot="activator" class="mb-2 left">
      <v-icon>add</v-icon>
      New Client
    </v-btn>
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
  </v-dialog>
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
      dialog: false,
      client: {
        businessName: "",
        invoicePrefix: "",
        address: "",
        firstname: "",
        lastname: "",
        email: "",
        primaryPhone: "",
        contacts: []
      },
      schema: clientSchema
    };
  },
  methods: {
    createClient() {
      if(this.$refs.form.validate()) {
        this.dialog = false;
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
    cancel() {
      this.dialog = false;
      setTimeout(() => {
        this.emptyForm();
      }, 300);
    },
    emptyForm() {
      this.client.businessName = "";
      this.client.invoicePrefix = "";
      this.client.address = "";
      this.client.firstname = "";
      this.client.lastname = "";
      this.client.email = "";
      this.client.primaryPhone = "";
      this.client.contacts = [];
      //HACK: I'm pushing the reset to the end of the jobs
      setTimeout(() => {
        this.$refs.form.reset();
      }, 0);
    }
  }
};
</script>

<style lang="scss">
.subheading {
    float: left;
    font-size: 20px !important;
    font-weight: 400;
    line-height: 32px !important;
    letter-spacing: normal !important;
}
.left {
    float: left;
}
</style>
