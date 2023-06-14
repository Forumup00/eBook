<template>
  <form
    @submit.prevent=""
    class="w-100 h-100 d-flex align-items-center justify-content-center flex-column"
  >
    <div class="w-100 mb-4">
      <img src="" alt="">
    </div>

    <div class="mb-4 w-100">
      <label for="email" class="form-label">{{ $t("Email") }}</label>

      <div class="d-flex align-items-center position-relative">
        <label class="position-absolute mx-2" for="email">
          <img src="@/assets/imgs/user.png" alt="user" class="logo-user" />
        </label>

        <input
          type="email"
          id="email"
          class="form-control w-100"
          :placeholder="
            locale === 'ar-EG' ? 'أدخل البريد الإلكتروني' : 'Enter your E-mail'
          "
        />
      </div>
    </div>

    <div class="mb-4 w-100">
      <label for="password" class="form-label">{{ $t("Password") }}</label>

      <div class="d-flex align-items-center position-relative">
        <label class="position-absolute mx-2" for="password">
          <img src="@/assets/imgs/padlock.png" alt="user" class="logo-user" />
        </label>

        <input
          type="password"
          id="password"
          class="form-control w-100"
          :placeholder="
            locale === 'ar-EG' ? 'أدخل كلمة السر' : 'Enter your Password'
          "
        />
      </div>
    </div>

    <div class="w-100 mb-4">
      <button
        id="login-btn"
        class="btn border-0 main-bg-color w-100 py-2 text-white"
      >
        {{ $t("Login") }}
      </button>
    </div>

    <p class="w-100 text-center">
      <NuxtLink :to="localPath('/')" class="text-decoration-none">
        {{ $t("Forget password?") }}
      </NuxtLink>
    </p>
  </form>
</template>

<script setup>
import { useStore } from "~/store/store";
const localPath = useLocalePath();
const { locale } = useI18n();

const store = useStore();
</script>

<style lang="scss" scoped>
.logo-user {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
input[type="email"],
input[type="password"] {
  padding-inline: 40px;
}
#login-btn {
  &:hover,
  &:active {
    background-color: #9848ff;
  }
  &:active {
    transform: scale(0.99);
  }
}
</style>
