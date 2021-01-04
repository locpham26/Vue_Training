<template>
  <v-row>
    <v-col cols="1">
      <v-avatar color="deep-orange accent-2" size="50">
        {{ alternativeAvatar }}
      </v-avatar>
    </v-col>
    <v-col cols="5" class="d-flex flex-column px-0"
      ><strong>{{ userName }}</strong>
      <em>{{ email }}</em>
    </v-col>
    <v-spacer></v-spacer>
    <v-col class="d-flex justify-end">
      <v-btn
        v-if="!isEditing"
        class="mr-2"
        outlined
        color="orange lighten-2"
        @click="$emit('openEditForm')"
        >Edit User</v-btn
      >
      <v-dialog v-model="dialog" width="500" v-if="!isEditing">
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined color="orange lighten-2" v-bind="attrs" v-on="on">
            Remove User
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="grey lighten-2">
            Are you sure you want to remove {{ userName }}?
          </v-card-title>

          <v-card-text>
            Click confirm to remove {{ userName }} from your system
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="removeUser">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { RepoFactory } from "../../api/Factory";
const UserRepo = RepoFactory.get("users");
export default {
  name: "UserItem",
  props: ["userId", "userName", "email", "isEditing"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    async removeUser() {
      await UserRepo.remove(this.userId);
      this.dialog = false;
      this.$router.push("/users");
    },
  },
  computed: {
    alternativeAvatar() {
      if (this.userName !== "") {
        const firstName = this.userName.split(" ")[0];
        const lastName = this.userName.split(" ")[1];
        return firstName[0] + lastName[0];
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
