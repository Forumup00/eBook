<template>
  <form
    @submit.prevent=""
    class="w-100 h-100 d-flex align-items-center justify-content-center flex-column"
  >
    <div class="w-100 mb-4 d-flex align-items-center gap-2 lock-div">
      <img src="@/assets/imgs/lock.png" alt="lock" class="lock-img rounded-2" />
      <h2 class="mb-0">{{ $t("Login") }}</h2>
    </div>

    <div class="mb-4 w-100 position-relative">
      <label for="email" class="form-label">{{ $t("Email") }}</label>

      <div class="d-flex align-items-center position-relative">
        <label class="position-absolute mx-2" for="email">
          <img src="@/assets/imgs/user.png" alt="user" class="logo-user" />
        </label>

        <input
          type="email"
          id="email"
          class="form-control w-100 rounded-0 py-2"
          :placeholder="
            locale === 'ar-EG' ? 'أدخل البريد الإلكتروني' : 'Enter your E-mail'
          "
          v-model="email"
        />
      </div>

      <p
        v-if="isEmailError"
        class="mb-0 text-danger position-absolute end-0 email-error"
      >
        Email is invalid
      </p>
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
          class="form-control w-100 rounded-0 py-2"
          :placeholder="
            locale === 'ar-EG' ? 'أدخل كلمة السر' : 'Enter your Password'
          "
          v-model="password"
        />

        <p
          class="mb-0 position-absolute start-0 password-strength"
          :class="[
            !password.length ? '' : '',
            password.length > 0 && password.length <= 3 ? 'w-25' : '',
            password.length > 3 && password.length <= 7 ? 'w-50' : '',
            password.length > 7 && password.length <= 10 ? 'w-75' : '',
            password.length >= 10 ? 'w-100' : '',
          ]"
          id="strength"
        ></p>
      </div>
    </div>

    <div class="w-100 mb-4">
      <button
        :disabled="!email || !password || isEmailError"
        id="login-btn"
        class="btn border-0 main-bg-color w-100 py-2 text-white rounded-0"
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

const email = ref("");

const isEmailError = computed(() => {
  if (email.value) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      return true;
    } else {
      return false;
    }
  }
});

const password = ref("");

const isPasswordError = computed(() => {});
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
  &[disabled] {
    background-color: #a295b4;
    cursor: not-allowed !important;
  }
}
.lock-div {
  .lock-img {
    width: 80px;
    object-fit: contain;
  }
}

.email-error {
  bottom: -25px;
}
.password-strength {
  border-bottom: 4px solid #9848ff;
  bottom: -4px;
  transition-duration: 0.5s;
  width: 0px;
}
</style>
