<template>
  <div>
    <client-add/>
    <v-dialog v-model="detailsDialog" max-width="50vw">
      <client-details :clientId="clientId"/>
    </v-dialog>
    <v-data-table :headers="headers" :items="items" :loading="loading" hide-actions>
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.businessName }}</td>
        <td>{{ props.item.firstName }} {{ props.item.lastName }}</td>
        <td>{{ props.item.invoicePrefix }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click.native="details(props.item.id)">
            <v-icon color="orange">assignment</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click.native="">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click.native="">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
        </template>
        <template v-if="loading" slot="no-data">
          Loading Clients...
        </template>
        <template v-if="!loading" slot="no-data">
          No Clients
        </template>
    </v-data-table>
  </div>
</template>

<script>
import add from './add';
import details from './details';
import { mainHeaders } from '../../constants/client';

export default {
  name: "client-main",
  components: {
    "client-add":add,
    "client-details": details
  },
  data() {
    return {
      headers: mainHeaders,
      loading: true,
      detailsDialog: false,
      clientId: ""
    }
  },
  computed: {
    items() {
      return this.$store.state.clients.clientList;
    }
  },
  methods: {
    getClients() {
      this.$store.dispatch("loadClients").then(
        () => {
          this.loading = false;
        },
        (err) => {
          this.loading = false;
        });
    },
    details(id) {
      this.clientId = id;
      this.detailsDialog = true;
    },
    clickItem() {
      console.log("item");
    },
    clickButton1() {
      console.log("buton 1");
    },
    clickButton2() {
      console.log("button 2");
    }
  },
  created: function() {
    this.getClients();
  },
}
</script>

<style lang="scss">

</style>
