import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const isDark = ref(false);
  const setDark = (value) => {
    isDark.value = value;
  };
  return {
    isDark,
    setDark,
  };
});
