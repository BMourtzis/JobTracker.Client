<template>
<div>
  <v-dialog v-model="loading.enabled" max-width="30vw">
    <v-card>
      <v-card-title>
        <span class="headline">{{loading.message}}</span>
      </v-card-title>
      <v-card-text>
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-dialog v-model="error.enabled" max-width="30vw">
    <v-card>
      <v-card-title>
        <span class="headline">Error</span>
      </v-card-title>
      <v-card-text>
        {{error.message}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" @click.native="Ok">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.app.loading;
    },
    error() {
      return this.$store.state.app.error;
    }
  },
  methods: {
    ok() {
      this.$store.dispatch("disableError");
    }
  }
}
</script>

<style>

</style>
