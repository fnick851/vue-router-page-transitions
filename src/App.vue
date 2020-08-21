<template>
  <div>
    <router-link to="/">Home page</router-link> |
    <router-link to="/page2">Second page</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="page-change">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";

export default defineComponent({
  name: "App",
  components: {
    Page1,
    Page2,
  },
});
</script>

<style scoped>
div {
  text-align: center;
  padding: 10px 0;
}

.page-change-enter-active {
  animation: bounce-in 1s;
}
.page-change-leave-active {
  animation: bounce-in 1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  75% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
