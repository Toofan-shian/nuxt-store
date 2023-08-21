<template>
  <div>
    <homeCarousel/>

    <homeProductslide>
      <template v-slot:action>
        view all women's products
      </template>
      <template v-slot:title>
        women's clothing
      </template>
    </homeProductslide>

    <homeParallax/>

    <homeProductslide>
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