<template>
  <v-row class="pr-3 mt-sm-9 mt-md-0" no-gutters>
    <v-carousel
      class="px-3 px-sm-0"
      :show-arrows="false"
      :model-value="carouselModel"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(img, index) in images"  
        :key="index"
        class=""
        
      >
        <v-img
          :src="img"
          class="w-100 h-100"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
  
    <div
      class="d-flex justify-center mt-8  mb-9 w-100"
    >
      <v-card
        variant="tonal"
        v-for="(img, index) in images"
        :key="index"
        class="mx-2 elevation-1"
        @click="carouselModel = index"
        hover
        
      >
        <v-img :src="img" class="" width="50" height="50"></v-img>
      </v-card>
    </div>
  </v-row>
</template>

<script setup lang="ts">
import {useDisplay} from 'vuetify'

let display = useDisplay()
defineProps(['images'])
let carouselModel = ref()


</script>

<style scoped>
/* .x-small-carousel {
  max-height: 440px;
}
.small-carousel {
  height: 500px;
  max-height: 900px;
}
.md-carousel {
  height: 900px;
  max-height: 900px;
} */
</style>