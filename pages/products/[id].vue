<template>
  <v-container class="mt-12">
    <v-row
      v-if="!product"
    >
      Loading...
    </v-row>
    <v-row v-else>

      <v-col
        cols="7"
        class="border-r "
      >
        <productDetailsCarousel :images="product.images"/>
      </v-col>

      <v-col
        cols="5"
        class="border-r d-flex flex-column px-8"
      >
        <h3
          class="text-h3 "
        >
          {{ product.title }}
        </h3>

        <p
          class="text-h6"
        >${{ product.price }}</p>

        <p>
          {{ product.description }}
        </p>

        <v-btn
          class=""
          variant="outlined"
          color="primary"
        >Add to cart</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {useCartStore} from '@/stores/cart'
let {id} = useRoute().params

let store = useCartStore()
let product = store.getProductById(id)





</script>

<style scoped>

</style>