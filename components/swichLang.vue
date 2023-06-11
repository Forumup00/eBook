<template>
  <select class="form-select" v-model="lang" @change="changeDir">
    <option selected disabled>اللغة</option>

    <option value="ar-EG">
      <span>{{ $t("ar") }}</span>
    </option>

    <option value="en-US">
      <span>{{ $t("en") }}</span>
    </option>
  </select>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();

const lang = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

const changeDir = () => {
  setTimeout(() => {
    if (lang.value === "ar-EG") {
      useHead({
        htmlAttrs: {
          dir: "rtl",
          lang: "ar",
        },
      });
    } else {
      useHead({
        htmlAttrs: {
          dir: "ltr",
          lang: "en",
        },
      });
    }
    localStorage.setItem("lang", lang.value);
  }, 100);
};
</script>

<style scoped>
.w-30 {
  width: 48%;
}
</style>
