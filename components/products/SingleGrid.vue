<template>
  <v-card
    class="product-card-grid w-100 pb-2"
    :to="`/products/${product.id}`"
  >
    <v-img :src="product.thumb" class="" height="333" cover>
      <template v-slot:placeholder>
        <v-row
          class="h-100 d-flex align-center justify-center ma-0"
        >
          <v-progress-circular
            indeterminate
            color="gray lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title
      class="text-capitalize"
    >
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle class="mt-n3">
      ${{ product.price }}
    </v-card-subtitle>

    <v-card-text
      class='card-text text-truncate'
    >
      {{ product.description }}
    </v-card-text>

    <v-card-actions
      class="px-3"
    >
      <v-btn
        @click.prevent="addToCart"
        color="green-darken-2"
        variant="outlined"
        class="w-100"
      >
        add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import {useCartStore} from '@/stores/cart'
let props = defineProps(['product'])

let cartStore = useCartStore()

let addToCart = () => {
  cartStore.add(props.product.id)
}
</script>

<style scoped>
.product-card-grid {
  /* max-width: 250px; */
  border: 1px solid rgb(189, 189, 189);
  border-radius: 12px;
}
.card-text {
  height: 3rem;
}
</style>