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
        <v-form v-model="valid" ref="form" >
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md9>
                <v-text-field v-model="client.businessName" label="Business Name" :rules="[rules.required]" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <v-text-field v-model="client.invoicePrefix" counter="4" mask="AAAA" label="Invoice Prefix" :rules="[rules.required]" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field v-model="client.address" label="Address" :rules="[rules.required]" required></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs12 sm12 md12><span class="subheading">Contant Details</span></v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="client.firstname" label="First Name" :rules="[rules.required]" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="client.lastname" label="Last Name" :rules="[rules.required]" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="client.email" label="Email" type="email" :rules="[rules.required, rules.email]" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="client.primaryPhone" label="Primary Phone" :mask="'phone'"></v-text-field>
              </v-flex>
              <!-- Additional Phones -->
              <template v-for="(contact, index) in client.contacts">
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="contact.name" label="Contact Name" :rules="[rules.required]" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md5>
                    <v-text-field v-model="contact.phone" label="Phone" :mask="'phone'" :rules="[rules.required]" required></v-text-field>
                  </v-flex>
                  <v-flex><v-btn color="red darken-1" flat @click.native="removeContact(index)"><v-icon>clear</v-icon></v-btn></v-flex>
                </template>
              <v-flex xs12 sm12 md2>
                <v-btn class="left" color="blue darken-1" flat @click.native="addContact">
                  <v-icon>add</v-icon>New Phone</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
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
import loader from "../shared/loader";
import { requiredRule, emailRule } from "../../constants/rules";

export default {
  name: "client-add",
  data() {
    return {
      valid: true,
      rules: {
        required: requiredRule,
        email: emailRule
      },
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
      }
    }
  },
  methods: {
    addContact() {
      this.client.contacts.push({
        name: "",
        phone: ""
      });
    },
    removeContact(index) {
      this.client.contacts.splice(index, 1);
    },
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
        });
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
      this.$refs.form.reset();
    }
  }
}
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
