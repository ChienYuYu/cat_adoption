<template>
  <div class="mb-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{disabled: currentPage === 1}">
          <a class="page-link" href="#"
          @click.prevent="switchPage('previous');goSelectAarea()">上一頁</a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">{{ currentPage }} / {{ totalPage }}</a>
        </li>
        <li class="page-item" :class="{disabled: currentPage === totalPage}">
          <a class="page-link" href="#"
          @click.prevent="switchPage('next');goSelectAarea()">下一頁</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- ---------------------------------------- -->
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup(_, { emit }) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const page = ref(store.state.citySexPage.page);

    const totalPage = computed(() => {
      store.commit('countPage');
      return store.state.totalPage;
    });
    const currentPage = computed(() => store.state.citySexPage.page);

    // function switchPage(calc) {
    //   store.commit('switchPage', calc);
    // }
    function switchPage(calc) {
      if (calc === 'previous') {
        page.value = Number(page.value) - 1;
      }
      if (calc === 'next') {
        page.value = Number(page.value) + 1;
      }
      const { city } = route.query;
      const { sex } = route.query;

      router.push({
        query: {
          city,
          sex,
          page: page.value,
        },
      });
      // store.commit('switchPage', calc);
      store.commit('updateCitySexPage', {
        city,
        sex,
        page: page.value,
      });
    }

    watch(route, () => {
      page.value = route.query.page;
    });

    function goSelectAarea() {
      emit('goSelectAarea');
    }

    return {
      page, totalPage, currentPage, switchPage, goSelectAarea,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
