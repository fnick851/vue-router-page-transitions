<template>
  <Page1 />
  <!-- <Page2 /> -->
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
