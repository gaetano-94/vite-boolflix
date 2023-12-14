<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';
import axios from 'axios';
export default {
  name: 'Container',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    callApi() {
      axios.get(store.apiUrl).then((response) => {
        this.movies = response.data.results;
        console.log(response);
      });
    },
  },
  created() {
    this.callApi();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style scoped lang="scss"></style>
