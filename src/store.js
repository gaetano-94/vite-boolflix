import { reactive } from 'vue';
import apiConfig from './apiConfig';

export const store = reactive({
  movies: [],
  searchKey: '',
  searchLanguage: 'it-IT',
  apiConfig,
});
