<template>
  <div class="cat-list container mb-5">
    <div class="row mb-5 g-3">
      <div class="col-12 col-lg-6" v-for="(c, index) in showData" :key="c.animal_id">
        <div class="card mb-3" data-aos="fade-up" data-aos-once="true">
          <div class="row g-0">
            <div class="col-md-4">
              <a class="text-decoration-none" href="#"
              @click.prevent="openAndCloseLightBox(true, index)">
                <img :src="c.album_file" class="img-fluid rounded-start" alt="cat pic">
              </a>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">流水編號：{{ c.animal_id }}</small>
                </p>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">區域編號：{{ c.animal_subid }}</small>
                </p>
                <h5 class="mb-0 p-1">
                  {{ c.animal_colour }}貓咪 性別：{{ sexDataTransform(c.animal_sex) }}
                </h5>
                <p class="card-text mb-0 p-1">{{ c.shelter_name }}</p>
                <p class="card-text mb-0 p-1">{{ c.shelter_address }}</p>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">電話：{{ c.shelter_tel }}</small>
                </p>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">更新日期：{{ c.cDate }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
  <div class="lightbox bg-dark bg-opacity-75" v-if="lightbox">
    <div class="img-btn-wrap">
      <img :src="lightboxImg" alt="cat pic">
      <button class="close-btn " @click="openAndCloseLightBox(false)">close</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const lightbox = ref(false);
    const lightboxImg = ref('');

    const showData = computed(() => store.getters.showData);

    function sexDataTransform(sex) {
      if (sex === 'M') {
        return '公';
      }
      if (sex === 'F') {
        return '母';
      }
      return '不明';
    }

    function openAndCloseLightBox(tf, i) {
      lightbox.value = tf;
      if (tf === true) {
        // lightboxImg.value = showData[i].album_file;
        lightboxImg.value = showData.value[i].album_file; // ???
      }
    }

    return {
      lightbox, lightboxImg, showData, sexDataTransform, openAndCloseLightBox,
    };
  },

};
</script>

<style lang="scss" scoped>
.card {
  height: 280px;
  overflow: hidden;

  @media (max-width: 830px) {
    height: auto;
  }

  img {
    min-width: 100%;
    height: 280px;
    object-fit: cover;
    position: relative;
  }

  img:before {
    content: '喵喵照片無法載入，可能是收容所無提供照片';
    display: block;
    background: #f66;
    color: #fff;
    padding: .25rem .25rem;
    font-size: 14px;
    text-align: center;
  }

  // img:after{
  //   content:'(=ↀωↀ=)';
  //   display: block;
  //   position: absolute;
  //   top: 28px;
  //   left: 0;
  //   padding: 1rem;
  //   width: 100%;
  //   background: #333;
  //   color: #fff;
  //   text-align: center;
  // }
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

      @media (min-width: 830px) {
        width: 30vw;
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
