<template>
  <v-app-bar
    class="pa-2"
    elevation="3"
  >

    <v-toolbar-title
      @click="$router.push('/')"
      class="header-title"
    >
      <div
        style="display: inline-block;"
        v-ripple
        class="px-2 rounded-lg py-3"
      >
        Nuxify Shop
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

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
      <v-badge :content="cartItemsCount" color="error" class="ma-0 pa-0">
        <v-icon class="pa-0">mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>

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