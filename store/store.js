import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const isDark = ref(false);
  const setDark = (value) => {
    isDark.value = value;
  };

  const lang = ref("en-US");
  const setLang = (value) => {
    lang.value = value;
  };
  return {
    isDark,
    setDark,
    lang,
    setLang,
  };
});
