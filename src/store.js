import { reactive } from 'vue';
import apiConfig from './apiConfig';

export const store = reactive({
  movie: [],
  searchKet: '',
  apiConfig,
});
