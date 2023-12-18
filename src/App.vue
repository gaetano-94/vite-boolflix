<script>
import { store } from './store';
import axios from 'axios';
export default {
  name: 'Container',
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      //ricerca film
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
    },
  },
};
</script>

<template>
  <div class="container d-flex justify-content-between align-items-center my-3">
    <div>logo</div>
    <div>
      <form @submit.prevent="search">
        <label for="search">Search</label>
        <input type="text" id="search" v-model="store.searchKey" />
        <button class="mx-2">Search</button>
      </form>
    </div>
  </div>

  <ul>
    <li v-for="movie in store.movies">
      <div>
        <h3>{{ movie.title }}</h3>
        <h4>{{ movie.original_title }}</h4>
        <h5>{{ movie.original_language }}</h5>
        <h5>{{ movie.vote_average }}</h5>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>
