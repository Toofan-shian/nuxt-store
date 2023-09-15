<template>
  <v-container
    class="py-10 px-1 px-sm-4"
  >
    <v-row class="">
      <v-col
        cols="12"
        xl="8"
        offset-xl="2"
        class="px-sm-4 px-0"
      >
        <!-- TITLE -->
        <h1 class="text-center text-h4 text-sm-h3 text-lg-h2 pt-9 pb-5 pb-sm-8 pb-md-10 mb-lg-2">
          <slot name="title"></slot>
        </h1>
  
        <!-- PRODUCTS SLIDER-->
        <v-sheet
          class="py-2 rounded-lg"
          :class="{'border': display.smAndUp.value}"
        >
          <v-slide-group
            class=" d-flex justify-center "
            show-arrows
            center-active
          >
            <v-slide-group-item
              v-for="(p, index) in products"
              :key="index"
              class=""
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
import {useDisplay} from 'vuetify'

let display = useDisplay()

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