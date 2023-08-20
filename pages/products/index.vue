<template>
  <v-container class="mt-10">
    <v-sheet
      class="px-10 rounded-lg pb-14"
      elevation="1"
    >

      <!-- CATEGORY-TITLE -->
      <v-row
        class="justify-center align-center"
        no-gutters
      >
        <div
          id="menuActivator"
          class="category-title d-flex align-center justify-center mt-11 mb-6 pb-1 px-1"
        >
          <h2
            class="text-center text-h3 text-grey-darken-2"
          >
            All Products
          </h2>
          
          <v-icon
            icon="mdi-arrow-down"
            class="ml-3 text-h4 mt-2 "
            color="grey-darken-2"
          ></v-icon>
        </div>

        <v-menu
          activator="#menuActivator"
        >
          <v-list>
            <v-list-item
              v-for="(item, index) in categoryItems"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>


      <v-row class="mb-14" no-gutters>
        <v-col
          cols="12"
          class="d-flex justify-space-between align-end"
        >

          <!-- layout & sort -->
          <div class="d-flex align-end">
            <v-btn
              @click="grid = !grid"
              :class="{'bg-info': grid}"
              size="small"
            >
              <v-icon>mdi-apps</v-icon>
            </v-btn>
            <v-btn
              @click="grid = !grid"
              :class="{'bg-info': !grid}"
              size="small"
              class="ml-3"
            >
              <v-icon>mdi-view-list</v-icon>
            </v-btn>

            <!-- sort select -->
            <v-select
              rounded
              v-model="sortModel"
              :items="sortItems"
              variant="underlined"
              hide-details
              label="Sort By"
              class="sort-select ml-4 "
            ></v-select>
          </div>


          <!-- price filter -->

            <v-btn
              id="pricefilter"
              variant="text"
              class="rounded-t-lg price-filter"
              style="border-bottom: 1px solid rgb(155, 155, 155); border-radius: 0px; padding: 0px 4px;"

            >
              <div class="text-capitalize price-filter-content rounded-b-lg ">

                <span class="text-grey-darken-1 text-subtitle-1 mr-4">Filter price</span>

                <div
                  class="price-filter-content-range text-end text-caption font-weight-thin text-grey-darken-2"
                >
                  ${{ PriceRange[0] }}-{{PriceRange[1]}}
                </div>

                <v-icon
                  class="ml-1"
                  size="large"
                  color="grey-darken-1"
                >
                  mdi-menu-down
                </v-icon>
              </div>
            </v-btn>

            <v-menu
              :close-on-content-click="false"
              activator="#pricefilter"
            >
              <div
                class=" py-3 px-1 bg-grey-lighten-4"
              >
                <v-range-slider
                  color="info-darken-2"
                  v-model="PriceRange"
                  strict
                  :min="150"
                  :max="1800"
                  hide-details
                  thumb-size="12"
                  track-size="2"
                  :step="10"
                  :hint="`From $${PriceRange[0]} To $${PriceRange[1]}`"
                ></v-range-slider>
              </div>
            </v-menu>


          <!-- <div class="">
            <h4 class="text-center text-h6">Filter Price</h4>
            <v-range-slider
              v-model="PriceRange"
              strict
              :min="150"
              :max="1800"
              color="grey-darken-2"
              hide-details
              thumb-size="12"
              track-size="2"
              :step="10"
              :hint="`From $${PriceRange[0]} To $${PriceRange[1]}`"
            ></v-range-slider>
          </div> -->
          
          <!-- search field -->
          <v-text-field
            hide-details
            prepend-inner-icon="mdi-magnify"
            variant="underlined"
            placeholder="Search Here..."
            class="search-field"
            clearable
            :model-value="searchValue"
            rounded
          ></v-text-field>
        </v-col>

        <!-- <v-col
          cols="5"
          class="pr-4 "
        >
        </v-col>

        <v-col
          cols="3"
          class=" "
        >

        </v-col> -->
      </v-row>



      <v-row class="mt-0" no-gutters> 
        <!-- Filters -->
        <!-- <v-col
          cols="4"
          class=""
        >
          <filterSheet/>
        </v-col> -->

        <!-- products -->
        <v-col cols="12" class="">


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
                md="4"
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
              class="rounded-lg mb-7 mx-16"
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
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">

import {useCartStore} from '@/stores/cart'

let products = ref([])
let grid = ref(true)

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

let selectCategory = ref('All Products')
let categoryItems = ref([
  {title: "All Products", value: "ap"},
  {title: "Women's Dress", value: 'wd'},
  {title: "women's Shoes", value: 'ws'},
  {title: "Men's Shirts", value: 'mshirts'},
  {title: "Men's Shoes", value: 'mshoes'}
])

let PriceRange = ref([150, 550])

</script>

<style scoped>
.category-title {
  border-bottom: 1px solid rgb(175, 175, 175);
}
.sort-select {
  width: 90px;
  /* max-width: 90px; */
}
.search-field {
  max-width: 250px;
}
/* .price-filter-content {
  position: relative;
} */
.price-filter-content-range {
  display: inline-block;
  min-width: 80px;
}
</style>