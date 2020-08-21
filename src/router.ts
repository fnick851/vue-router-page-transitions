import { createRouter, createWebHistory } from "vue-router";
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: "/", name: "home", component: Page1 },
    { path: "/page2", name: "page2", component: Page2 },
  ],
});
