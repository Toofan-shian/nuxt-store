<template>
  <div class="mt-4">
    <v-container>

      <!-- layout and search -->
      <v-row class="my-5" no-gutters>

        <v-col
          cols="4"
          class="d-flex align-center "
        >
          <span class="text-h5 mr-5">Layout </span>
          <v-btn @click="grid = !grid" :class="{'bg-primary': !grid}">
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
          <v-btn @click="grid = !grid" :class="{'bg-primary': grid}" class="ml-5">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </v-col>

        <v-col
          cols="5"
          class="pr-4 "
        >
          <v-text-field
            hide-details
            append-inner-icon="mdi-magnify"
            variant="outlined"
            placeholder="Search Here..."
            class=""
            clearable
            :model-value="searchValue"
            rounded
          ></v-text-field>
        </v-col>

        <v-col
          cols="3"
          class=" "
        >
          <v-select
            rounded
            v-model="sortModel"
            :items="sortItems"
            variant="outlined"
            hide-details
            label="Sort By"
          ></v-select>
        </v-col>
      </v-row>



      <v-row class="mt-0" no-gutters> 
        <!-- Filters -->
        <v-col
          cols="4"
          class=""
        >
          <filterSheet/>
        </v-col>

        <!-- products -->
        <v-col cols="8" class="">


          <!-- lOADING... -->
          <v-row v-if="!products.length" class="mt-8">
            <v-col cols="12">
              <h3 class="text-center">Loading...</h3>
            </v-col>
          </v-row>


          <div v-else>
            <v-row
              v-show="grid"
              class=""
            >
              <v-col
                v-for="(product, index) in products"
                :key="index"
                cols="12"
                sm="6"
                lg="4"
              >
                <singleProductGrid
                  :product="product"
                  class=""
                />
              </v-col>
            </v-row>

            <v-row
              v-show="!grid"
              v-for="(product, index) in products"
              :key="index"
              class="bg-grey-lighten-5 rounded-lg mb-4 single-product-list"
              no-gutters

            >
              <singleProductList
                :product="product"
                class=""
              />
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">

import {useCartStore} from '@/stores/cart'

let products = ref([])
let grid = ref(false)

let cartStore = useCartStore()
cartStore.fetchProducts()
  .then(() => {
  products.value = cartStore.getAllProducts
  console.log('products injected')
  })

let searchValue = ref('')
let sortModel = ref()
let sortItems = ref([
  {title: 'Price: Low-Hight', value: 'lh'},
  {title: 'Price: High-Low', value: 'hl'},
  {title: 'Highest Rating', value: 'hr'},
  {title: 'Highest Discount', value: 'hd'},
  {title: 'Alphabet: A-Z', value: 'az'},
])
</script>

<style scoped>
/* .single-product-list {
  border: 1px solid rgb(209, 209, 209);
} */
/* .single-product-list:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
} */
</style>