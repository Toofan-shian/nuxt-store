<template>
  <v-carousel
    hide-delimiter-background
    show-arrows="hover"
    class="carousel"
    height="auto"
    color="grey-darken-2"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="image"
      cover
      min-height="300"
      class=""
    > 
      <div
        class="h-100"
      >
        <div
          v-if="i == 0"
          class="d-flex justify-center align-center flex-column"
          style="
            position: absolute;
            top: 29%;
            right: 48%;
            width: 41%;
            height: 47%;
          "
        >
          <h2
            class="text-h6 text-center mb-1 text-sm-h4 text-md-h3 mb-md-3 text-lg-h2 mb-lg-6 text-xl-h"
          >
            Men's Collection
          </h2>

          <v-btn
            class=""
            :size="btnSize"
            variant="outlined"
            @click="$router.push('/products/?category=Mens Shirts')"
          >
            Shop now
          </v-btn>
        </div>

        
        <div
          v-else
          class="d-flex justify-center align-center flex-column"
          style="
            position: absolute;
            top: 29%;
            left: 48%;
            width: 41%;
            height: 47%;
          "
        >
          <h2
            class="text-h5 text-center mb-1 text-sm-h4 text-md-h3 mb-md-3 text-lg-h2 mb-lg-6 text-xl-h"
          >
            Women's Collection
          </h2>

          <v-btn
            :size="btnSize"
            variant="outlined"
            @click="$router.push('/products/?category=Womens Dresses')"
          >Shop now</v-btn>
        </div>


      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import {useDisplay} from 'vuetify'

let display = useDisplay()

let images = ref([
          '/slide-22.jpg',
          '/slide-1.jpg',
        ])
let btnSize = computed(() => {
  switch (display.name.value) {
    case 'xs':
      return 'x-small'

    case 'sm':
      return 'small'

    case 'md':
      return 'large'

    case 'lg': 
      return 'x-large'

    default:
      break;
  }
})
</script>

<style scoped>


</style>