<template>
  <v-card class="card-border elevation-1" flat>
    
    <v-card-title
      class="text-center pt-3 pb-5 text-h5"
    >Order Info
    </v-card-title>

    <v-card-text>
      <v-container class="pa-0">

        <v-row class=" justify-space-between px-1 py-1" no-gutters>
          <span>
            Items
            <span class="text-caption">({{ itemsCount }})</span>
          </span>
          <span>
            ${{ totalPrice }}
          </span>
        </v-row>
        
        <v-row class=" justify-space-between px-1 py-1" no-gutters>
          <span>
            Shipping
          </span>
          <span>
            Free
          </span>
        </v-row>
        
        <v-row class=" justify-space-between px-1 py-1 pb-4" no-gutters>
          <span>
            Discounts
          </span>
          <span>
            $0
          </span>
        </v-row>
  
        <v-divider class="pb-0 border-opacity-25"></v-divider>
        
        <v-row class=" justify-space-between px-1 pt-3  text-h5" no-gutters>
          <span>
            Subtotal
          </span>
          <span>
            ${{totalPrice}}
          </span>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions class="px-4 pb-4">
      <v-btn
        :disabled="itemsCount == 0"
        class=" block bg-success rounded-lg w-100 text-capitalize text-subtitle-1 mx-auto"
        style="max-width: 450px;"
        @click="dialog = !dialog"
        >
        checkout
      </v-btn>
    </v-card-actions>
    
    <v-dialog
      v-model="dialog"
    >
      <div
        class="d-flex h-100 w-100 justify-center align-center"
      >
        <v-card
          class="bg-grey-darken-3 mt-n16 py-8 rounded-lg   px-md-10"
        >
          <v-card-title
            class=""
          >
            <h2
              class="text-center text-h5 text-md-h4 text-lg-h3 text-wrap"
            >
              Thanks for checking out my website
            </h2>
          </v-card-title>
        </v-card>
        
      </div>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { ref, watch } from 'vue'


let dialog = ref(false)

let cartStore = useCartStore()

let itemsCount = ref(cartStore.getCartInfo.count)
let totalPrice = ref(cartStore.getCartInfo.subTotal)

watch(() => cartStore.getCartInfo, (newCartInfo) => {
  itemsCount.value = newCartInfo.count
  totalPrice.value = newCartInfo.subTotal
})
</script>

<style scoped>

</style>