<template>
 <div class="container p-2 mb-5">
  <div class="row justify-content-center">
    <div class="col-2">
      <select class="form-select" aria-label="Default select example">
        <option selected>請選擇縣市</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-2">
      <select class="form-select" aria-label="Default select example">
        <option selected>請選擇區域</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-2">
      <select class="form-select" aria-label="Default select example">
        <option selected>請選擇性別</option>
        <option value="1">公</option>
        <option value="2">母</option>
        <option value="3">不明</option>
      </select>
    </div>
  </div>
 </div>
</template>

<script>
// https://marsz.tw/blog/articles/411
// 縣市資料: https://demeter.5fpro.com/tw/zipcode/cities.json
export default {
  data() {
    return {
      city: '',
      dist: '',
      sex: '',
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
