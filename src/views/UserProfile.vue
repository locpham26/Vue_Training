<template>
  <v-container class="px-8">
    <user-item
      class="my-4"
      :userName="user.username"
      :email="user.email"
      :userId="user.id"
      :isEditing="isEditing"
      @openEditForm="isEditing = true"
    ></user-item>
    <user-contact
      :joinedDate="user.createdAt.slice(0, 10)"
      :phoneNumber="user.phone"
      :userAddress="user.address"
      v-if="!isEditing"
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
      user: {
        id: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        avatar: "",
        createdAt: "",
      },
      isEditing: false,
    };
  },
  methods: {
    async fetchUser(userId) {
      const { data } = await UserRepo.getUser(userId);
      this.user = { ...data };
    },
    submit() {
      this.isEditing = false;
      this.fetchUser(this.$route.params.id);
    },
  },
  mounted() {
    this.fetchUser(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>
