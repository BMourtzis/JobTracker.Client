<template>
<!-- <v-dialog v-model="open" max-width="50vw"> -->
  <v-card v-if="client">
    <v-card-title>
      <span class="headline">{{client.businessName}} ({{client.invoicePrefix}})</span>
      <v-btn color="blue darken-1" flat @click.native="">
        <v-icon>edit</v-icon>Edit</v-btn>
    </v-card-title>
    <v-card-text>
      <v-list two-line>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Address</v-list-tile-title>
            <v-list-tile-sub-title>{{client.address}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title>Parent</v-list-tile-title>
            <v-list-tile-sub-title>{{client.parent ? client.parent : "N/A"}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-subheader>Contact Details</v-subheader>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Name</v-list-tile-title>
            <v-list-tile-sub-title>{{client.firstName}} {{client.lastName}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Email</v-list-tile-title>
            <v-list-tile-sub-title>{{client.email}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title>Primary Phone</v-list-tile-title>
            <v-list-tile-sub-title>{{client.phone ? client.phone : "N/A"}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
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
      </template>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red darken-1" flat @click.native="close">Close</v-btn>
    </v-card-actions>
  </v-card>
<!-- </v-dialog> -->
</template>

<script>
export default {
  props: [
    "clientId",
  ],
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
