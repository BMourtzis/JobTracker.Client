<template>
<div id="app">
  <v-app>
    <nav-menu/>
    <v-navigation-drawer app right>
      <router-view name="sidebar" />
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view name="main" />
      </v-container>
    </v-content>
    <v-footer app>Footer</v-footer>
  </v-app>
</div>
</template>

<script>
import NavMenu from './components/NavMenu';
import { navigationList } from './constants/navigation';

export default {
  name: 'App',
  components: {
    NavMenu
  },
  computed: {
    title() {
      return navigationList[this.$store.state.app.page].title;
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
