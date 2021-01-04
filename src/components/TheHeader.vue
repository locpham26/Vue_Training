<template>
  <v-app-bar app dense class="px-4">
    <v-text-field
      placeholder="Search for users or posts"
      color="deep-orange accent-2"
      dense
      single-line
      hide-details="auto"
    ></v-text-field>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-bell-ring-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-avatar color="deep-orange accent-2" size="30">
        LP
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
.px-4 {
  position: sticky;
  top: 0;
}
</style>
