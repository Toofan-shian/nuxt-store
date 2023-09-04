<template>
  <v-container
    class="py-10"
  >
    <v-row class="">
      <v-col cols="12">
        <!-- TITLE -->
        <h1 class="text-center text-h3 font-waight-black py-9 text-capitalize">
          <slot name="title"></slot>
        </h1>
  
        <!-- PRODUCTS SLIDER-->
        <v-sheet
          elevation="1"
          class="py-9 rounded-lg"
        >
          <v-slide-group
            class="slider"
            show-arrows
            center-active
            
          >
            <v-slide-group-item
              v-for="(p, index) in products"
              :key="index"
            >
              <div class="mx-4">
                <HomeSingleProduct :product="p" class=""></HomeSingleProduct >
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
  
  
        <!-- ACTION -->
        <div class="d-flex justify-center py-7 my-2">
          <v-btn
            elevation="1"
            variant="outlined"
            class="mx-auto"
            color="black"
            @click="goToCategory"
          >
            <slot name="action"></slot>
          </v-btn>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {useCartStore} from '@/stores/cart.js'

let props = defineProps(['category'])

let category = props.category
let products = ref([])

let cartStore = useCartStore()
let fetchCategory = category == 'Womens Dresses' ? 'womens-dresses': 'mens-shirts'

cartStore.fetchProducts()
  .then(() => {
    products.value = cartStore.getProductsByCategory(fetchCategory)
    console.log(`home ${props.category}  injected`)
  })
  .catch(err => console.log)

let goToCategory = function() {
  useRouter().push(`/products/?category=${category}`)
}
</script>

<style scoped>

</style>