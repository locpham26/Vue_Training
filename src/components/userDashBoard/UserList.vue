<template>
  <div>
    <v-simple-table class="elevation-5 my-4" transition="slide-x-transition">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left d-none d-sm-table-cell">Email</th>
            <th class="text-left d-none d-md-table-cell">Joined</th>
            <th></th>
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
              <v-icon small @click="$emit('removeUser', item.id)"
                >mdi-delete</v-icon
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: ["users"],
  emits: ["removeUser"],
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
