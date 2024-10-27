<template>
  <router-view/>
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
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.state.isLoading);
    return { isLoading };
  },
};
</script>

<style lang="scss">
@import 'bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700&display=swap');

*{
  font-family: 'Noto Sans TC', sans-serif;
}

.loading {
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
.spinner-grow {
  border: 3px solid #fff;
  margin: 0.25rem;
}

</style>
