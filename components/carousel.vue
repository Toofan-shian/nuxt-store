<template>
  <v-carousel
    hide-delimiter-background
    show-arrows="hover"
    class="carousel"
    height="auto"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
    > 
      <v-img class="" :src="image" cover></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
let images = ref([
          '/slide-1.jpg',
          '/slide-22.jpg',
        ])
</script>

<style>


</style>