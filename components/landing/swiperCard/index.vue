<template>
  <div class="parent d-flex justify-content-center align-items-center mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="w-100">
            <swiper
              :navigation="true"
              dir="ltr"
              :modules="modules"
              class="mySwiper"
              :slidesPerView="1"
              :spaceBetween="100"
              :breakpoints="{
                '500': {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                '992': {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                '1024': {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }"
            >
              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Raising-hand.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Course-app-rafiki.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Raising-pana.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/English-teacher.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Course-app-pana.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Raising-hand.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Course-app-rafiki.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Raising-pana.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/English-teacher.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Course-app-pana.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      :dir="locale === 'ar-EG' ? 'rtl' : 'ltr'"
                    >
                      {{
                        $t(
                          "Some quick example text to build on the card title and make up the bulk of the card's content."
                        )
                      }}
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useStore } from "~/store/store";

const modules = ref([Navigation]);

const store = useStore();

const { locales, locale, setLocale } = useI18n();
</script>

<style lang="scss" scoped>
.parent {
  background-color: #13172a;
  padding: 50px;
}
</style>
