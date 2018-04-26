<template>
<!-- <v-dialog v-model="open" max-width="50vw"> -->
  <v-card v-if="client">
    <v-card-title>
      <span class="headline">{{client.businessName}} ({{client.invoicePrefix}})</span>
      <v-btn color="blue darken-1" flat @click.native=""><v-icon>edit</v-icon>Edit</v-btn>
    </v-card-title>
    <v-card-text>
      <detailsGenerator :schema="schema" :model="client"/>
      <!--
        <template v-if="client.contacts">
        <v-divider></v-divider>
        <v-subheader>Additional Contacts</v-subheader>
        </template>

        <template v-for="(item, index) of client.contacts">
        <v-divider v-if="index !== 0"></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Name</v-list-tile-title>
            <v-list-tile-sub-title>{{item.name}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title>Phone</v-list-tile-title>
            <v-list-tile-sub-title>{{item.phone}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template> -->
    </v-card-text>
    <v-card-actions>
      <v-btn color="red darken-1" flat @click.native="close">Close</v-btn>
    </v-card-actions>
  </v-card>
<!-- </v-dialog> -->
</template>

<script>
import detailsGenerator from "../shared/detailsGenerator";

export default {
  components:{
    "detailsGenerator": detailsGenerator
  },
  props: [
    "clientId",
  ],
  data() {
    return {
      schema: [
        {type: "field", items:[{name: "address", label: "Address"}, {name: "parent", label: "Parent"}]},
        {type: "divider"},
        {type: "subheader", label: "Contacts"},
        {type: "field", items:[{name: "fullname", label: "Name"}]},
        {type: "field", items:[{name: "email", label: "Email"}, {name: "phone", label: "Phone"}]},
        {type: "list", label:"Additional Contacts", items:[{name: "name", label: "Name"}, {name: "phone", label: "Phone"}]}
      ]
    }
  },
  computed: {
    client() {
      return this.$store.getters.findClient(this.clientId);
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
