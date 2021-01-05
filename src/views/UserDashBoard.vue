<template>
  <v-container class="px-8">
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="table"
    ></v-skeleton-loader>
    <v-row v-if="!loading">
      <v-col md="5" class="py-5 d-none d-sm-inline-block"
        ><strong>{{
          addingUser ? "Add a new user" : "Manage Users"
        }}</strong></v-col
      >
      <v-spacer></v-spacer>
      <v-col class="d-flex justify-end">
        <v-btn
          outlined
          color="orange lighten-2"
          @click="addingUser = true"
          v-if="!addingUser"
          >Add user
        </v-btn>
      </v-col>
    </v-row>
    <keep-alive
      ><user-list
        :users="users"
        @removeUser="onRemoveUser"
        v-if="!loading && !addingUser"
      ></user-list
    ></keep-alive>

    <user-add-form
      v-if="addingUser"
      @closeForm="onCloseForm"
      @addUser="onAddUser"
    ></user-add-form>
  </v-container>
</template>

<script>
import UserAddForm from "../components/userDashBoard/UserAddForm.vue";
import UserList from "../components/userDashBoard/UserList.vue";
import { RepoFactory } from "../api/Factory";
const UserRepo = RepoFactory.get("users");

export default {
  name: "UserDashBoard",
  components: {
    UserList,
    UserAddForm,
  },
  data() {
    return {
      addingUser: false,
      loading: false,
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      const { data } = await UserRepo.get();
      this.users = data;
      this.loading = false;
    },
    onCloseForm() {
      this.addingUser = false;
    },
    async onRemoveUser(userId) {
      const removed = this.users.findIndex((user) => user.id === userId);
      this.users.splice(removed, 1);
      await UserRepo.remove(userId);
    },
    async onAddUser(addedUser) {
      this.users.push(addedUser);
      await UserRepo.create(addedUser);
      this.onCloseForm();
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("entering");
    next((vm) => {
      vm.fetchUsers();
      next();
    });
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  text-transform: capitalize;
}
</style>
