<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer app><DrawerList/></v-navigation-drawer>
      <v-navigation-drawer app right>
        <router-view name="sidebar"></router-view>
      </v-navigation-drawer>
      <!-- <v-toolbar app></v-toolbar> -->
      <v-content>
        <v-container fluid>
          <router-view name="main"/>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import DrawerList from './components/DrawerList';

export default {
  name: 'App',
  components: { DrawerList }
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
