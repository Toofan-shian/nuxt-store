<template>
  <v-parallax src="/8.jpg" height="400">
    <v-row class="w-100 parallax-overlay h-100 flex-column justify-center align-center ma-0">
      <h2
        class="text-h2 text-white font-weight-black pb-8"
      >
        New Products Arrived
      </h2>
      <v-btn
        class="mt-2"
        elevation="3"
        variant="outlined"
        color="white"
      >
        check all products
      </v-btn>
    </v-row>
  </v-parallax>
</template>

<script setup lang="ts">

</script>

<style scoped>
.parallax-overlay {
  background-color: rgba(19, 19, 19, 0.568);
}
</style>