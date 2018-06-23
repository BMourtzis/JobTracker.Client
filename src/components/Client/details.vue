<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12>
      <v-btn color="primary" class="mb-2 left" @click.native="back"><v-icon>chevron_left</v-icon>Back</v-btn>
    </v-flex>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title>
          <span class="headline">Client Details</span>
          <v-btn color="blue darken-1" flat @click.native="edit"><v-icon>edit</v-icon>Edit</v-btn>
        </v-card-title>
        <v-card-text>
          <detailsGenerator :schema="schema" :model="client"/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
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
      schema: clientDetailsSchema
    };
  },
  computed: {
    client() {
      return this.$store.getters.findClient(this.clientId);
    }
  },
  methods: {
    close() {
      this.$router.push({ name: "Client" });
    },
    edit() {
      this.$router.push({
        name: "clientUpdate",
        params: { clientId: this.clientId }
      });
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">
.backButton {
  clear: both;
  width: 100%;
}

.title {
}

.content {
}
</style>
