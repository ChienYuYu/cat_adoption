window.location.href<template>
  <!-- <NavbarView /> -->
  <header class="header navbar-wrap bg-light">
    <nav class="container navbar">
      <div class="container-fluid">
        <h1 class="logo mb-0">
          <router-link to="/" class="navbar-brand">
            給朕一個家
          </router-link>
        </h1>
        <p class="mb-0">流水編號：<span style="color: #f00;">{{ cat.animal_id }}</span></p>
      </div>
    </nav>
  </header>
  <!-- ==================================================== -->
  <div class="wrapper">
    <div class="info_container">
      <img class="cat_pic" :src="cat.album_file" alt=""
        @click="showPicHandler()" @keydown="showPicHandler()">
      <div class="content">
        <p><span class="title">流水編號：</span>{{ cat.animal_id }}</p>
        <p><span class="title">收容編號：</span>{{ cat.animal_subid }}</p>
        <p><span class="title">更新日期：</span>{{ cat.cDate }}</p>
        <p><span class="title">開放認養時間(起)：</span>{{ cat.animal_opendate }}</p>
        <p><span class="title">開放認養時間(迄)：</span>{{ cat.animal_closeddate }}</p>
        <p><span class="title">毛色：</span>{{ cat.animal_colour }}</p>
        <p><span class="title">性別：</span>{{ cat.animal_sex }}</p>
        <p><span class="title">年齡分類：</span>{{ cat.animal_age }}</p>
        <p><span class="title">收容所名稱：</span>{{ cat.shelter_name }}</p>
        <p><span class="title">收容所地址：</span>{{ cat.shelter_address }}</p>
        <p><span class="title">收容所電話：</span>{{ cat.shelter_tel }}</p>
        <button class="copy_url_btn" type="button" @click="copyUrlHandler()">
          複製此頁網址
        </button>
      </div>
    </div>
    <FooterView />
  </div>
  <transition>
    <div class="lightbox bg-dark bg-opacity-75" v-if="lightbox"
      @click="closeLightBox()" @keydown="closeLightBox()">
    <div class="img-btn-wrap">
      <img :src="cat.album_file" alt="cat pic">
      <button class="close-btn " @click="closeLightBox()">close</button>
    </div>
  </div>
  </transition>
</template>

<script>
// https://data.gov.tw/dataset/85903
import axios from 'axios';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import FooterView from '../components/FooterView.vue';

export default {
  components: {
    FooterView,
  },
  setup() {
    const lightbox = ref(false);
    const store = useStore();
    const isLoading = computed(() => store.state.isLoading);
    const cat = ref([]);
    const catId = window.location.href.split('/cat_info/')[1];
    console.log('catId', catId);

    async function getCatData() {
      store.state.isLoading = true;
      const url = 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&IsTransData=1';
      const apiUrl = `${url}&animal_id=${catId}`;
      try {
        const res = await axios.get(apiUrl);
        cat.value = await res.data[0];
        console.log('cat value', cat.value);
        store.state.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    }
    getCatData();

    function showPicHandler() {
      lightbox.value = true;
    }

    function closeLightBox() {
      lightbox.value = false;
    }

    function copyUrlHandler() {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        window.alert('網址已複製~');
      }).catch((err) => {
        console.error('Failed to copy URL: ', err);
      });
    }
    return {
      isLoading,
      getCatData,
      cat,
      showPicHandler,
      copyUrlHandler,
      closeLightBox,
      lightbox,
    };
  },
};
</script>

<style lang="scss" scoped>
  header{
    .navbar-wrap{
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 9;
      background: #eee;
    }
    .logo {
      width: 50px;
      height: 50px;
      background: rgb(78, 156, 85);
      border-radius: 50%;
      padding: 1px;
      a{
        width: 100%;
        height: 100%;
        background: url('../assets/cat_logo-w.svg');
        display: block;
        text-indent: 101%;
        white-space: nowrap;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
  .wrapper{
    height: calc(100vh - 66px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info_container{
    margin: 60px auto 0;
    width: 80%;
    display: flex;
    justify-content: center;
    @media (max-width: 1180px) {
      margin: 40px auto 0;
    }
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
    }
    img.cat_pic{
      max-width: 500px;
      max-height: 500px;
      object-fit: cover;
      cursor: zoom-in;

      @media (max-width: 1024px) {
        max-width: 450px;
        max-height: 450px;
      }
      @media (max-width: 575px) {
        max-width: 400px;
        max-height: 400px;
      }
      @media (max-width: 395px) {
        max-width: 380px;
        max-height: 380px;
      }
      @media (max-width: 375px) {
        max-width: 360px;
        max-height: 360px;
      }
      @media (max-width: 360px) {
        max-width: 340px;
        max-height: 340px;
      }
    }
    .content{
      min-width:500px;
      padding-left: 2rem;
      span.title{
        font-weight: bold;
        color: #333;
      }
      @media (max-width: 1180px) {
        min-width: 380px;
      }
      @media (max-width: 1024px) {
        min-width: 350px;
      }
      @media (max-width: 991px) {
        padding-left: 0;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      @media (max-width: 768px) {
        padding-left: 0;
        padding-top: 1rem;
      }
      @media (max-width: 575px) {
        padding-left: 1rem;
      }

      .copy_url_btn{
        font-size: 12px;
        border: none;
        background: rgb(78, 156, 85);
        color: #fff;
        border-radius: 3px;
        padding: .5rem 1rem;

        &:hover{
          background: rgb(159, 235, 165);
        }
      }
    }
  }

  .lightbox {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-btn-wrap {
      max-width: 95%;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        border: 4px solid #fff;
        max-height: 75vh;
        object-fit: contain;

        @media (min-width: 830px) {
          width: auto;
        }
      }

      .close-btn {
        background: #fff;
        border: none;
        padding: .5rem 0;

        &:hover {
          background: #ddd;
          color: #fff;
        }
      }
    }
  }
</style>
