<template>
 <div class="wrapper">
  <NavbarView />
  <BannerView />
  <SelectView />
  <CatList />
  <PaginationView />
  <FooterView />
 </div>
</template>

<script>
import NavbarView from '../components/NavbarView.vue';
import BannerView from '../components/BannerView.vue';
import SelectView from '../components/SelectView.vue';
import CatList from '../components/CatList.vue';
import FooterView from '../components/FooterView.vue';
import PaginationView from '../components/PaginationView.vue';

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
};
</script>
