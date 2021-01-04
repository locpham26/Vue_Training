<template>
  <v-sheet color="gray" elevation="1" outlined rounded>
    <v-list>
      <v-subheader>Additional Information</v-subheader>
      <v-list-item v-for="item in items" :key="item.text">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.value }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "UserContact",
  props: ["joinedDate", "phoneNumber", "userAddress"],
  computed: {
    items() {
      return [
        {
          text: "Phone Number",
          value: this.phoneNumber,
          icon: "mdi-phone-forward",
        },
        {
          text: "Address",
          value: this.userAddress,
          icon: "mdi-home-analytics",
        },
        {
          text: "Joined Date",
          value: this.joinedDate,
          icon: "mdi-apple-finder",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
