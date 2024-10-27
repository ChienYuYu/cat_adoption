<template>
  <div class="cat-list container mb-5">
    <div class="row mb-5 g-3">
      <div class="col-12 col-lg-6" v-for="(c) in showData" :key="c.animal_id">
        <div class="card mb-3" data-aos="fade-up" data-aos-once="true"
          @click="goCatInfoPage(c)" @keydown="goCatInfoPage()">
          <div class="row g-0">
            <div class="col-md-4">
            <img :src="c.album_file" class="img-fluid rounded-start" alt="cat pic">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="mb-0 p-1">
                  {{ c.animal_colour }}貓咪 性別：{{ sexDataTransform(c.animal_sex) }}
                </h5>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">流水編號：{{ c.animal_id }}</small>
                </p>
                <p class="card-text mb-0 p-1">
                  <small class="text-muted">收容編號：{{ c.animal_subid }}</small>
                </p>
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
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
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

    function goCatInfoPage(cat) {
      console.log('cat obj==>', cat);
      router.push(`/cat_info/${cat.animal_id}`);
    }

    return {
      showData, sexDataTransform, goCatInfoPage,
    };
  },

};
</script>

<style lang="scss" scoped>
.card {
  height: 280px;
  overflow: hidden;
  // background: #000;
  &:hover{
    background:#eeeeee60;
    cursor: pointer;
  }

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
}

</style>
