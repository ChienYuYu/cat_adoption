<template>
  <div class="mb-5">
    <div class="banner">
      <div class="title-wrap">
        <h2 class="title">給朕一個家</h2>
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
  background-image: url(../assets/banner01.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center 40%;

  .title-wrap {
    position: relative; // 動畫
    animation: downdown 1s infinite;// 動畫
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:end;
    align-items: center;
    padding-bottom: 4rem;
    .title {
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
      font-size: 70px;
      line-height: 0;
      color: #fff;
      animation: downdown 1s infinite;
    }
  }
}
@keyframes downdown {
  0% {
    bottom: 1%;
  }
  50% {
    bottom: -2%;
  }
  100% {
    bottom: 1%;
  }
}
</style>
