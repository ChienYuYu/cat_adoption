<template>
 <div class="wrapper">
  <NavbarView />
  <BannerView />
  <SelectView />
  <div class="text-center"  v-if="isLoading === false">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <!-- <h2 class="text-center"
    v-if="isLoading === true && filterCat.length === 0">查無資料
  </h2> -->
  <CatList/>
  <PaginationView />
  <FooterView />
 </div>
</template>

<script>
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
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
