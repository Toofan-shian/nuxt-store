<template>
  <v-carousel
    class="pr-3"
    :show-arrows="false"
    :model-value="carouselModel"
    hide-delimiters

  >
    <v-carousel-item
      v-for="(img, index) in images"  
      :key="index"
      class=""
    >
      <v-img :src="img" class="w-100 h-100" ></v-img>
    </v-carousel-item>
  </v-carousel>
  <carouselItemsRow :images="images"/>
</template>

<script setup lang="ts">
defineProps(['images'])
let carouselModel = ref(2)
</script>

<style scoped>

</style>