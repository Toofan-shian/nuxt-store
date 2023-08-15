<template>
  <v-container class="mt-12 justify-center">
    <v-row
      v-if="!product"
    >
      Loading...
    </v-row>

    <v-row v-else class="" no-gutters>
      <v-sheet
        elevation="2"
        rounded
        class="w-100 pa-11 rounded-lg "
      >
        <v-row>
          <v-col
            cols="7"
            class=""
          >
            <productDetailsCarousel :images="product.images" />
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
            >${{ product.price }}</p>
    
            <p
              class="mt-8"
            >
              {{ product.description }}
            </p>
    
            <v-btn
              class="mt-8 rounded-lg"
              color="success"
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
  {title: 'lkj', text: "sdflsdfjlsdkfjsldkfjlsdkfjlskfj"},
  {title: 'lkj', text: "sdflsdfjlsdkfjsldkfjlsdkfjlskfj"},
  {title: 'lkj', text: "sdflsdfjlsdkfjsldkfjlsdkfjlskfj"},
]

let store = useCartStore()
let product = store.getProductById(id)





</script>

<style scoped>

</style>