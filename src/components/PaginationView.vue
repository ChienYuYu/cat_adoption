<template>
  <div class="mb-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{disabled: pageIndex === 0}">
          <a class="page-link" href="#"
          @click.prevent="switchPage('previous');goSelectAarea()">上一頁</a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">{{ currentPage }} / {{ totalPage }}</a>
        </li>
        <li class="page-item" :class="{disabled: pageIndex + 1 === totalPage}">
          <a class="page-link" href="#"
          @click.prevent="switchPage('next');goSelectAarea()">下一頁</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- ---------------------------------------- -->
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup(_, { emit }) {
    const store = useStore();

    const totalPage = computed(() => {
      store.commit('countPage');
      return store.state.totalPage;
    });
    const currentPage = computed(() => store.state.pageIndex + 1);
    const pageIndex = computed(() => store.state.pageIndex);

    function switchPage(calc) {
      store.commit('switchPage', calc);
    }
    function goSelectAarea() {
      emit('goSelectAarea');
    }

    return {
      totalPage, currentPage, pageIndex, switchPage, goSelectAarea,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
