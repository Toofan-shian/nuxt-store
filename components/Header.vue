<template>
  <v-app-bar
    class=""
    elevation="3"
    height="70"
  >


    <div
      class="header-title text-h6  h-100 px-4 d-flex align-center ml-6 v-ripple"
      @click="$router.push('/')"
      v-ripple
    >
      Nuxify Shop
    </div>

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

let cartStore = useCartStore()

const cartItemsCount = computed(() => {
  return cartStore.getCartInfo.count;
});

</script>

<style lang="scss" scoped>
.header-title {
  cursor: pointer;
}
</style>