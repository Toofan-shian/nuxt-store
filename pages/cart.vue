<template>
  <v-container class="mt-14">
    <v-row class="">
      <v-sheet
        class=" rounded-xl pt-6 pb-13 px-10"
        elevation="1"
        width="100%"
      >
        <v-row class="mt-2">
          <div
            class="mb-7 mx-auto"
            width="100%"
          >
            <h1 class="cart-title text-h3  text-center" >Cart Items</h1>
          </div>
        </v-row>

        <v-divider
          :thickness="2"
          class="mx-9 border-opacity-25 mb-10"
          color="grey-lighten-2"
        ></v-divider>

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
            <cartCheckout></cartCheckout>
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
watch(store.cartContent, () => products.value = store.cartContent) 

</script>

<style scoped>
.cart-title {
}
</style>