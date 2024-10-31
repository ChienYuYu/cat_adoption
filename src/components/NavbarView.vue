<template>
  <div class="navbar-wrap bg-light">
    <nav class="container navbar">
      <div class="container-fluid">
        <!-- <a class="navbar-brand">Meow</a> -->
        <h1 class="logo mb-0">
          <router-link to="/" class="navbar-brand">給朕一個家</router-link>
        </h1>
        <p class="mb-0 slogan">尚有
          <span class="cat-num">
            {{ catNum }}
          </span> 隻喵喵需要一個家
        </p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    catNum() {
      return this.$store.state.totalCat;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-wrap{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background: #eee;
}
.logo {
  width: 50px;
  height: 50px;
  background: rgb(78, 156, 85);
  border-radius: 50%;
  padding: 1px;
  a{
    width: 100%;
    height: 100%;
    background: url('../assets/cat_logo-w.svg');
    display: block;
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.slogan{
  color: #666;
}
.cat-num{
  color: #f55;
  font-size: 2rem;
  font-weight: bold;
}
</style>
