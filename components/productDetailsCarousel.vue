<template>
  <v-row class="pr-3" no-gutters>
    <v-carousel
      class=""
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
  
    <div
      class="d-flex justify-center  mb-9 w-100"
    >
      <v-card
        variant="tonal"
        v-for="(img, index) in images"
        :key="index"
        class="mx-2"
      >
        <v-img :src="img" class="" width="50" height="50"></v-img>
      </v-card>
    </div>
  </v-row>
</template>

<script setup lang="ts">
defineProps(['images'])
let carouselModel = ref(2)
</script>

<style scoped>

</style>