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
    sortType: 'desc',

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
      this.commit('sortHandler', 'desc');
      state.isLoading = false;
    },
    getTotalNum(state, data) {
      state.totalCat = data.length;
    },
    setLoading(state, tf) {
      state.isLoading = tf;
    },

    countPage(state) { // 20241102 改10筆1頁
      state.eachPageData = []; // 先清空 不然會累積越多
      state.totalPage = Math.ceil(state.catData.length / 10);
      for (let i = 0; i < state.totalPage; i += 1) {
        const tempArr = state.catData.slice(i * 10, i * 10 + 10);
        state.eachPageData.push(tempArr);
      }
    },
    sortHandler(state, category) { // 資料近到遠、遠到近排序
      state.pageIndex = 0; // 回到第1頁
      if (category === 'desc') {
        state.catData.sort((a, b) => new Date(b.animal_createtime) - new Date(a.animal_createtime));
        state.sortType = 'desc';// 20241130
      } else if (category === 'asc') {
        state.catData.sort((a, b) => new Date(a.animal_createtime) - new Date(b.animal_createtime));
        state.sortType = 'asc';// 20241130
      }
      // console.log(state.catData, category);
    },
    switchPage(state, calc) {
      if (calc === 'previous') { state.pageIndex -= 1; }
      if (calc === 'next') { state.pageIndex += 1; }
    },
    resetSortType(state) { // 20241130
      state.sortType = 'desc';
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
      } = filterObj;
      const apiUrl = `${url}&animal_kind=貓&shelter_address=${city}&animal_sex=${sex}&animal_colour=${color}`;
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
