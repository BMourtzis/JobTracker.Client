<template>
<div>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12>
      <v-btn color="primary" class="mb-2 left" @click.native="back">
        <v-icon left>fa-angle-left</v-icon>{{$t("message.general.backButton")}}
      </v-btn>
    </v-flex>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title>
          <span class="headline">{{$t("message.client.detailsHeading")}}</span>
          <v-btn id="edit-button" color="success" flat @click.native="edit"><v-icon left>fa-pen</v-icon>{{$t("message.general.editButton")}}</v-btn>
          <v-btn color="error" flat @click.native="confirmDelete"><v-icon left>fa-trash</v-icon>{{$t("message.general.deleteButton")}}</v-btn>
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
        <span class="headline">{{$t("message.general.deleteMessage", {businessName: client.businessName})}}</span>
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
      let c = this.$store.getters.findClient(this.clientId);
      
      if(c) {
        c.primaryPhone = this.phoneFormat(c.primaryPhone);

        for(let cont of c.contacts) {
          cont.phone = this.phoneFormat(cont.phone)
        }
      }

      return c;
    }
  },
  methods: {
    edit() {
      this.$router.push({
        name: "clientUpdate",
        params: { clientId: this.clientId }
      });
    },
    phoneFormat(value) {
      if(!value) {
        return "";
      }

      let phone = "(";
      for(let i = 0; i < 10; i++) {
        phone += value[i];
        if(i === 2) {
          phone += ") ";
        }
        else if(i === 5) {
          phone += " - ";
        }
      }

      return phone;
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
