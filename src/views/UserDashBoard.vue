<template>
  <v-container class="px-8">
    <v-row>
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
    <user-list v-if="!addingUser"></user-list>
    <user-add-form v-else @closeForm="closeForm"></user-add-form>
  </v-container>
</template>

<script>
import UserAddForm from "../components/userDashBoard/UserAddForm.vue";
import UserList from "../components/userDashBoard/UserList.vue";
export default {
  name: "UserDashBoard",
  components: {
    UserList,
    UserAddForm,
  },
  data() {
    return {
      addingUser: false,
    };
  },
  methods: {
    closeForm() {
      this.addingUser = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  text-transform: capitalize;
}
</style>
