<template>
  <v-dialog v-model="loading" max-width="30vw">
    <v-card>
      <v-card-title>
        <span class="headline">Loading...</span>
      </v-card-title>
      <v-card-text>
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['loading']
}
</script>

<style>

</style>
