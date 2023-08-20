<template>
  <v-sheet class="">
    <v-row
      class="flex-column pr-10"
      no-gutters
    >
      <!-- PRICE -->
      <div class="pb-8">
        <h4 class="text-center text-h6">Filter Price</h4>
        <v-range-slider
          v-model="PriceRange"
          strict
          :min="150"
          :max="1800"
          color="grey-darken-2"
          persistent-hint
          thumb-size="12"
          track-size="2"
          :step="10"
          :hint="`From $${PriceRange[0]} To $${PriceRange[1]}`"
        ></v-range-slider>
      </div>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">

let PriceRange = ref([150, 550])

let selectCategory = ref('All Products')
let categoryItems = ref([
  {title: "All Products", value: "ap"},
  {title: "Women's Dress", value: 'wd'},
  {title: "women's Shoes", value: 'ws'},
  {title: "Men's Shirts", value: 'mshirts'},
  {title: "Men's Shoes", value: 'mshoes'}
])

</script>

<style scoped>

</style>