<template>
 <div class="wrapper">
  <NavbarView />
  <BannerView />
  <SelectView />
  <div class="text-center"  v-if="isLoading === false">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <h2 class="text-center"
    v-if="isLoading === true && filterCat.length === 0">查無資料
  </h2>
  <CatList
    :catData="catData"
   :selectData="selectData"
   :totalPage="totalPage"
   :eachPageData="eachPageData"
   :currentPage="currentPage"
   :showCat="showCat"
   @updateCurrentPage ="updateCurrentPage" />
  <FooterView />
 </div>
</template>

<script>
import NavbarView from '../components/NavbarView.vue';
import BannerView from '../components/BannerView.vue';
import SelectView from '../components/SelectView.vue';
import CatList from '../components/CatList.vue';
import FooterView from '../components/FooterView.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarView,
    BannerView,
    SelectView,
    CatList,
    FooterView,
  },
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
    getSelect() {
      // 從SelectView.vue傳過來的
      this.$emitter.on('selectData', (data) => {
        this.selectData = data;
        // 取得選取資料後要再計算頁數
        this.countPage();
      });
    },
    countPage() {
      this.currentPage = 0; // currentPage歸零!，才不會看到第N頁，又篩選新的條件，結果還在第N頁，新結果沒有N頁那麼多，結果顯示空白!
      this.eachPageData = []; // eachPageData先清空! 不然會累積越來越多
      this.totalPage = Math.ceil(this.filterCat.length / 30);
      for (let i = 0; i < this.totalPage; i += 1) {
        const tempArr = this.filterCat.slice(i * 30, i * 30 + 30);
        this.eachPageData.push(tempArr);
      }
    },
    updateCurrentPage(num) {
      this.currentPage = num;
    },
  },
};
</script>
