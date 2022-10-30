<template>
  <div>
    ddddddddd
  </div>
</template>

<script>
// https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$filter=animal_id=280467&animal_subid=AAADG2022103002

// https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_subid=EAAAG1111018004
export default {
  mounted() {
    this.axios.get('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_subid=EAAAG1111018004')
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style lang="scss" scoped>

</style>
