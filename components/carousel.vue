<template>
  <v-carousel
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
    > 
      <div class="bg-grey w-100 h-100"></div>
      <!-- <v-img class="w-100 h-100" :src="image" cover></v-img> -->
      <!-- <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
let images = ref([
          '/mens-cloth.png',
          '/womens-shoes.png',
          '/mens-shoes.png',
          '/womens-cloth.png',
        ])
</script>