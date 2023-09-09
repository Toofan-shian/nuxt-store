<template>
  <v-row class="pr-3 mt-sm-9 mt-md-0" no-gutters>
    <v-carousel
      class=""
      :show-arrows="false"
      :model-value="carouselModel"
      hide-delimiters
      :class="{'small-carousel': display.smAndUp.value, 'x-small-carousel': display.xs.value}"
    >
      <v-carousel-item
        v-for="(img, index) in images"  
        :key="index"
        class=""
        
      >
        <v-img
          :cover="display.mdAndUp.value"
          :class="{'small-carousel': display.smAndUp.value, 'x-small-carousel': display.xs.value}"
          :src="img"
          class="w-100 h-100 py-2"
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
.x-small-carousel {
  max-height: 350px;
}
.small-carousel {
  height: 430px;
  max-height: 430px;
}
</style>