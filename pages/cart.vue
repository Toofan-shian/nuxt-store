<template>
  <v-container class="mt-14">
    <v-row class="">
      <v-sheet
        class=" rounded-xl pt-6 pb-13 px-10"
        elevation="1"
        width="100%"
      >

        <!-- TITLE -->
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
        
        <!-- CONTENT -->
        <v-row>

          <!-- PRODUCTS -->
          <v-col
            v-if="products.length == 0"
            cols="8"
            class="d-flex flex-column justify-start align-center"
          >
            <h3
              class="text-h5 mt-1"
            >
              There is no products in your cart
            </h3>
            <v-btn
              class="mt-4"
              color="green"
              variant="outlined"
              @click="$router.push('/products')"
            >
              explore products
            </v-btn>
          </v-col>

          <v-col
            v-else
            cols="8"
            class=""
          >
            <cartItem v-for="(product, index) in products" :key="index" :product="product"></cartItem>
          </v-col>
          
          <!-- CHECKOUT -->
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


let cartStore = useCartStore()
let products = ref([])


if (cartStore.getCartItems) {
  products.value = cartStore.getCartItems
}



</script>

<style scoped>
.cart-title {
}
</style>