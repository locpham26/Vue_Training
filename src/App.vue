<template>
  <v-app>
    <the-header></the-header>
    <the-side-bar></the-side-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheSideBar from "./components/TheSideBar.vue";

export default {
  name: "App",
  components: {
    TheSideBar,
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 100%;
}
html,
body {
  height: 100%;
}
</style>
