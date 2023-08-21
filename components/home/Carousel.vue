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
      :src="image"
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
            height: 47%;"
        >
          <h2
            class="text-h4 font-weight-bold text-center mb-8"
          >
            Men's Collection
          </h2>

          <v-btn
            class=""
            size="large"
            variant="outlined"
          >Shop now</v-btn>
        </div>

        
        <div
          v-else
          class="d-flex justify-center align-center flex-column"
          style="
            position: absolute;
            top: 29%;
            left: 48%;
            width: 41%;
            height: 47%;"
        >
          <h2
            class="text-h4 font-weight-bold text-center mb-8"
          >
            Women's Collection
          </h2>

          <v-btn
            size="large"
            variant="outlined"
          >Shop now</v-btn>
        </div>


      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
let images = ref([
          '/slide-22.jpg',
          '/slide-1.jpg',
        ])
</script>

<style scoped>


</style>