import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const isDark = ref(false);
  const setDark = (value) => {
    isDark.value = value;
  };

  let homeLink = ref(false);
  let serviceLink = ref(false);
  let featuresLink = ref(false);
  let formLink = ref(false);

  function activeLink() {
    if (pageYOffset <= 1150) {
      homeLink.value = true;
      serviceLink.value = false;
      featuresLink.value = false;
      formLink.value = false;
    } else if (pageYOffset > 1150 && pageYOffset <= 1600) {
      homeLink.value = false;
      serviceLink.value = true;
      featuresLink.value = false;
      formLink.value = false;
    } else if (pageYOffset > 1600 && pageYOffset <= 2700) {
      homeLink.value = false;
      serviceLink.value = false;
      featuresLink.value = true;
      formLink.value = false;
    } else if (pageYOffset > 2700) {
      homeLink.value = false;
      serviceLink.value = false;
      featuresLink.value = false;
      formLink.value = true;
    }
  }

  return {
    isDark,
    setDark,
    homeLink,
    serviceLink,
    featuresLink,
    formLink,
    activeLink,
  };
});
