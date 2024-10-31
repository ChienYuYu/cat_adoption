import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    catData: [],
    isLoading: true,
    totalPage: 0,
    eachPageData: [],
    pageIndex: 0,
    cityAndSex: {},
    totalCat: 0,

  },
  getters: {
    showData(state) {
      return state.eachPageData[state.pageIndex];
    },
  },
  mutations: {
    getCat(state, data) {
      state.pageIndex = 0;
      state.catData = data; // cat arr
      state.isLoading = false;
    },
    getTotalNum(state, data) {
      state.totalCat = data.length;
    },
    setLoading(state, tf) {
      state.isLoading = tf;
    },
    countPage(state) {
      state.eachPageData = []; // 先清空 不然會累積越多
      state.totalPage = Math.ceil(state.catData.length / 30);
      for (let i = 0; i < state.totalPage; i += 1) {
        const tempArr = state.catData.slice(i * 30, i * 30 + 30);
        state.eachPageData.push(tempArr);
      }
    },

    switchPage(state, calc) {
      if (calc === 'previous') { state.pageIndex -= 1; }
      if (calc === 'next') { state.pageIndex += 1; }
    },
  },
  actions: {
    getApi(context) {
      const url = 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&IsTransData=1';
      const apiUrl = `${url}&animal_kind=貓`;
      axios.get(apiUrl)
        .then((res) => {
          context.commit('getCat', res.data);
          context.commit('getTotalNum', res.data);
        })
        .catch(() => {
          context.commit('setLoading', false);
        });
    },
    searchCatHandler(context, filterObj) {
      const url = 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&IsTransData=1';
      const {
        city,
        sex,
        color,
        year,
      } = filterObj;
      const apiUrl = `${url}&animal_kind=貓&shelter_address=${city}&animal_sex=${sex}&animal_colour=${color}&animal_createtime=${year}/`;
      axios.get(apiUrl)
        .then((res) => {
          context.commit('getCat', res.data);
        })
        .catch(() => {
          context.commit('setLoading', false);
        });
    },
  },
  modules: {
  },
});
