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
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
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

    function goSelectAarea() {
      const Element = document.getElementById('filterArea');
      Element.scrollIntoView({
        behavior: 'smooth',
      });
    }

    const isLoading = computed(() => store.state.isLoading);
    return { showBtn, isLoading, goSelectAarea };
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
