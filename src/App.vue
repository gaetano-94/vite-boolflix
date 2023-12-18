<script>
import { store } from './store';
import axios from 'axios';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Container',
  components: {
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      //ricerca Film
      axios
        .get(store.apiConfig.apiMoviesUrl, {
          params: {
            api_key: store.apiConfig.apiKey,
            query: store.searchKey,
            language: store.searchLanguage,
          },
        })
        .then((response) => {
          console.log(response);
          this.store.movies = response.data.results;
        })
        .catch((error) => {
          console.log(error.message);
          this.store.movies = [];
        });

      // ricersa serie TV
      axios
        .get(store.apiConfig.apiSeriesUrl, {
          params: {
            api_key: store.apiConfig.apiKey,
            query: store.searchKey,
            language: store.searchLanguage,
          },
        })
        .then((response) => {
          console.log(response);
          this.store.tvs = response.data.results;
        })
        .catch((error) => {
          console.log(error.message);
          this.store.tvs = [];
        });
    },
  },
};
</script>

<template>
  <!-- input piu bottone ricerca -->
  <div class="container d-flex justify-content-between align-items-center my-3">
    <div>logo</div>
    <div>
      <form @submit.prevent="search">
        <label for="search"><strong>Search</strong></label>
        <input type="text" id="search" v-model="store.searchKey" class="ms-2" />
        <button class="mx-2">Search</button>
      </form>
    </div>
  </div>
  <!-- /input piu bottone ricerca -->

  <div class="container d-flex justify-content-around mt-5">
    <!-- ciclo for su film -->
    <div>
      <h2 class="mb-3"><strong>Movies</strong></h2>
      <ul>
        <li v-for="movie in store.movies">
          <AppMain
            :title="movie.title"
            :original_title="movie.original_title"
            :language="movie.original_language"
            :vote="movie.vote_average"
          />
        </li>
      </ul>
    </div>
    <!-- /ciclo for su film -->

    <!-- ciclo for su serie tv -->
    <div>
      <h2 class="mb-3"><strong>TV</strong></h2>
      <ul>
        <li v-for="tv in store.tvs">
          <AppMain
            :title="tv.name"
            :original_title="tv.original_name"
            :language="tv.original_language"
            :vote="tv.vote_average"
          />
        </li>
      </ul>
    </div>
    <!-- /ciclo for su serie tv -->
  </div>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>
