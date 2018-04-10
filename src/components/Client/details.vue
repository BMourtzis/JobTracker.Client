<template>
  <v-dialog v-model="show" max-width="50vw">
    <v-card>
      <v-card-title>
        <span class="headline">New Client</span>
      </v-card-title>
      <v-card-text>

      </v-card-text>
      <v-card-actions>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: [
    "clientId",
    "show"
  ],
  data() {
    return {
      dialog: false
    }
  },
  watch: {
    clientId: function() {
      if(clientId === "") {
        this.dialog = true;
      }
    }
  },
  computed: {
    client() {
      return "";
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
