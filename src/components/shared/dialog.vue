<template>
  <v-dialog v-model="open" max-width="50vw">
    <router-view name="dialog"/>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    open: {
      get() {
        return this.$store.state.app.dialog.open;
      },
      set(value) {
        this.$store.dispatch("setDialog", value);
      }
    }
  }
}
</script>

<style lang="scss">

</style>
