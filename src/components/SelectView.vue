<template>
 <div class="container pb-5 mb-5 border-bottom">
  <div class="row justify-content-center py-5"
  data-aos="fade-up"  data-aos-duration="1500" data-aos-once="true">
    <div class="col-md-3 m-1">
      <select class="form-select" aria-label="Default select example"
      v-model="myCity"
      @change="filterCitySex">
        <option disabled>請選擇縣市</option>
        <option v-for="c in city" :key="c" :value="c">{{c}}</option>
      </select>
    </div>
    <div class="col-md-3 m-1">
      <select class="form-select" aria-label="Default select example"
        v-model="sex" @change="filterCitySex">
        <option disabled>請選擇性別</option>
        <option value="M">公</option>
        <option value="F">母</option>
        <option value="N">不明</option>
      </select>
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center mt-3"
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
 </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const city = ref(['基隆市', '臺北市', '新北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '臺東縣', '花蓮縣', '宜蘭縣', '澎湖縣', '金門縣', '連江縣']);
    const myCity = ref('請選擇縣市');
    const sex = ref('請選擇性別');
    const store = useStore();

    onMounted(() => {
      store.commit('filterCitySex', { city: myCity.value, sex: sex.value });
    });

    const totalPage = computed(() => store.state.totalPage);
    const filterDataNum = computed(() => store.getters.filterShow.length);
    const pageIndex = computed(() => store.state.pageIndex + 1);

    function filterCitySex() {
      store.commit('filterCitySex', { city: myCity.value, sex: sex.value });
    }
    function reset() {
      sex.value = '請選擇性別';
      myCity.value = '請選擇縣市';
      store.commit('filterCitySex', { city: myCity.value, sex: sex.value });
    }

    return {
      city, myCity, sex, totalPage, filterDataNum, pageIndex, filterCitySex, reset,
    };
  },
};
</script>

<style lang="scss" scoped>
  .big-text{
    font-size: 2rem;
    color: #f55;
  }
  .reset-btn{
    border:1px solid #f55;
    color: #f55;
    transition: .2s;
    &:hover{
      background: #f55;
      color: #fff;
    }
  }
</style>
