<template>
  <div class="wrapper">
    <div class="loading" v-if="isLoading">
      <div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="text-dark text-center">資料載入中...</p>
      </div>
    </div>
    <NavbarView />
    <BannerView />
    <SelectView id="filterArea" />
    <CatList />
    <PaginationView @goSelectAarea="goSelectAarea" />

    <a href="#" class="btn go-top-btn" @click.prevent="goSelectAarea" v-show="showBtn">▲</a>

    <FooterView />
  </div>
</template>

<script>
import {
  onMounted, ref, computed, watch,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import AOS from 'aos';
import NavbarView from '../components/NavbarView.vue';
import BannerView from '../components/BannerView.vue';
import SelectView from '../components/SelectView.vue';
import CatList from '../components/CatList.vue';
import PaginationView from '../components/PaginationView.vue';
import FooterView from '../components/FooterView.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarView,
    BannerView,
    SelectView,
    CatList,
    PaginationView,
    FooterView,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const showBtn = ref(false);

    onMounted(() => {
      store.dispatch('getApi');
      AOS.init();
    });

    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 900) {
          showBtn.value = true;
        } else {
          showBtn.value = false;
        }
      });
    });

    function initUrl() {
      if (Object.keys(route.query).length === 0) {
        router.push({
          query: {
            city: '請選擇縣市',
            sex: '請選擇性別',
            page: 1,
          },
        });
        store.commit('initUrl');
      } else {
        const data = route.query;
        store.commit('updateCitySexPage', data);
      }
    }
    initUrl();

    function goSelectAarea() {
      const Element = document.getElementById('filterArea');
      Element.scrollIntoView({
        behavior: 'smooth',
      });
    }

    const isLoading = computed(() => store.state.isLoading);
    const updateUrl = computed(() => store.state.citySexPage);
    // ===================================
    // 2個watch好像有問題
    // watch(updateUrl, () => {
    //   router.push({
    //     query: store.state.citySexPage,
    //   });
    // }, { deep: true }); // 深度監聽
    // ===================================
    // watch(route, () => {
    //   router.push({
    //     query: store.state.citySexPage,
    //   });
    // }, { deep: true }); // 深度監聽
    // ===================================
    watch(route, () => {
      store.commit('updateCitySexPage', route.query); // 回上一頁才能有更新資料
    });
    // ===================================

    return {
      showBtn, goSelectAarea, isLoading, updateUrl,
    };
  },
};
</script>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
  background: #ffffff90;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner-grow {
  border: 3px solid #fff;
  margin: 0.25rem;
}
.go-top-btn {
  text-decoration: none;
  position: fixed;
  bottom: 0;
  z-index: 20;
  right: 0;
  margin: 0 0.5rem 0.5rem 0;
  background: #fa0;
  color: #fff;
}
</style>
