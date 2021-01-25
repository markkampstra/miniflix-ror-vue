import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home";
import Videos from "@/components/Videos";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
