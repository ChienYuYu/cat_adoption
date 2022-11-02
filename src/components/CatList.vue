<template>
  <div class="cat-list container mb-5">
    <div class="row mb-5 g-3">

      <div class="col-12 col-lg-6" v-for="c in showData" :key="c.animal_id">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <!-- <img :src="c.album_file" class="img-fluid rounded-start" alt="cat pic"> -->
              <a class="text-decoration-none" :href="c.album_file" target="_blank">
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
                  {{ c.animal_colour }}貓咪 性別：{{ sexDataTransform(c.animal_sex)}}
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
</template>

<script>
// https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL
export default {
  computed: {
    showData() {
      return this.$store.getters.showData;
    },
  },
  methods: {
    sexDataTransform(sex) {
      if (sex === 'M') {
        return '公';
      }
      if (sex === 'F') {
        return '母';
      }
      return '不明';
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    height: 280px;
    overflow: hidden;
      img{
      height: 280px;
      object-fit: cover;
      position: relative;
    }
    img:before {
      content:'這隻喵喵的照片無法載入!!';
      display: block;
      background: #f66;
      color: #fff;
      padding: .25rem;
      margin-bottom: .25rem;
      font-size: 14px;
    }
    img:after{
      content:'(=ↀωↀ=)';
      display: block;
      position: absolute;
      top: 28px;
      left: 0;
      padding: .25rem;
      width: 100%;
      background: #333;
      color: #fff;
      text-align: center;
    }
  }
  @media (max-width: 830px) {
    .card{
      height: auto;
      img{
        height: 100%;
      }
    }
  }
</style>
