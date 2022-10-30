<template>
  <div class="cat-list container mb-5">
    <div class="row mb-5">

      <div class="col-12 col-lg-4" v-for="c in showCat" :key="c.animal_id">
        <div class="card mb-3" @click="catPhoto(c.album_file)" @keydown="catPhoto">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="c.album_file" class="img-fluid rounded-start" alt="cat">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text mb-0">
                  <small class="text-muted">流水編號：{{ c.animal_id }}</small>
                </p>
                <p class="card-text mb-0">
                  <small class="text-muted">區域編號：{{ c.animal_subid }}</small>
                </p>
                <h5 class="mb-0">{{ c.animal_colour }}貓咪 性別：{{ sexDataTransform(c.animal_sex)}}</h5>
                <p class="card-text mb-0">{{ c.shelter_name }}</p>
                <p class="card-text mb-0">{{ c.shelter_address }}</p>
                <p class="card-text mb-0">
                  <small class="text-muted">電話：{{ c.shelter_tel }}</small>
                </p>
                <p class="card-text mb-0">
                  <small class="text-muted">更新日期：{{ c.cDate }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- ------ 頁碼 ----------->
    <div class="mb-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{disabled: currentPage === 0}">
            <a class="page-link" href="#" @click.prevent="previousPage">上一頁</a>
          </li>
          <li class="page-item disabled">
            <a class="page-link" href="#">{{ currentPage + 1 }} / {{ totalPage }}</a>
          </li>
          <li class="page-item"
          :class="{disabled: currentPage + 1 === totalPage || totalPage === 0}">
            <a class="page-link" href="#" @click.prevent="nextPage">下一頁</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL
export default {
  props: ['catData', 'selectData', 'totalPage', 'eachPageData', 'currentPage', 'showCat'],
  data() {
    return {
      nowPage: 0,
    };
  },
  mounted() {
    this.nowPage = this.currentPage;
  },
  methods: {
    // catDetail(animalSubId) {
    //   console.log(animalSubId);
    //   this.$router.push(`/${animalSubId}`);
    // },
    catPhoto(photo) {
      console.log(photo);
      // this.$router.push(`/${photo}`);
      window.location.href = photo;
    },
    // emit
    previousPage() {
      this.$emit('updateCurrentPage', this.nowPage -= 1);
    },
    nextPage() {
      this.$emit('updateCurrentPage', this.nowPage += 1);
    },
    sexDataTransform(sex) {
      if (sex === 'M') {
        return '公';
      }
      if (sex === 'F') {
        return '母';
      }
      return '不明';
    },
  },
};
</script>

<style lang="scss" scoped>
  .cat-list{
    // height: 80vh;
  }
  .card {
    cursor: pointer;
      img{
      height: 100%;
      object-fit: cover;
    }
  }
</style>
