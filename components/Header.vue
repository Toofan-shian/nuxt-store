<template>
  <v-app-bar
    class=""
    elevation="3"
    height="78"
  >
    <div
      class="header-title text-h6  h-100 px-5 px-sm-6 d-flex align-center "
      @click="$router.push('/')"

      v-ripple
    >
      Nuxify Shop
    </div>

    <!-- <span class="text-body-2">
      {{ display.name }}
    </span> -->

    <v-spacer></v-spacer>

    <v-toolbar-items
      class=""
    >
      <v-btn
        class="font-weight-bold rounded-lg"
        color="grey-darken-3"
        text="Products"
        @click="$router.push('/products')"
      ></v-btn>
  
      <!-- CART -->
      <v-btn
        stacked
        icon="mdi-cart-outline"
        class="icon"
        @click="$router.push('/cart')"
      > 
        <v-badge v-if="cartItemsCount != 0" :content="cartItemsCount" color="error" class="ma-0 pa-0">
          <v-icon class="pa-0">mdi-cart-outline</v-icon>
        </v-badge>
  
        <v-icon v-else class="pa-0">mdi-cart-outline</v-icon>
        
      </v-btn>
    </v-toolbar-items>

  </v-app-bar>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import {useDisplay} from 'vuetify'

let display = useDisplay()

let cartStore = useCartStore()

const cartItemsCount = computed(() => {
  return cartStore.getCartInfo.count;
});

</script>

<style scoped>
.header-title {
  cursor: pointer;
}
.header-title:hover{
  background-color: rgb(241, 241, 241);
}
</style>