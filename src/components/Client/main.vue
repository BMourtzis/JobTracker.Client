<template>
  <div>
    <v-btn color="primary" slot="activator" class="mb-2 left" @click.native="addClient">
      <v-icon left>fa-plus</v-icon>{{$t("message.client.addClientBtn")}}
    </v-btn>
    <v-data-table :headers="headers" :items="items" :loading="loading" hide-actions>
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.businessName }}</td>
        <td>{{ props.item.firstName }} {{ props.item.lastName }}</td>
        <td>{{ props.item.invoicePrefix }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click.native="details(props.item.id)">
            <v-icon color="orange">fa-file-alt</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click.native="edit(props.item.id)">
            <v-icon color="teal">fa-edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click.native="confirmDelete(props.item.id)">
            <v-icon color="pink">fa-trash</v-icon>
          </v-btn>
        </td>
        </template>
        <template v-if="loading" slot="no-data">
          {{$t("message.client.labelLoading")}}
        </template>
        <template v-if="!loading" slot="no-data">
          {{$t("message.client.labelNone")}}
        </template>
    </v-data-table>
    <v-dialog v-model="confimDeleteDialog" max-width="50vw">
      <v-card>
        <v-card-title>
          <span class="headline">{{$t("message.general.deleteMessage", {businessName: getDeleteName})}}</span>
        </v-card-title>
        <v-card-actions>
          <v-btn color="error" class="mb-2 left" @click.native="deleteClient"><v-icon left>fa-trash</v-icon>{{$t("message.general.yesDelete")}}</v-btn>
          <v-btn class="mb-2 right" @click.native="closeConfirmDelete()">{{$t("message.general.no")}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mainHeaders } from '../../constants/client';

export default {
  name: "client-main",
  data() {
    return {
      headers: mainHeaders,
      loading: false,
      confimDeleteDialog: false,
      deleteId: ""
    }
  },
  computed: {
    items() {
      return this.$store.state.clients.clientList;
    },
    getDeleteName() {
      if(this.deleteId === "") {
        return "";
      }

      let client = this.$store.state.clients.clientList.find((el) =>{
        return el.id === this.deleteId;
      });

      return client.businessName;
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
    addClient(){
        this.$router.push({ name: 'clientAdd'});
    },
    details(id) {
      this.$router.push({ name: 'clientDetails', params: { clientId: id }});
    },
    edit(id) {
      this.$router.push({ name: 'clientUpdate', params: { clientId: id }});
    },
    confirmDelete(id) {
      this.deleteId = id;
      this.confimDeleteDialog = true;
    },
    closeConfirmDelete() {
      this.deleteId = "";
      this.confimDeleteDialog = false;
    },
    deleteClient() {
      this.confimDeleteDialog = false;
      this.$store.dispatch("deleteClient", this.deleteId);
      this.deleteId = "";
    }
    // changeLang() {
    //   this.$i18n.locale = "gr"
    //   this.$store.dispatch("changeLanguage", "gr");
    // }
  }
}
</script>

<style lang="scss">

</style>
