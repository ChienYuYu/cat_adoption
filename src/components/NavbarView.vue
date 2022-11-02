<template>
  <div class="bg-light">
    <nav class="container navbar">
      <div class="container-fluid">
        <a class="navbar-brand">Meow</a>
        <p class="mb-0 slogan">尚有 <span class="cat-num">{{ catNum }}</span> 隻喵喵需要一個家</p>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    catNum() {
      return this.$store.state.catData.length;
    },
  },
};
</script>

<style lang="scss" scoped>

.slogan{
  color: #666;
}
.cat-num{
  color: #f55;
  font-size: 2rem;
  font-weight: bold;
}
</style>
