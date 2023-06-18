<template>
  <div class="col-12" id="home">
    <div
      class="w-100 d-flex justify-content-center align-items-center flex-column heading"
    >
      <h1 class="text-center mb-3">
        {{ $t("Let's learn about new knowledge and abilities.") }}
      </h1>

      <p class="text-muted text-center w-50">
        {{
          $t(
            "Let's discover new knowledge and new friends and have a learning experience with beautiful teacher."
          )
        }}
      </p>

      <button
        class="btn d-flex justify-content-center align-items-center gap-3 border border-black"
      >
        <i class="fa-solid fa-play fs-3"></i>

        <span :class="store.isDark ? 'text-white' : 'text-dark'">
          {{ $t("Watch Videos") }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const store = useStore();
</script>

<style lang="scss" scoped>
.heading {
  height: 550px;
  h1 {
    font-size: 70px;
  }
  button {
    i {
      color: #9848ff;
    }
    &:active {
      transform: scale(0.99);
    }
  }
}

@media only screen and (max-width: 531px) {
  .heading {
    h1 {
      font-size: 40px;
    }
    p {
      width: 100% !important;
      font-size: 15px;
    }
  }
}

@media only screen and ((max-width: 768px) and (min-width: 531px)) {
  .heading {
    h1 {
      font-size: 60px;
    }
    p {
      width: 75% !important;
      font-size: 15px;
    }
  }
}
</style>
