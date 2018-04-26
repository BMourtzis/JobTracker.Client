<template>
<div id="app">
  <v-app>
    <nav-menu/>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <!-- <v-footer app>Footer</v-footer> -->
  </v-app>
  <loader></loader>
  <genericDialog></genericDialog>
</div>
</template>

<script>
import NavMenu from './components/NavMenu';
import loader from './components/shared/loader';
import dialog from "./components/shared/dialog";
import { navigationList } from './constants/navigation';


export default {
  // TODO: vuetify load icons to use offline
  name: 'App',
  components: {
    NavMenu,
    "loader": loader,
    "genericDialog": dialog
  },
  computed: {
    title() {
      return navigationList[this.$store.state.app.main].title;
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
