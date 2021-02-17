import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import List from "../views/List.vue";
import Edit from "../views/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit
  }
  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
