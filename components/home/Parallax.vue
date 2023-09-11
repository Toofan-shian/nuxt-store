<template>
  <v-parallax src="/shirts.jpg" height="400">
    <v-row class="w-100 parallax-overlay h-100 flex-column justify-center align-center ma-0">
      <h2
        class=" px-2 text-center text-h4 text-white font-weight-black mb-3 text-sm-h3 text-md-h2 mb-md-6 text-lg-h1 parallax-font"
      >
        New Products Arrived
      </h2>

      <v-btn
        class="mt-2"
        elevation="3"
        variant="outlined"
        color="white"
        @click="$router.push('/products')"
      >
        check all products
      </v-btn>
    </v-row>
  </v-parallax>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;800;900&display=swap');
.parallax-font {
  font-family: 'Cinzel', serif !important;
}
.parallax-overlay {
  background-color: rgba(19, 19, 19, 0.568);
}
</style>