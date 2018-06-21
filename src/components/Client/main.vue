<template>
  <div>
    <v-btn color="primary" slot="activator" class="mb-2 left" @click.native="openDialogAdd">
      <v-icon>add</v-icon>New Client
    </v-btn>
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
          <v-btn icon class="mx-0" @click.native="edit(props.item.id)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click.native="delete(props.item.id)">
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
import edit from "./edit";
import { mainHeaders } from '../../constants/client';

export default {
  name: "client-main",
  components: {
    "client-add": add,
  },
  data() {
    return {
      headers: mainHeaders,
      loading: false,
      open: false,
      selectedClient: ""
    }
  },
  computed: {
    items() {
      return this.$store.state.clients.clientList;
    }
  },
  watch: {
    open(value) {
      if(value === false) {
        this.selectedClient = "";
      }
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
    openDialogAdd(){
        this.$router.push({ name: 'clientAdd'});
    },
    details(id) {
      this.$router.push({ name: 'clientDetails', params: { clientId: id }});
    },
    edit(id) {
      this.$router.push({ name: 'clientUpdate', params: { clientId: id }});
    },
    delete(id) {

    }
  }
}
</script>

<style lang="scss">

</style>
