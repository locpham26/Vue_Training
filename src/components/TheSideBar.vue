<template>
  <v-navigation-drawer
    app
    permanent
    :mini-variant="$vuetify.breakpoint.mdAndDown"
    class="amber accent-4 elevation-0 d-flex flex-column"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="item in items" :key="item.text" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "TheSideBar",
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "DashBoard", icon: "mdi-view-dashboard-variant", to: "/" },
        { text: "Users", icon: "mdi-account-multiple", to: "/users" },
        { text: "Posts", icon: "mdi-newspaper-variant-outline", to: "/posts" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
