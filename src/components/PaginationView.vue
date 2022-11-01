<template>
  <!-- ------ 桌機 ----------->
  <!-- <div class="mb-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#">〈</a></li>
        <li class="page-item" v-for="(p,index) in totalPage" :key="index">
          <a class="page-link" href="#">{{ p }}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">〉</a></li>
      </ul>
    </nav>
  </div> -->
  <!-- ------ 行動裝置 ----------->
  <!-- <div class="mb-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{disabled: currentPage === 0}">
          <a class="page-link" href="#" @click.prevent="previousPage">上一頁</a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">{{ currentPage + 1 }} / {{ totalPage }}</a>
        </li>
        <li class="page-item" :class="{disabled: currentPage + 1 === totalPage}">
          <a class="page-link" href="#" @click.prevent="nextPage">下一頁</a>
        </li>
      </ul>
    </nav>
  </div> -->
  <!-- ---------------------------------------- -->
  <div class="mb-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{disabled: pageIndex === 0}">
          <a class="page-link" href="#"
          @click.prevent="switchPage('previous')">上一頁</a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">{{ currentPage }} / {{ totalPage }}</a>
        </li>
        <li class="page-item" :class="{disabled: pageIndex + 1 === totalPage}">
          <a class="page-link" href="#" @click.prevent="switchPage('next')">下一頁</a>
        </li>
      </ul>
    </nav>
  </div>
   <!-- ---------------------------------------- -->
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  computed: {
    totalPage() {
      this.$store.commit('countPage');
      return this.$store.state.totalPage;
    },
    currentPage() {
      return this.$store.state.pageIndex + 1;
    },
    pageIndex() {
      return this.$store.state.pageIndex;
    },
  },
  methods: {
    switchPage(calc) {
      this.$store.commit('switchPage', calc);
    },
  },
  watch: {
  },

};
</script>

<style lang="scss" scoped>

</style>
