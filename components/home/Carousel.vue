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
      min-height="240"
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
            top: 12%;
            right: 28%;
            width: 70%;
            height: 67%;
          "
        >
          <h2
            class="text-h4 text-center mb-2 text-sm-h4 mb-sm-3 text-md-h2 mb-md-4 text-lg-h2 mb-lg-6 text-xl-h"
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
            top: 12%;
            right: 1%;
            width: 70%;
            height: 67%;
          "
        >
          <h2
            class="text-h4 text-center mb-2 text-sm-h4 mb-sm-3 text-md-h2 mb-md-4 text-lg-h2 mb-lg-6 text-xl-h"
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
          '/man.jpg',
          '/woman.jpg',
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

      case 'xl': 
      return 'x-large'
      
    default:
      break;
  }
})
</script>

<style scoped>


</style>