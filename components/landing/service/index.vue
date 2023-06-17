<template>
  <div class="col-lg-12 mb-5">
    <h2 class="w-100 text-center">
      {{ $t("How is our service?") }}
    </h2>
  </div>

  <div class="row mb-5 mx-0 g-3">
    <div class="col-lg-3 col-md-6 col-sm-12 card-y">
      <div
        class="w-100 px-3 py-4 main-shadow rounded-4 custom-h card-animation"
      >
        <p>
          <img src="@/assets/imgs/like.png" alt="like" class="icon" />
        </p>

        <p class="fw-bold">{{ $t("Relaxing and Learning") }}</p>

        <p class="text-muted mb-0">
          {{
            $t(
              "There are several sections available in different versions, but most of them have fun."
            )
          }}
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-sm-12 card-y">
      <div
        class="w-100 px-3 py-4 main-shadow rounded-4 custom-h card-animation"
      >
        <p>
          <img src="@/assets/imgs/award.png" alt="like" class="icon" />
        </p>

        <p class="fw-bold">
          {{ $t("Certificate") }}
        </p>

        <p class="text-muted mb-0">
          {{
            $t(
              "We are constantly improving the material for the lessons we want to pass on to others."
            )
          }}
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-sm-12 card-y">
      <div
        class="w-100 px-3 py-4 main-shadow rounded-4 custom-h card-animation"
      >
        <p>
          <img src="@/assets/imgs/smile.png" alt="like" class="icon" />
        </p>

        <p class="fw-bold">{{ $t("Experience") }}</p>

        <p class="text-muted mb-0">
          {{
            $t(
              "Our students in special education have the best educational degrees."
            )
          }}
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-sm-12 card-y">
      <div
        class="w-100 px-3 py-4 main-shadow rounded-4 custom-h card-animation"
      >
        <p>
          <img src="@/assets/imgs/creative-brain.png" alt="like" class="icon" />
        </p>

        <p class="fw-bold">
          {{ $t("Creative Thinking") }}
        </p>

        <p class="text-muted mb-0">
          {{
            $t(
              "the ability to come up with unique, original solutions to problems. It involves brainstorming."
            )
          }}
        </p>
      </div>
    </div>
  </div>

  <div class="col-lg-6 mb-5">
    <div class="w-100 text-center">
      <img src="@/assets/imgs/uniStudent.png" alt="student" class="uni-img" />
    </div>
  </div>

  <div class="col-lg-6 mb-5">
    <div class="w-100 py-5">
      <p class="text-danger fw-bold">{{ $t("LEARNING METHODS") }}</p>

      <h1 class="mb-5">
        {{ $t("Access to learning anytime and anywhere") }}
      </h1>

      <p class="text-muted">
        {{
          $t(
            "Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime"
          )
        }}
      </p>

      <div>
        <p class="d-flex align-items-center gap-2">
          <i class="fa-solid fa-circle-dot text-primary"></i>

          <span class="text-primary">{{ $t("Easy learning") }}</span>
        </p>

        <p class="d-flex align-items-center gap-2">
          <i class="fa-solid fa-circle-dot text-primary"></i>

          <span class="text-primary">{{ $t("Easy learning") }}</span>
        </p>

        <p class="d-flex align-items-center gap-2">
          <i class="fa-solid fa-circle-dot text-primary"></i>

          <span class="text-primary">{{ $t("Flexible") }}</span>
        </p>

        <p class="d-flex align-items-center gap-2">
          <i class="fa-solid fa-circle-dot text-primary"></i>

          <span class="text-primary">{{ $t("Affordable") }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  let cardAnimation = document.querySelectorAll(".card-animation");
  window.onscroll = () => {
    let windowHeight = window.innerHeight;

    cardAnimation.forEach((card, i) => {
      if (
        card.getBoundingClientRect().top < windowHeight &&
        card.getBoundingClientRect().top > -200
      ) {
        card.classList.add("swing");
      } else {
        card.classList.remove("swing");
      }
    });
  };
});
</script>

<style lang="scss" scoped>
.card-y {
  .custom-h {
    height: 250px;
  }
  .icon {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  transition-duration: 0.3s;
  &:hover {
    transform: translateY(-8px);
  }
}

.uni-img {
  width: 100%;
  height: 500px;
  object-fit: contain;
}

@media only screen and (max-width: 320px) {
  .uni-img {
    width: 90%;
    height: 400px;
  }
}

.swing {
  animation: swing 1s 0.5s;
}

@keyframes swing {
  10% {
    transform: rotate(10deg);
  }

  40% {
    transform: rotate(-10deg);
  }

  60% {
    transform: rotate(5deg);
  }

  80% {
    transform: rotate(-5deg);
  }
}
</style>
