<template>
  <div>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      type="table"
    ></v-skeleton-loader>
    <v-simple-table
      class="elevation-5 my-4"
      v-if="!loading"
      transition="slide-x-transition"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left d-none d-sm-table-cell">Email</th>
            <th class="text-left d-none d-md-table-cell">Joined</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item.username">
            <td class="username">
              <router-link
                :to="{ name: 'userProfile', params: { id: item.id } }"
              >
                <!-- <v-avatar :src="require(`${item.avatar}`)"></v-avatar> -->
                {{ item.username }}
              </router-link>
            </td>
            <td class="d-none d-sm-table-cell">{{ item.email }}</td>
            <td class="d-none d-md-table-cell">
              {{ item.createdAt.slice(0, 10) }}
            </td>
            <td>
              <v-icon small class="mr-2">mdi-pencil</v-icon>
              <v-icon small>mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { RepoFactory } from "../../api/Factory";
const UserRepo = RepoFactory.get("users");

export default {
  name: "UserList",
  data() {
    return {
      users: [],
      loading: false,
    };
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      const { data } = await UserRepo.get();
      this.users = data;
      this.loading = false;
    },
    getUser(userId) {
      this.$router.push(`user/${userId}`);
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
.username {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: black !important;
}
</style>
