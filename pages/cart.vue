<template>
  <v-container class="my-6 px-sm-10 px-md-8">
    <v-row class="">
      <v-col
        class=""
        cols="12"
        lg="10"
        offset-lg="1"
        xl="8"
        offset-xl="2"
      >
        <v-sheet
          class=" rounded-xl pt-6 pb-13 px-6 px-sm-12 px-md-6 px-lg-16"
          width="100%"
          :class="{'border': display.smAndUp.value}"
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
            <!-- placeholder -->
            <v-col
              v-if="products.length == 0"
              cols="12"
  
              class="d-flex flex-column justify-center align-center mb-8"
            >
              <h3
                class="text-h5 text-center mt-1"
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
              cols="12"
              md="8"
              class=""
            >
              <cartItem v-for="(product, index) in products" :key="index" :product="product"></cartItem>
            </v-col>
            
            <!-- CHECKOUT -->
            <v-col
              cols="12"
              md="4"
            >
              <cartCheckout></cartCheckout>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script setup lang="ts">
import {useCartStore} from '../stores/cart'
import {useDisplay} from 'vuetify'

let display = useDisplay()

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