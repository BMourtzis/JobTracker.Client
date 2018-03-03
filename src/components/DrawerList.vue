<template>
<v-list>
  <v-subheader>Menu</v-subheader>
  <v-list-tile v-for="item in list" :key="item.title" @click="router.push(item.path)">
    <v-list-tile-avatar>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-itme-title>{{item.title}}</v-list-itme-title>
    </v-list-tile-content>
  </v-list-tile>
</v-list>
</template>

<script>
export default {
  name: "DrawerList",
  data() {
    return {
      list: [
        { title: "Home", icon: "home", path: "Home"},
        { title: "Jobs", icon: "work", path: "Job"},
        { title: "Services", icon: "work", path: "Services"},
        { title: "Clients", icon: "account_circle", path: "Client"},
        { title: "Invoices", icon: "account_circle", path: "Client"},
        { title: "Finances", icon: "payment", path: "Client"},
        { title: "Calendar", icon: "perm_contact_calendar", path: "Client"},
        { title: "Settings", icon: "settings", path: "Client"}
      ]
    }
  }
}
</script>

<style>

</style>
