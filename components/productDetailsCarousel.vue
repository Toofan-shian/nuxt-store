<template>
  <v-carousel
    hide-delimiters
    :show-arrows="false"
    :model-value="carouselModel"
  >
    <v-carousel-item
      v-for="(img, index) in images"  
      :key="index"
      :src="img"
    >
      <!-- <v-img src="/43.png"></v-img> -->
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
defineProps(['images'])
let carouselModel = ref(2)
</script>

<style scoped>

</style>