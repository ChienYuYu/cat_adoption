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
  <SelectView />

  <!-- <h2 class="text-center"
    v-if="isLoading === true && filterCat.length === 0">查無資料
  </h2> -->
  <CatList/>
  <PaginationView />
  <FooterView />
 </div>
</template>

<script>
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
  mounted() {
    this.$store.dispatch('getApi');
    AOS.init();
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style scoped>
.loading{
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
.spinner-grow{
  border: 3px solid #fff;
  margin: .25rem;
}
</style>
