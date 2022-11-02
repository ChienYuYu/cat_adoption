<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide mb-5" data-bs-ride="carousel">
  <div class="banner carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80" class="d-block" alt="...">
      <h1 class="title">給朕一個家</h1>
      <i class="bi bi-caret-down-fill"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
};

</script>

<style lang="scss" scoped>
  .banner{
    .carousel-item {
      position:relative;
      img {
        margin: 0 auto;
        // width: 80%;
        width: 100%;
        height: calc(100vh - 64px);
        // height: 600px;
        object-fit: cover;
        object-position: center 30%;
        @media (max-width: 767.98px) {
          width: 100%;
         }
      }
      .title{
        position: absolute;
        left: 50%;
        top: 77%;
        transform: translate(-50%,-50%);
        background: #aaaaaa80;
        color: #fff;
        padding: 1.2rem 2rem;
        border-radius: .5rem;
      }
      .bi-caret-down-fill{
        font-size: 80px;
        line-height: 0;
        color: #fff;
        position: absolute;
        bottom: 1%;
        left: 50%;
        transform: translate(-50%,-50%);
        animation: downdown 1s infinite;
      }
    }
  }
  @keyframes downdown{
    0%{
      bottom: 1%;
    }
    50%{
      bottom: -3%;
    }
    100%{
      bottom: 1%;
    }
  }
</style>
