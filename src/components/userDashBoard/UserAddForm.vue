<template>
  <v-form>
    <v-row class="mb-2">
      <v-col cols="6">
        <v-text-field v-model="username" label="Name">
          <v-icon slot="prepend">mdi-face-shimmer</v-icon>
        </v-text-field>
        <v-text-field v-model="email" label="Email">
          <v-icon slot="prepend">mdi-email</v-icon>
        </v-text-field>
        <v-file-input
          v-model="avatar"
          accept="image/*"
          label="Avatar"
        ></v-file-input>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="phone" label="Phone Number">
          <v-icon slot="prepend">mdi-phone-forward</v-icon>
        </v-text-field>
        <v-text-field v-model="address" label="Address">
          <v-icon slot="prepend">mdi-home-analytics</v-icon>
        </v-text-field>
      </v-col>
    </v-row>
    <v-btn outlined color="orange lighten-2" @click="submitForm">Submit </v-btn>
    <v-btn
      outlined
      class="ml-2"
      color="orange lighten-2"
      @click="$emit('closeForm')"
      >Cancel
    </v-btn>
  </v-form>
</template>

<script>
import { RepoFactory } from "../../api/Factory";
const UserRepo = RepoFactory.get("users");
export default {
  name: "UserAddForm",
  data() {
    return {
      username: "",
      email: "",
      phone: "",
      address: "",
      avatar: null,
    };
  },
  methods: {
    async submitForm() {
      await UserRepo.create({
        username: this.username,
        avatar: this.avatar,
        email: this.email,
        phone: this.phone,
        address: this.address,
      });
      this.$emit("closeForm");
    },
  },
};
</script>

<style lang="scss" scoped></style>
