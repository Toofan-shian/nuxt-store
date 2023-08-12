<template>
  <v-container class="">
    <v-row class="mt-3">
      <v-sheet
      class="mx-auto mt-4 mb-7 rounded-xl d-flex flex-column justify-center align-center "
      elevation="9"
      height="128"
      width="100%"
      >
        <h1 class=" text-h3  text-center align " >Cart Items</h1>
      </v-sheet>
    </v-row>

    <v-row class="">
      <v-sheet
        class=" rounded-xl pa-6"
        elevation="9"
        width="100%"
      >
        <v-row>
          <v-col
            cols="8"
            class=""
          >
            <cartItem v-for="(product, index) in products" :key="index" :product="product"></cartItem>
          </v-col>
    
          <v-col
            cols="4"
          >

            <Checkout></Checkout>
          </v-col>
        </v-row>
      </v-sheet>
    </v-row>
    
  </v-container>
</template>

<script setup lang="ts">
import {useCartStore} from '../stores/cart'

let store = useCartStore()
let products = ref([])
let totalPrice = ref(0)
let itemsCount = ref(0)


if (store.getCartItems) {
  products.value = store.getCartItems
}

</script>

<style scoped>

</style>