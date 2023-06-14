<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="w-100">
          <img
            :src="`../Login-${store.isDark ? 'dark' : 'light'}-${
              locale === 'ar-EG' ? 'ar' : 'en'
            }.png`"
            alt="login"
            class="w-100"
          />
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12">
        <AuthLoginForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const store = useStore();

const { locale, setLocale } = useI18n();

onMounted(() => {
  if (localStorage.getItem("lang")) {
    locale.value = localStorage.getItem("lang");
  }
});
</script>

<style lang="scss" scoped></style>
