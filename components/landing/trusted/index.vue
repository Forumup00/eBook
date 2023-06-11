<template>
  <div class="col-lg-12 mb-5">
    <div class="w-100">
      <div class="d-flex justify-content-between gap-2 mb-5">
        <div class="img-container overflow-hidden rounded-pill">
          <img src="@/assets/imgs/student.jpg" alt="student" />
        </div>

        <div class="img-container middle overflow-hidden rounded-pill">
          <img src="@/assets/imgs/student2.jpg" alt="student" />
        </div>

        <div class="img-container middle overflow-hidden rounded-pill">
          <img src="@/assets/imgs/student3.jpg" alt="student" />
        </div>

        <div class="img-container overflow-hidden rounded-pill">
          <img src="@/assets/imgs/student4.jpg" alt="student" />
        </div>
      </div>

      <div>
        <p class="text-muted text-center fw-bold">
          {{ $t("Trusted by 100k+ students") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.img-container {
  width: 25%;
  height: 400px;
  filter: drop-shadow(0 6mm 4mm #9848ff);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.middle {
    margin-top: 8rem;
  }
}
</style>
