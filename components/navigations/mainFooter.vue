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

              <span class="fw-bold">Pauds.</span>
            </p>

            <p class="w-75">
              Pauds no school is an international elementary school that aims to
              educate students
            </p>

            <div class="d-flex justify-content-between">
              <div class="w-50">
                <p class="fw-bold">Address</p>

                <p class="text-muted">
                  Number 3891 Ranchview Dr. Richardson, California 62639,
                  Amerika Serikat Country
                </p>
              </div>

              <div class="w-50">
                <p class="fw-bold">Phone Number</p>

                <p>
                  (270) 555-0467 <br />
                  (270) 555-0443
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <p class="fw-bold">Programs</p>
        </div>

        <div class="col-lg-2">
          <p class="fw-bold">General</p>
        </div>

        <div class="col-lg-2">
          <p class="fw-bold">FAQ</p>
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
