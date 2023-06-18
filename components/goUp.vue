<template>
  <div class="go-up position-fixed" v-if="isShown">
    <button
      class="btn border-0 main-bg-color p-2 rounded-circle"
      @click="upNow"
    >
      <img src="../assets/imgs/up-arrow.png" alt="arrow" class="up-arrow" />
    </button>
  </div>
</template>

<script setup>
const isShown = ref(false);

const upNow = () => {
  scrollTo(0, 0);
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (pageYOffset > 100) {
      isShown.value = true;
    } else {
      isShown.value = false;
    }
  });
});
</script>

<style lang="scss" scoped>
.go-up {
  z-index: 5;
  bottom: 15px;
  right: 15px;
  .up-arrow {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
}
</style>
