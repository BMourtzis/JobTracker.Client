<template>
<v-navigation-drawer app>
  <v-toolbar flat dark color="secondary">
    <v-toolbar-title>Job Tracker</v-toolbar-title>
  </v-toolbar>
  <v-list>
    <v-list-tile v-for="(item, index) in list" :key="index" @click="itemClick(index, item.path)">
      <v-list-tile-avatar>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-html="item.title"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  <v-footer>
    Version: 2.0
  </v-footer>
</v-navigation-drawer>
</template>

<script>
import { navigationList } from '../constants/navigation';

export default {
  name: "nav-menu",
  data() {
    return {
      list: navigationList
    };
  },
  methods: {
    itemClick(index, path) {
      this.$store.dispatch("changePage", index);
      this.$router.push(path);
    }
  }
};
</script>

<style>

</style>
