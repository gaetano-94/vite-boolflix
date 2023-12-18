<script>
export default {
  name: 'Main',
  props: ['title', 'original_title', 'language', 'vote'],
};
</script>

<template>
  <main>
    <div>
      <h3>{{ title }}</h3>
      <h4>{{ original_title }}</h4>
      <h5 v-if="language === 'it'">
        <img src="../assets/img/OIP.jpg" alt="bandiera-italia" />
      </h5>
      <h5 v-else-if="language === 'en'">
        <img src="../assets/img/OIP (1).jpg" alt="bandiera inglese" />
      </h5>
      <h5 v-else>{{ language }}</h5>
      <h5>{{ vote }}</h5>
    </div>
  </main>
</template>

<style scoped lang="scss">
img {
  width: 25px;
  height: 25px;
  object-fit: cover;
}
</style>
