import { createWebHistory, createRouter } from "vue-router"
import Home from "@/components/Home"
import Videos from "@/components/Videos"
import ListVideos from "@/components/admin/videos/ListVideos"
import CreateVideo from "@/components/admin/videos/CreateVideo"
import EditVideo from "@/components/admin/videos/EditVideo"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
  {
    path: "/admin",
    name: "Admin",
    component: ListVideos,
  },
  {
    path: "/admin/videos",
    name: "AdminListVideos",
    component: ListVideos,
  },
  {
    path: "/admin/videos/new",
    name: "AdminCreateVideo",
    component: CreateVideo,
  },
  {
    path: "/admin/videos/edit/:id",
    name: "AdminEditVideo",
    component: EditVideo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
