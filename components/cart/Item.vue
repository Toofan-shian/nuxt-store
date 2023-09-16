<template>
  <v-card
    class="cartItem mb-6 elevation-1"
  >
    <v-row>

      <!-- IMAGE -->
      <v-col
        cols="4"
      >
        <v-img :src="product.thumb" class="">
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
        <v-card-title class="pa-0 pr-4">{{ product.title }}</v-card-title>

        <v-card-subtitle
          class="pa-0 mt-n3 mt-sm-n9 mt-xl-n16"
        >
          ${{ product.price }}
        </v-card-subtitle>

        <v-card-actions class="pa-0 mr-3 mb-n1">

          <span class="text-subtitle-2 mr-2">Qty:</span>

          <v-btn
            class="ma-0 "
            style="min-width:1px;"
            size="small"
            :variant="display.xs.value ? 'plain' : 'outlined'"
            @click="() => changeQty(-1)"
          >
            <v-icon class="pa-0 ma-0">mdi-minus</v-icon>
          </v-btn>
          
          <span class="pa-0 mx-3">{{ product.quantity }}</span>
          
          <v-btn
            class="ma-0 "
            style="min-width:1px;"
            size="small"
            :variant="display.xs.value ? 'plain' : 'outlined'"
            @click="() => changeQty(1)"
          >
            <v-icon class="">mdi-plus</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            class="ma-0"
            :size="display.xs.value ? 'x-small' : 'small'"
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
import {useDisplay} from 'vuetify'

let display = useDisplay()
const props = defineProps(['product'])
const cartStore = useCartStore()

let removeProduct = () => {
  cartStore.remove(props.product.id)
}

let changeQty = (number) => {
 cartStore.changeQty(props.product.id, number)
}


</script>

<style scoped>
.cartItem {
  border: 1px solid rgb(189, 189, 189);
  border-radius: 12px;
}
</style>