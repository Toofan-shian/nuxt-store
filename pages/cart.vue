<template>
  <v-container class="">
    <v-row class="">
      <h3 class="text-center text-h3 w-100 rb">Cart Items</h3>
    </v-row>

    <v-row class="gb">
      <v-col
        cols="8"
        class="rb"
      >
        <cartItem v-for="(product, index) in products" :key="index" :product="product"></cartItem>
      </v-col>

      <v-col
        cols="4"
      >
        checkout
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {useCartStore} from '../stores/cart'

let store = useCartStore()
let products = ref([])

if (store.getCartItems) {
  products.value = store.getCartItems
}

</script>

<style scoped>

</style>