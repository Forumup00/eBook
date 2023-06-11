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
              :slidesPerView="4"
              :spaceBetween="100"
            >
              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Raising-hand.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Raising-pana.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/English-teacher.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Course-app-pana.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Course-app-rafiki.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Raising-hand.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Raising-pana.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/English-teacher.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Course-app-pana.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="@/assets/imgs/Course-app-rafiki.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
</script>

<style lang="scss" scoped>
.parent {
  background-color: #13172a;
  padding: 50px;
}
</style>
