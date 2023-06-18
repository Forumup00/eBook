<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useStore } from "./store/store";
const store = useStore();

store.activeLink();

onMounted(() => {
  window.addEventListener("scroll", () => {
    store.activeLink();
  });
});
</script>

<style lang="scss" scoped></style>
