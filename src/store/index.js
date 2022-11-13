import axios from 'axios';
import { createStore } from 'vuex';
// import { useRouter } from 'vue-router';

export default createStore({
  state: {
    catData: [],
    isLoading: true,
    totalPage: 0,
    eachPageData: [],
    pageIndex: 0,
    cityAndSex: {},
    // ----------我是分隔線------------
    citySexPage: {},

  },
  getters: {
    filterShow(state) {
      if (state.citySexPage.city !== '請選擇縣市' && state.citySexPage.sex === '請選擇性別') {
        return state.catData.filter((item) => item.shelter_address.match(state.citySexPage.city));
      }
      if (state.citySexPage.city === '請選擇縣市' && state.citySexPage.sex !== '請選擇性別') {
        return state.catData.filter((item) => item.animal_sex.match(state.citySexPage.sex));
      }
      if (state.citySexPage.city !== '請選擇縣市' && state.citySexPage.sex !== '請選擇性別') {
        return state.catData.filter((item) => item.shelter_address.match(state.citySexPage.city)
        && item.animal_sex.match(state.citySexPage.sex));
      }
      return state.catData;
    },

    showData(state) {
      return state.eachPageData[state.citySexPage.page - 1];
    },

    updateUrl(state) {
      return state.citySexPage;
    },
  },
  // ********************************************************
  mutations: {
    initUrl(state) {
      state.citySexPage = { city: '請選擇縣市', sex: '請選擇性別', page: 1 };
    },
    updateCitySexPage(state, data) {
      state.citySexPage = data;
    },
    getCat(state, data) {
      state.catData = data.filter((item) => item.animal_kind === '貓');
      state.isLoading = false;
    },
    filterCitySex(state, data) {
      state.cityAndSex = data;
      state.pageIndex = 0;
    },
    countPage(state) {
      state.eachPageData = []; // 先清空 不然會累積越多
      state.totalPage = Math.ceil(this.getters.filterShow.length / 30);
      for (let i = 0; i < state.totalPage; i += 1) {
        const tempArr = this.getters.filterShow.slice(i * 30, i * 30 + 30);
        state.eachPageData.push(tempArr);
      }
    },
    switchPage(state, calc) {
      if (calc === 'previous') {
        state.citySexPage.page = Number(state.citySexPage.page) - 1;
        // state.citySexPage.page -= 1;
      }
      if (calc === 'next') {
        state.citySexPage.page = Number(state.citySexPage.page) + 1;
        // state.citySexPage.page += 1;
      }
      //
    },
  },
  // ********************************************************
  actions: {
    getApi(context) {
      const apiUrl = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL';
      axios.get(apiUrl)
        .then((res) => {
          context.commit('getCat', res.data);
        });
    },
  },
  modules: {
  },
});
