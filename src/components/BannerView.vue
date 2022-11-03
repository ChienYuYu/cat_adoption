<template>
  <div class="mb-5">
    <div class="banner">
      <div class="title-wrap">
        <h1 class="title">給朕一個家</h1>
        <i class="bi bi-caret-down-fill"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  background-image: url(../assets/banner01.jpg);
  width: 100%;
  // height: calc(100vh - 64px);
  height: 100vh;
  background-size: cover;
  background-position: center 30%;
  background-attachment: fixed;
  .title-wrap {
    .title {
      text-align: center;
      position: absolute;
      left: 50%;
      top: 77%;
      transform: translate(-50%, -50%);
      background: #e6838380;
      color: #fff;
      padding: 1.2rem 2rem;
      border-radius: 0.5rem;
      @media (max-width: 430px) {
        font-size: 28px;
        padding: 0.8rem 1rem;
      }
    }
    .bi-caret-down-fill {
      font-size: 80px;
      line-height: 0;
      color: #fff;
      position: absolute;
      bottom: 1%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: downdown 1s infinite;
    }
  }
}
@keyframes downdown {
  0% {
    bottom: 1%;
  }
  50% {
    bottom: -3%;
  }
  100% {
    bottom: 1%;
  }
}
</style>
