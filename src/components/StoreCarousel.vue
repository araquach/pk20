<template>
  <b-carousel :indicator-inside="true">
    <b-carousel-item v-for="(item, i) in banners" :key="i">
      <a :href="item.url"><b-image class="image" :src="`/dist/img/store/banners/${item.image}`"></b-image></a>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  props: ['banners'],
}
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>