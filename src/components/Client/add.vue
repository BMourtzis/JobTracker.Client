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
import {requiredRule, emailRule} from "../../constants/rules";
import formGenerator from "../shared/formGenerator";
import {SINGLE_LINE_TEXT, SPACER, SUBHEADING, LIST} from "../../constants/formGenerator";

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
      schema: [
        {type: SINGLE_LINE_TEXT, name: "businessName", label: "Business Name", rules: [requiredRule], largeQuarter: true, required: true, },
        {type: SINGLE_LINE_TEXT, name: "invoicePrefix", label: "Invoice Prefix", rules:[requiredRule], smallQuarter: true, required: true, counter: 4, mask: "AAAA"},
        {type: SINGLE_LINE_TEXT, name: "address", label: "Addresss", rules: [requiredRule], full: true, required: true},
        {type: SPACER},
        {type: SUBHEADING, label: "Contact Details"},
        {type: SINGLE_LINE_TEXT, name: "firstname", label: "First Name", rules: [requiredRule], half: true, required: true},
        {type: SINGLE_LINE_TEXT, name: "lastname", label: "Last Name", rules: [requiredRule], half: true, required: true},
        {type: SINGLE_LINE_TEXT, name: "email", fieldType:"email", label: "Email", rules: [requiredRule, emailRule], half: true, required: true},
        {type: SINGLE_LINE_TEXT, name: "primaryPhone", label: "Primary Phone", rules: [requiredRule], half: true, required: true, mask: "phone"},
        {type: SPACER},
        {type: SUBHEADING, label: "Additional Contacts"},
        {type: LIST, name:"contacts", addBtnName:"New Phone", fields: [
          {type: SINGLE_LINE_TEXT, name: "name", label: "Contact Name", rules: [requiredRule], small: true, required: true},
          {type: SINGLE_LINE_TEXT, name: "phone", label: "Phone", rules: [requiredRule], large: true, required: true, mask: "phone"},
        ]
        }
      ]
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
