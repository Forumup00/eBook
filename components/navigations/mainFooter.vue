<template>
  <div class="navbar navbar-expand-lg">
    <div class="container">
      <div class="row w-100">
        <div class="col-lg-6">
          <div class="w-100">
            <p class="d-flex align-items-center gap-2">
              <img
                src="@/assets/imgs/logo.jpg"
                alt="logo"
                class="logo rounded-circle"
              />

              <span class="fw-bold">{{ $t("title") }}</span>
            </p>

            <p class="w-75">
              {{
                $t(
                  "An institution that aims to educate students and facilitate everything that is difficult for them and their parents"
                )
              }}
            </p>

            <div class="d-flex justify-content-between">
              <div class="w-50">
                <p class="fw-bold">
                  {{ $t("Address") }}
                </p>

                <p class="text-muted">
                  شارع مديرية الأمن رقم 9874 فيلا أبو تريكة لاعب النادي الشرقية
                  بالزمالك
                </p>
              </div>

              <div class="w-50">
                <p class="fw-bold">
                  {{ $t("Phone Number") }}
                </p>

                <p style="direction: ltr">
                  <span>(270) 555-0467</span>

                  <br />

                  <span>(270) 555-0443</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <p class="fw-bold">
            {{ $t("Programs") }}
          </p>
        </div>

        <div class="col-lg-2">
          <p class="fw-bold">
            {{ $t("General") }}
          </p>
        </div>

        <div class="col-lg-2">
          <p class="fw-bold">
            {{ $t("FAQ") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  .logo {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
}
</style>
