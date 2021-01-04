import Vue from "vue";
import VueRouter from "vue-router";
import MainDashBoard from "../views/MainDashBoard.vue";
import UserDashBoard from "../views/UserDashBoard.vue";
import UserProfile from "../views/UserProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainDashboard",
    component: MainDashBoard,
  },
  {
    path: "/users",
    name: "userDashBoard",
    component: UserDashBoard,
  },
  {
    path: "/user/:id",
    name: "userProfile",
    component: UserProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
