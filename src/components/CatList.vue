<template>
  <div class="cat-list container mb-5">

    <div class="row mb-5">

      <div class="col-12 col-lg-4" v-for="c in showCat" :key="c.animal_id">
        <div class="card mb-3" @click="catDetail" @keydown="catDetail">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="c.album_file" class="img-fluid rounded-start" alt="cat">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5>{{ c.animal_colour }}貓咪 性別：{{ sexDataTransform(c.animal_sex)}}</h5>
                <p class="card-text mb-0">收容所：{{ c.shelter_name }}</p>
                <p class="card-text mb-0">地址：{{ c.shelter_address }}</p>
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

      <div class="text-center"  v-if="isLoading === false">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
      <h2 class="text-center"
      v-if="isLoading === true && filterCat.length === 0">查無資料</h2>

    </div>
  </div>
</template>

<script>
// https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL
export default {
  data() {
    return {
      catData: [],
      selectData: {},
      isLoading: false,
      totalPage: 0,
      eachPageData: [],
      currentPage: 0,
    };
  },
  mounted() {
    const apiUrl = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL';
    this.axios.get(apiUrl)
      .then((res) => {
        this.catData = res.data.filter((item) => item.animal_kind === '貓');
        this.countPage();
        this.isLoading = true;
      });

    this.getSelect(); // 取得選取的條件(縣市/公母)
    this.getCurrentPageNum();// 取得目前在哪一頁
  },
  computed: {
    filterCat() {
      if (this.selectData !== {}) {
        if (this.selectData.city !== '請選擇縣市' && this.selectData.sex === '請選擇性別') {
          return this.catData.filter((item) => item.shelter_address.match(this.selectData.city));
        }
        if (this.selectData.city === '請選擇縣市' && this.selectData.sex !== '請選擇性別') {
          return this.catData.filter((item) => item.animal_sex.match(this.selectData.sex));
        }
        return this.catData.filter((item) => item.shelter_address.match(this.selectData.city)
          && item.animal_sex.match(this.selectData.sex));
      }
      return this.catData;
    },
    showCat() {
      return this.eachPageData[this.currentPage];
    },
  },
  methods: {
    catDetail() {
      console.log('由這邊轉跳詳細頁面');
    },
    getSelect() {
      this.$emitter.on('selectData', (data) => {
        this.selectData = data;
        // 取得選取資料後要再計算頁數
        this.countPage();
        console.log(data);
      });
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
    countPage() {
      this.eachPageData = []; // 先清空!!! 不然會累積越來越多
      this.totalPage = Math.ceil(this.filterCat.length / 30);
      for (let i = 0; i < this.totalPage; i += 1) {
        const tempArr = this.filterCat.slice(i * 30, i * 30 + 30);
        this.eachPageData.push(tempArr);
      }
      this.$emitter.emit('pageData', this.totalPage); // 將頁碼數量傳到PaginationView.vue
    },

    getCurrentPageNum() {
      // 從PaginationView.vue取得currentPage
      this.$emitter.on('currentPageNum', (data) => {
        this.currentPage = data;
        this.countPage();
      });
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
