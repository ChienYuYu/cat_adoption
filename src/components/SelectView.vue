<template>
 <div class="container pb-5 mb-5 border-bottom">
  <div class="row justify-content-center py-5"
  data-aos="fade-up"  data-aos-duration="1500" data-aos-once="true">
    <div class="col-md-2 m-1">
      <select class="form-select" aria-label="Default select example"
      v-model="filterObj.city"
      @change="searchHandler()">
        <option  :value="''" disabled>請選擇縣市</option>
        <option v-for="c in city" :key="c" :value="c">{{c}}</option>
      </select>
    </div>
    <div class="col-md-2 m-1">
      <select class="form-select" aria-label="Default select example"
        v-model="filterObj.sex" @change="searchHandler()">
        <option :value="''" disabled>請選擇性別</option>
        <option value="M">公</option>
        <option value="F">母</option>
        <option value="N">不明</option>
      </select>
    </div>
    <div class="col-md-2 m-1">
      <select class="form-select" aria-label="Default select example"
        v-model="filterObj.color" @change="searchHandler()">
        <option :value="''" disabled>請選擇花色</option>
        <option  v-for="color in colorArr" :key="color" :value="color">
          {{ color }}
        </option>
      </select>
    </div>
  </div>
  <div class="page_wrap d-flex justify-content-center align-items-center mt-3"
    data-aos="fade-left"  data-aos-duration="1500"
    data-aos-once="true" data-aos-delay="50">
    <div class="mx-1">
      <p class="text-secondary mb-0">
        總共 <span class="big-text"> {{ totalPage }} </span> 頁
        <span class="big-text"> {{ filterDataNum }} </span> 筆資料
      </p>
    </div>
    <button class="btn reset-btn mx-1"
    @click="reset">重設篩選</button>
  </div>
  <p class="text-center mb-0 pt-3 text-secondary"
  data-aos="fade-right"  data-aos-duration="1500"
  data-aos-once="true" data-aos-delay="300">
    目前第 {{ pageIndex }} 頁
  </p>
  <div class="sort_wrap">
    <div class="wrap">
      <label for="r1" class="">
        <input type="radio" id="r1" name="group1" @change="sortHandler('desc')"
        :checked="sortType == 'desc'">
        <p class="mb-0">資料建立日期：近→遠</p>
      </label>
      <label for="r2" class>
        <input type="radio" id="r2" name="group1" @change="sortHandler('asc')"
        :checked="sortType == 'asc'">
        <p class="mb-0">資料建立日期：遠→近</p>
      </label>
    </div>
  </div>
 </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const city = ref(['基隆市', '臺北市', '新北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '臺東縣', '花蓮縣', '宜蘭縣', '澎湖縣', '金門縣', '連江縣']);
    const colorArr = ref(['三花', '花色', '虎斑', '灰', '黑', '橘', '白', '黃']);
    const yearArr = ref([]);
    const store = useStore();
    const filterObj = ref({
      city: '',
      sex: '',
      color: '',
      year: '',
    });
    onMounted(() => {});

    const sortType = computed(() => store.state.sortType);
    const totalPage = computed(() => store.state.totalPage);
    // const filterDataNum = computed(() => store.getters.filterShow.length);
    const filterDataNum = computed(() => store.state.catData.length);
    const pageIndex = computed(() => store.state.pageIndex + 1);

    function searchHandler() {
      store.state.isLoading = true;
      store.dispatch('searchCatHandler', filterObj.value);
    }

    function reset() {
      store.state.isLoading = true;
      filterObj.value.city = '';
      filterObj.value.sex = '';
      filterObj.value.color = '';
      filterObj.value.year = '';
      store.commit('resetSortType');
      store.dispatch('getApi');
    }

    function year15() {
      const nowYear = new Date().getFullYear();
      for (let i = nowYear - 10; i <= nowYear; i += 1) {
        if (i <= nowYear) {
          yearArr.value.unshift(i);
        }
      }
    }
    year15();

    function sortHandler(category) {
      // desc降序 // 升序
      store.commit('sortHandler', category);
    }

    return {
      city,
      totalPage,
      filterDataNum,
      pageIndex,
      reset,
      colorArr,
      filterObj,
      searchHandler,
      yearArr,
      sortHandler,
      sortType,
    };
  },
};
</script>

<style lang="scss" scoped>
  .page_wrap {
    .big-text{
      font-size: 2rem;
      color: #f55;
      @media (max-width:360px) {
        font-size: 1.5rem;
      }
    }
    .reset-btn{
      border:1px solid #f55;
      color: #f55;
      transition: .2s;
      &:hover{
        background: #f55;
        color: #fff;
      }
      @media (max-width:360px) {
        font-size: 14px;
      }
    }
  }

  .sort_wrap{
    // border: 1px solid #333;
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    .wrap{
      width: 30%;
      display: flex;
      justify-content: space-around;
      @media (max-width:1280px) {
        width: 50%;
      }
      @media (max-width:575px) {
        width: 100%;
      }
      label{
        display: flex;
        align-items: center;
        input{
          margin-right: 5px;
        }
        p{
          font-size: 14px;
        }
      }
    }
  }
</style>
