<template>
  <nav
    class="navbar navbar-expand-lg sticky-top position-sticky"
    :class="[
      drop && 'drop-shadow',
      isDark ? 'navbar-dark bg-dark' : 'navbar-white bg-white',
    ]"
  >
    <div class="container">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <div
          class="logo d-flex align-items-center gap-2 c-pointer"
          @click="$router.push('/')"
        >
          <img src="@/assets/imgs/logo.jpg" alt="logo" class="rounded-circle" />

          <span class="fw-bold" :class="isDark && 'text-white'">
            {{ $t("title") }}
          </span>
        </div>

        <div>
          <ul class="list-unstyled d-flex align-items-center mb-0 gap-5">
            <li>
              <NuxtLink
                :to="localPath('/')"
                class="text-decoration-none text-muted"
              >
                {{ $t("Home") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                :to="localPath('/')"
                class="text-decoration-none text-muted"
              >
                {{ $t("Service") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                :to="localPath('/')"
                class="text-decoration-none text-muted"
              >
                {{ $t("Features") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                :to="localPath('/')"
                class="text-decoration-none text-muted"
              >
                {{ $t("Contact us") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="d-flex justify-content-between align-items-center gap-2">
          <div>
            <button
              class="btn px-4 py-2 rounded-pill log-btn text-white d-flex align-items-center gap-2"
            >
              <img src="@/assets/imgs/enter.png" alt="login" />

              <span>
                {{ $t("Login") }}
              </span>
            </button>
          </div>

          <div>
            <SwichLang class="w-100" />
          </div>

          <div class="mood">
            <label class="switch">
              <input type="checkbox" v-model="isDark" @change="playDark" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from "~/store/store";
import SwichLang from "../swichLang.vue";

const store = useStore();

const localPath = useLocalePath();

const isDark = ref(false);

const playDark = () => {
  if (isDark.value) {
    useHead({
      bodyAttrs: {
        mood: "dark",
      },
    });
    store.setDark(true);
    localStorage.setItem("mood", "dark");
  } else {
    useHead({
      bodyAttrs: {
        mood: "light",
      },
    });
    store.setDark(false);
    localStorage.setItem("mood", "light");
  }
};

const drop = ref(false);
onMounted(() => {
  window.onscroll = () => {
    if (pageYOffset > 0) {
      drop.value = true;
    } else {
      drop.value = false;
    }
  };

  if (localStorage.getItem("mood") === "dark") {
    isDark.value = true;
    playDark();
  }
});
</script>

<style lang="scss" scoped>
.logo {
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
}
.log-btn {
  background-color: #9848ff;
  &:hover {
    background-color: #9848ff;
  }
  &:active {
    background-color: #652fac;
  }
  img {
    width: 22px;
    height: 22px;
    object-fit: cover;
  }
}
.drop-shadow {
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

.mood {
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
}
</style>
