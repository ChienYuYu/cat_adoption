<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide mb-5" data-bs-ride="carousel">
  <div class="banner carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80" class="d-block" alt="...">
    </div>
  </div>
</div>
  <!-- <div id="carouselExampleCaptions" class="carousel slide mb-5" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="banner carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" class="d-block" alt="cat">
        <div class="carousel-caption d-none d-md-block">
          <h5>給朕一個家</h5>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block" alt="cat">
        <div class="carousel-caption d-none d-md-block">
          <h5>朕需要一個家</h5>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block" alt="cat">
        <div class="carousel-caption d-none d-md-block">
          <h5>把我帶回家</h5>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->
</template>

<script>
export default {
};

</script>

<style lang="scss" scoped>
  .banner{
    .carousel-item {
      img {
        margin: 0 auto;
        width: 80%;
        // height: calc(100vh - 56px);
        height: 600px;
        object-fit: cover;
        object-position: center 30%;
        @media (max-width: 767.98px) {
          width: 100%;
         }
      }
    }
  }
</style>
