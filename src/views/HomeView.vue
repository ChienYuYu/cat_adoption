<template>
  <div class="wrapper">
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
    store.state.isLoading = true; // 20241027

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
