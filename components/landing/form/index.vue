<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-12">
        <div
          class="w-100 bg-form d-flex justify-content-center align-items-center rounded-3"
        >
          <form @submit.prevent="" class="w-50 py-5">
            <div class="mb-3">
              <label for="mail" class="form-label text-white">
                {{ $t("Email") }}
              </label>

              <input
                type="email"
                id="mail"
                class="form-control py-2"
                :placeholder="
                  store.lang === 'ar-EG'
                    ? 'أدخل بريدك الألكتروني'
                    : 'Enter your Email'
                "
              />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label text-white">
                {{ $t("Message") }}
              </label>

              <textarea
                class="form-control"
                id="message"
                :placeholder="
                  store.lang === 'ar-EG'
                    ? 'قم بكتابة رسالتك'
                    : 'Enter your Message'
                "
              ></textarea>
            </div>

            <div>
              <button class="btn btn-light w-100 py-2">
                {{ $t("Send message") }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";

const store = useStore();
</script>

<style lang="scss" scoped>
.bg-form {
  background-image: url(@/assets/imgs/top-view.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  clip-path: polygon(50% 100%, 0 90%, 0 0, 100% 0, 100% 90%);
}
textarea {
  min-height: 250px;
  max-height: 250px;
}
@media only screen and (max-width: 767px) {
  textarea {
    min-height: auto !important;
    max-height: auto !important;
  }
}
</style>
