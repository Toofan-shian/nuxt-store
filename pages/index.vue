<template>
  <div>
    <homeCarousel/>

    <homeProductslide :category="'Womens Dresses'">
      <template v-slot:action>
        view all women's products
      </template>
      <template v-slot:title>
        women's clothing
      </template>
    </homeProductslide>

    <homeParallax/>

    <homeProductslide category="Mens Shirts">
      <template v-slot:action>
        view all men's products
      </template>
      <template v-slot:title>
        men's shirts
      </template>
    </homeProductslide>


  </div>
</template>



<script setup lang="ts">

</script>

<style scoped>

</style>