<template>
  <v-dialog v-model="loading.enabled" max-width="30vw">
    <v-card>
      <v-card-title>
        <span class="headline">{{loading.message}}.</span>
      </v-card-title>
      <v-card-text>
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

  computed: {
    loading() {
      return this.$store.state.app.loading;
    }
  }
}
</script>

<style>

</style>
