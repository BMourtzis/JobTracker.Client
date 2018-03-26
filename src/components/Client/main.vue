<template>
  <div>
    <v-btn color="primary" dark slot="activator" class="mb-2">New Item</v-btn>
    <v-data-table :headers="headers" :items="items" :loading="loading" hide-actions>
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
          <td>{{ props.item.buisnessName }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" >
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0">
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
export default {
  name: "client-main",
  data() {
    return {
      headers: [{
        text: "Buisness Name",
        value: "businessName"
      }],
      items: [],
      loading: true
    }
  }
}
</script>

<style>

</style>
