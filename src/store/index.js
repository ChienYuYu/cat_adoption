import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    catData: [],
    isLoading: false,
    selectData: {},
    totalPage: 0,
    eachPageData: [],
    pageIndex: 0,

  },
  getters: {
    showData(state) {
      return state.eachPageData[state.pageIndex];
    },
  },
  mutations: {
    getCat(state, data) {
      state.catData = data.filter((item) => item.animal_kind === '貓');
      state.isLoading = true;
    },
    switchPage(state, calc) {
      if (calc === 'previous') { state.pageIndex -= 1; }
      if (calc === 'next') { state.pageIndex += 1; }
    },
    countPage(state) {
      state.totalPage = Math.ceil(state.catData.length / 30);
      for (let i = 0; i < state.totalPage; i += 1) {
        const tempArr = state.catData.slice(i * 30, i * 30 + 30);
        state.eachPageData.push(tempArr);
      }
    },
  },
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
