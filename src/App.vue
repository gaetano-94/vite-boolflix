<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
export default {
  name: 'Container',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped lang="scss"></style>
