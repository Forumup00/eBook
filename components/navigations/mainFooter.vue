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
                  {{
                    $t(
                      "Security Directorate Street No. 9874 Villa Abu Trika, player of the Eastern Club in Zamalek"
                    )
                  }}
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

            <div class="socials">
              <NuxtLink
                to="https://www.facebook.com/MohamedElsayedDodo"
                target="_blank"
              >
                <img
                  src="../../assets/imgs/facebook.png"
                  class="me-1"
                  alt="facebook"
                  title="facebook"
                />
              </NuxtLink>

              <NuxtLink to="https://wa.me/+201226074394" target="_blank">
                <img
                  src="../../assets/imgs/whatsapp.png"
                  class="me-2"
                  alt="whatsapp"
                  title="whatsapp"
                />
              </NuxtLink>

              <NuxtLink
                to="https://www.instagram.com/ce_dodo_/"
                target="_blank"
              >
                <img
                  src="../../assets/imgs/instagram.png"
                  class="me-2"
                  alt="instagram"
                  title="instagram"
                />
              </NuxtLink>

              <NuxtLink
                to="https://www.youtube.com/channel/UCCMyb1KMr7FqsObTqft3kFQ"
                target="_blank"
              >
                <img
                  src="../../assets/imgs/youtube.png"
                  class="me-2"
                  alt="youtube"
                  title="youtube"
                />
              </NuxtLink>

              <NuxtLink to="https://telegram.me/forumup_Dodo" target="_blank">
                <img
                  src="../../assets/imgs/telegram.png"
                  class="me-2"
                  alt="telegram"
                  title="telegram"
                />
              </NuxtLink>

              <NuxtLink
                to="https://www.linkedin.com/in/mohamed-el-sayed-b7419a1b2/"
                target="_blank"
              >
                <img
                  src="../../assets/imgs/linkedin.png"
                  class="me-2"
                  alt="linkedin"
                  title="linkedin"
                />
              </NuxtLink>
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
.socials {
  a {
    text-decoration: none;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
