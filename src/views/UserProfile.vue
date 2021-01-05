<template>
  <v-container class="px-8">
    <v-skeleton-loader type="article, card" v-if="loading"></v-skeleton-loader>
    <user-item
      class="my-4"
      :userName="user.username"
      :email="user.email"
      :userId="user.id"
      :isEditing="isEditing"
      @openEditForm="isEditing = true"
      v-if="!loading"
    ></user-item>
    <user-contact
      :joinedDate="user.createdAt"
      :phoneNumber="user.phone"
      :userAddress="user.address"
      v-if="!isEditing && !loading"
    ></user-contact>
    <user-edit-form
      :userInfo="{ ...user }"
      v-if="isEditing"
      @closeEditForm="isEditing = false"
      @submitEditForm="submit"
    ></user-edit-form>
  </v-container>
</template>

<script>
import UserEditForm from "../components/user/UserEditForm";
import UserItem from "../components/user/UserItem";
import { RepoFactory } from "../api/Factory";
import UserContact from "../components/user/UserContact.vue";
const UserRepo = RepoFactory.get("users");

export default {
  name: "UserProfile",
  components: {
    UserItem,
    UserContact,
    UserEditForm,
  },
  data() {
    return {
      user: {},
      isEditing: false,
      loading: false,
    };
  },
  methods: {
    async fetchUser(userId) {
      this.loading = true;
      const { data } = await UserRepo.getUser(userId);
      this.user = { ...data };
      this.loading = false;
    },
    submit() {
      this.isEditing = false;
      this.fetchUser(this.$route.params.id);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchUser(vm.$route.params.id);
      next();
    });
  },
};
</script>

<style lang="scss" scoped></style>
