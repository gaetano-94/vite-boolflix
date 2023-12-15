import { reactive } from 'vue';
import config from './apiConfig';

export const store = reactive({
  movie: [],
  searchKet: '',
  apiConfig,
});
