<template>
  <v-container class="my-5 my-sm-6 my-md-8 my-lg-12 my-xl-16">
    <v-row
      class=""
    >
      <v-col
        cols="12"
        lg="10"
        offset-lg="1"
        xl="8"
        offset-xl="2"
      >
        <v-sheet
          class="rounded-lg pb-14 "
          :class="{'border': display.mdAndUp.value}"
        >
          <v-container
            class="px-sm-6 px-md-8"
          >
            <productsHeader
              :category="category"
              :priceRange="priceRangeRef"
              @category-change="changeCategory"
              @layoutChange="changeLayout"
              @sortChange="setSortingProducts"
              @priceRangeChange="setNewPrice"
              @searchTermChange="setNewSearchTerm"
            ></productsHeader>
      
            <v-row
              class="mt-0"
            > 
      
              <!-- products -->
              <v-col
                cols="12"
                class=""
              >
      
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
                      class=""
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <ProductsSingleGrid
                        :product="product"
                        class=""
                      />
                    </v-col>
                  </v-row>
      
                  <v-row
                    v-show="!grid"
                    v-for="(product, index) in products"
                    :key="index"
                    class="rounded-lg mb-7 mx-sm-8 mx-md-16"
                  >
                    <ProductsSingleList
                      :product="product"
                      class=""
                    />
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script setup lang="ts">
import {useDisplay} from 'vuetify'
import {useCartStore} from '@/stores/cart'

let display = useDisplay()

let qry = useRoute().query
let category = ref('All Products')

if (qry.category) {
  category.value = qry.category
}

let changeCategory = (data: string) => {
  category.value = data
}


let products = ref([])
let cartStore = useCartStore()


let fetchProducts = async (category: string) => {
  await cartStore.fetchProducts()

  if (category == 'All Products'){
    products.value = cartStore.getAllProducts
    console.log('all products injected')
  }
  else if (category == 'Womens Dresses') {
    products.value = cartStore.getProductsByCategory('womens-dresses')
    console.log('womens dresses injected')
  }
  else if(category == 'Mens Shirts') {
    products.value = cartStore.getProductsByCategory('mens-shirts')
    console.log('mens shirts injected')
  }
  else {
    console.log('category unknown:',category.value)
  }
}

await fetchProducts(category.value)



let priceRange = cartStore.getPriceRange
let priceRangeRef = ref(priceRange)


watch(category, async () => {
  await fetchProducts(category.value);
  filterByPrice(priceRangeRef.value)
  if (searchValue.value) filterBySearchTerm(searchValue.value)
  if (sortValue.value) changeSorting(sortValue.value)
})

let grid = ref(true)

let changeLayout = () => {
  grid.value = !grid.value
}

let sortValue = ref()

let changeSorting = (value) => {
  if (value == 'lh') {
    products.value.sort((a, b) => a.price - b.price)
  }
  else if (value == 'hl') {
    products.value.sort((a, b) => b.price - a.price)
  }
  else if (value == 'az') {
    products.value.sort((a, b) => a.title.localeCompare(b.title))
  }
}

let setSortingProducts = async (value) => {
  sortValue.value = value
  await fetchProducts(category.value)
  filterByPrice(priceRangeRef.value)
  if (searchValue.value) filterBySearchTerm(searchValue.value)
  changeSorting(value)
}

let filterByPrice = (newRange) => {
  let newProducts = products.value.filter(product => {
    let pass = (product.price >= newRange[0]) && (product.price <= newRange[1])
    return pass
  })
  products.value = [...newProducts]
}

let setNewPrice = async (newRange) => {
  priceRangeRef.value = newRange
  await fetchProducts(category.value)
  filterByPrice(newRange)
  if (searchValue.value) filterBySearchTerm(searchValue.value)
  if (sortValue.value) changeSorting(sortValue.value)
}

let searchValue = ref()

let filterBySearchTerm = (term: string) => {
  let searchRegEx = new RegExp(term, 'i')
  let newProducts = products.value.filter(product => {
    return searchRegEx.test(product.title)
  })
  products.value = [...newProducts]
}

let setNewSearchTerm = async (term: string) => {
  console.log('setting serach term')
  searchValue.value = term
  await fetchProducts(category.value)
  filterByPrice(priceRangeRef.value)
  if (searchValue.value) filterBySearchTerm(searchValue.value)
  if (sortValue.value) changeSorting(sortValue.value)
}

</script>


<style scoped>

</style>