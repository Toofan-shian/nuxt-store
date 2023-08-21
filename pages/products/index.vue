<template>
  <v-container class="mt-10">
    <v-sheet
      class="px-10 rounded-lg pb-14"
      elevation="1"
    >
      <productsHeader></productsHeader>
      <v-row class="mt-0" no-gutters> 

        <!-- products -->
        <v-col cols="12" class="">


          <!-- lOADING... -->
          <v-row v-if="!products.length" class="mt-8">
            <v-col cols="12">
              <h3 class="text-center">Loading...</h3>
            </v-col>
          </v-row>


          <div v-else>
            <v-row
              v-show="grid"
              class=""
            >
              <v-col
                v-for="(product, index) in products"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <ProductsSingleGrid
                  :product="product"
                  class=""
                />
              </v-col>
            </v-row>

            <v-row
              v-show="!grid"
              v-for="(product, index) in products"
              :key="index"
              class="rounded-lg mb-7 mx-16"
              no-gutters
            >
              <ProductsSingleList
                :product="product"
                class=""
              />
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">

import {useCartStore} from '@/stores/cart'

let products = ref([])

let cartStore = useCartStore()
cartStore.fetchProducts()
  .then(() => {
  products.value = cartStore.getAllProducts
  console.log('products injected')
  })

</script>

<style scoped>

</style>