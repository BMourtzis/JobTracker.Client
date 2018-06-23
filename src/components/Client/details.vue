<template>
<div>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12>
      <v-btn color="primary" class="mb-2 left" @click.native="back"><v-icon>chevron_left</v-icon>Back</v-btn>
    </v-flex>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title>
          <span class="headline">{{$t("message.client.detailsHeading")}}</span>
          <v-btn id="edit-button" color="success" flat @click.native="edit"><v-icon>edit</v-icon>Edit</v-btn>
          <v-btn color="error" flat @click.native="confirmDelete"><v-icon>delete</v-icon>Delete</v-btn>
        </v-card-title>
        <v-card-text>
          <detailsGenerator :schema="schema" :model="client"/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-dialog v-model="confimDeleteDialog" max-width="50vw">
    <v-card>
      <v-card-title>
        <span class="headline">Are you sure you want to delete {{client.businessName}}?</span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="error" class="mb-2 left" @click.native="deleteClient"><v-icon>delete</v-icon>Yes, Delete</v-btn>
        <v-btn class="mb-2 right" @click.native="closeConfirmDelete()">No</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import detailsGenerator from "../shared/detailsGenerator";
import { clientDetailsSchema } from "../../constants/client";

export default {
  components: {
    detailsGenerator: detailsGenerator
  },
  props: ["clientId"],
  data() {
    return {
      schema: clientDetailsSchema,
      confimDeleteDialog: false
    };
  },
  computed: {
    client() {
      return this.$store.getters.findClient(this.clientId);
    }
  },
  methods: {
    edit() {
      this.$router.push({
        name: "clientUpdate",
        params: { clientId: this.clientId }
      });
    },
    back() {
      this.$router.back();
    },
    confirmDelete() {
      this.confimDeleteDialog = true;
    },
    closeConfirmDelete() {
      this.confimDeleteDialog = false;
    },
    deleteClient() {
      this.confimDeleteDialog = false;
      this.$store.dispatch("deleteClient", this.clientId);
      this.$router.push({ name: "Client" });
    }
  }
};
</script>

<style lang="scss">

#edit-button {
  margin-left: 3vw;
}

</style>
