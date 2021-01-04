<template>
  <v-container>
    <v-row class="mx-2 mt-2">
      <v-col sm="9" class="d-none d-sm-block"
        ><p>
          <strong>Dashboard</strong>
          <span class="d-none d-md-inline">
            - Manage other users and their posts</span
          >
        </p>
      </v-col>
      <v-col sm="3" justify="center"><p>Last updated</p></v-col>
    </v-row>

    <v-card
      v-for="field in fields"
      :key="field.name"
      max-width="300"
      class="d-inline-block ma-3"
    >
      <v-img
        :src="require(`../assets/${field.name}.jpg`)"
        height="150px"
      ></v-img>
      <v-card-title>{{ field.name }}s</v-card-title>
      <v-card-subtitle>{{ field.info }}</v-card-subtitle>
      <router-link :to="`${field.name}s`">
        <v-btn color="orange lighten-2" text>
          Explore
        </v-btn>
      </router-link>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MainDashBoard",
  data() {
    return {
      fields: [
        { name: "user", info: "+5 more users" },
        { name: "post", info: "+10 more posts" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card__title {
  text-transform: capitalize;
}
.v-card {
  cursor: pointer;
}
a {
  text-decoration: none;
}
</style>
