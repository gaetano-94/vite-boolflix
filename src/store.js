import { reactive } from 'vue';

export const store = reactive({
  movie: [],
  searchText: '',
  apiUrl:
    'https://api.themoviedb.org/3/search/movie?api_key=c8ff7934cac6aca1fefd5659bcaab7ff&query=ritorno+al+futuro',
});
