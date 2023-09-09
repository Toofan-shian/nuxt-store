<template>
  <v-container class="h-100 justify-center align-center d-flex mb-16">
    <v-row
      v-if="!product"
    >
      Loading...
    </v-row>

    <v-row v-else class="align-center d-flex justify-center" no-gutters>
      <v-sheet
        elevation="2"
        rounded
        class="w-100 h-100 pa-11 rounded-lg "
      >
        <v-row no-gutters>
          <v-col
            cols="7"
            class=""
          >
            <productsDetailsCarousel
              :images="product.images"
            />
          </v-col>
    
          <v-col
            cols="5"
            class="d-flex flex-column pl-5"
          >
            <h3
              class="text-h3 mt-4 "
            >
              {{ product.title }}
            </h3>
    
            <p
              class="text-h6 mt-2"
            >${{ product.price }}
            </p>
    
            <p
              class="mt-8"
            >
              {{ product.description }}
            </p>
    
            <v-btn
              class="mt-8 rounded-lg"
              color="success"
              @click="() => addToCart(id)"
            >Add to cart</v-btn>

            <v-expansion-panels
              class="mt-8 border rounded-lg"
            >
              <v-expansion-panel
                class="w-100"
                elevation="0"
                v-for="(panel, index) in expansionPanels"
                :key="index"
                :title="panel.title"
                :text="panel.text"
              >
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {useCartStore} from '@/stores/cart'
let {id} = useRoute().params

let expansionPanels = [
  {title: 'Money-back Guarantee', text: "You can return the product if there was any problem, and get your money back in 24 hours"},
  {title: 'Safe Transactions', text: "We are using a p2p connection for the checkout process to ensure a secure purchase"},
]

let store = useCartStore()
let product = store.getProductById(id)

let addToCart = (id) => {
  store.add(id)
}





</script>

<style scoped>

</style>