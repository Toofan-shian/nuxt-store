<template>
  <v-card
    class="cartItem mb-6 elevation-1"
    hover
  >
    <v-row>

      <!-- IMAGE -->
      <v-col cols="4">
        <v-img :src="product.thumbnail" class="" height="150" cover>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="gray lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>

      <!-- CONTENT -->
      <v-col
        cols="8"
        class="d-flex flex-column justify-space-around"
      >
        <v-card-title class="pa-0">{{ product.title }}</v-card-title>

        <v-card-subtitle class="pa-0 mt-n5">${{ product.price }}</v-card-subtitle>

        <v-card-actions class="pa-0 mr-3 mb-n1">
           <span class="text-subtitle-2 mr-2">Qty:</span>
           <v-btn
              class="ma-0 "
              style="min-width:1px;"
              density="compact"
              variant="outlined"
            >
            <v-icon class="pa-0 ma-0">mdi-plus</v-icon>
           </v-btn>
           <span class="pa-0 mx-3">{{ product.quantity }}</span>
           <v-btn
              class="ma-0 "
              style="min-width:1px;"
              density="compact"
              variant="outlined"
            >
            <v-icon>mdi-minus</v-icon>
           </v-btn>

           <v-spacer></v-spacer>

           <v-btn
            class="ma-0"
            size="small"
            variant="plain"
            color="red-lighten-2"
            @click="removeProduct"
            >
              remove
            </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const props = defineProps(['product'])
const cartStore = useCartStore()

let removeProduct = () => {
  console.log('removing id :', props.product.id)
  cartStore.remove(props.product.id)
}
</script>

<style scoped>
.cartItem {
  border: 1px solid rgb(189, 189, 189);
  border-radius: 12px;
}
</style>