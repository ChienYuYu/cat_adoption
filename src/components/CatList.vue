<template>
  <div class="cat-list container mb-5">
    <div class="row mb-5 g-3">
      <div class="col-12 col-lg-6 every_cat_item" v-for="(c) in showData" :key="c.animal_id">
        <div class="card mb-3" data-aos="fade-up" data-aos-once="true">
          <div class="row g-0">
            <div class="col-md-4">
            <div class="alarm_mask" v-if="alarmHandler(c.animal_createtime)">
              根據資料建立日期判斷<br>此貓可能已在收容所多年
            </div>
            <img @click="showPicHandler(c.album_file)" @keydown="showPicHandler()"
              :src="c.album_file" class="img-fluid rounded-start" alt="cat pic">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="mb-0 p-1">
                  {{ c.animal_colour }}貓咪 性別：{{ sexDataTransform(c.animal_sex) }}
                </h5>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">資料建立日期：{{ c.animal_createtime }}</small>
                  <!-- &emsp;
                  <small class="text-muted">更新日期：{{ c.cDate }}</small> -->
                </p>
                <!-- <p class="card-text mb-0 p-1">
                  <small class="text-muted">更新日期：{{ c.cDate }}</small>
                </p> -->
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">流水編號：{{ c.animal_id }}</small>
                </p>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">收容編號：{{ c.animal_subid }}</small>
                </p>
                <!-- <p class="card-text mb-0 p-1">{{ c.shelter_name }}</p> -->
                <!-- <p class="card-text mb-0 p-1">{{ c.shelter_address }}</p> -->
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">{{ c.shelter_name }}</small>
                </p>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">{{ c.shelter_address }}</small>
                </p>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">電話：{{ c.shelter_tel }}</small>
                </p>
                <a href="#" class="go_info_btn" @click.prevent="goCatInfoPage(c)">
                  查看詳細資料
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition>
    <div class="lightbox bg-dark bg-opacity-75" v-if="lightbox"
      @click="closeLightBox()" @keydown="closeLightBox()">
    <div class="img-btn-wrap">
      <img :src="catPic" alt="cat pic">
      <p class="close-tip text-center">再次點擊螢幕可關閉</p>
    </div>
  </div>
  </transition>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    // const router = useRouter();
    const showData = computed(() => store.getters.showData);
    const lightbox = ref(false);
    const catPic = ref('');

    function sexDataTransform(sex) {
      if (sex === 'M') {
        return '公';
      }
      if (sex === 'F') {
        return '母';
      }
      return '不明';
    }

    function goCatInfoPage(cat) { // 開新分頁
      const url = `${window.location.href}cat_info/${cat.animal_id}`;
      window.open(url, '_blank');
    }

    function showPicHandler(pic) {
      catPic.value = pic;
      lightbox.value = true;
    }

    function closeLightBox() {
      lightbox.value = false;
    }

    function alarmHandler(dateString) {
      const catDataYear = new Date(dateString).getFullYear();
      const nowYear = new Date().getFullYear();
      console.log('catDataYear', catDataYear);
      console.log('nowYear', nowYear);
      if (nowYear - catDataYear >= 3) return true;
      return false;
    }

    return {
      showData,
      sexDataTransform,
      goCatInfoPage,
      lightbox,
      showPicHandler,
      closeLightBox,
      catPic,
      alarmHandler,
    };
  },

};
</script>

<style lang="scss" scoped>
.card {
  height: 280px;
  overflow: hidden;
  // background: #000;

  @media (max-width: 830px) {
    height: auto;
  }

  img {
    min-width: 100%;
    height: 280px;
    object-fit: cover;
    position: relative;
    @media (max-width: 575px) {
      min-height: 280px;
    }
  }

  img:before {
    // content: '喵喵照片無法載入，可能是收容所無提供照片';
    content: '照片無法載入，可能是網速影響或照片連結已掛掉';
    display: block;
    background: #f66;
    color: #fff;
    padding: .25rem .25rem;
    font-size: 14px;
    text-align: center;
  }

  a.go_info_btn{
    text-decoration: none;
    border: none;
    padding: .2rem 1rem;
    border-radius: 5px;
    background: rgb(250, 240, 128);
    color: #333;
    position: absolute;
    right: 3%;
    bottom: 5%;

    &:hover{
      background: rgb(209, 209, 203);
      color: #fff;
    }

    @media (max-width: 575px) {
      bottom: 3%;
    }
  }
}

.alarm_mask{
  position: absolute;
  top: 30%;
  right: 2%;
  color: #fff;
  z-index: 3;
  text-align: center;
  font-size: 14px;
  animation: neon 1s ease-in-out infinite;
  border-radius: 5px;
  padding: .3rem;
  box-shadow: 4px 4px 0px #aaa;

  @media (max-width: 1280px){
    font-size: 10px;
    right: 3%;
  }

  @media (max-width: 575px) {
    top: 60%;
    font-size: 10px;
    right: 3%;
  }
}

@keyframes neon {
  0%,
  100% {
    background: rgb(248, 65, 65);
  }
  50% {
    background: rgb(190, 35, 35);
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
    backdrop-filter: blur(5px);

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

      .close-tip {
        background: #fff;
        border: none;
        padding: .5rem 0;
      }
    }
  }

</style>
