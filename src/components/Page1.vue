<template>
  <div>
    Page One
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Page1",
});
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: purple;
  background-color: bisque;
}
</style>
