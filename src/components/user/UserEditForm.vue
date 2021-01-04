<template>
  <v-form>
    <v-row class="mb-2">
      <v-col cols="6">
        <v-text-field v-model="username" label="Name"> </v-text-field>
        <v-text-field v-model="email" label="Email"> </v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="phone" label="Phone Number"> </v-text-field>
        <v-text-field v-model="address" label="Address"> </v-text-field>
      </v-col>
    </v-row>
    <v-btn outlined color="orange lighten-2" @click="submitForm">Submit </v-btn>
    <v-btn
      outlined
      class="ml-2"
      color="orange lighten-2"
      @click="$emit('closeEditForm')"
      >Cancel
    </v-btn>
  </v-form>
</template>

<script>
import { RepoFactory } from "../../api/Factory";
const UserRepo = RepoFactory.get("users");
export default {
  name: "UserEditForm",
  props: ["userInfo"],
  data() {
    return {
      username: this.userInfo.username,
      email: this.userInfo.email,
      phone: this.userInfo.phone,
      address: this.userInfo.address,
      avatar: this.userInfo.avatar,
    };
  },
  methods: {
    async submitForm() {
      await UserRepo.update(this.userInfo.id, {
        username: this.username,
        email: this.email,
        phone: this.phone,
        address: this.address,
        avatar: this.avatar,
      });
      this.$emit("submitEditForm");
    },
  },
};
</script>

<style lang="scss" scoped></style>
