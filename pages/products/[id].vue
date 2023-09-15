<template>
  <v-container
    class=" justify-center align-center d-flex my-6 my-md-9 my-lg-10 my-xl-14 px-md-0 px-lg-16"
  >
    <v-row>
      <v-col
        cols="12"
        xl="8"
        offset-xl="2"
        class=""
      >

      <div v-if="product == null">
       loading...
      </div>
  
      <v-row
        v-else
        class="align-center d-flex justify-center px-sm-8 px-md-0"
        no-gutters
      >
        <v-sheet
          :elevation="display.xs.value ? '0':'2'"
          rounded
          class="w-100 h-100 rounded-lg pa-sm-8 py-md-14 "
        >
          <v-row
            no-gutters
          >
            <v-col
              cols="12"
              md="6"
              class="pl-md-2 pr-md-1 px-lg-10"
            >
              <h3
                v-if="display.smAndDown.value"
                class="text-h3 mt-2 mb-6 text-center"
              >
                {{ product.title }}
              </h3>
              <productsDetailsCarousel
                :images="product.images"
              />
            </v-col>
      
            <v-col
              cols="12"
              md="6"
              class="d-flex flex-column px-6 px-sm-8 pr-md-2 pl-md-6 px-lg-12"
            >
              <h3
                v-if="display.mdAndUp.value"
                class="text-h3 mt-4 mt-md-0"
              >
                {{ product.title }}
              </h3>
              
              <!-- SM BUTTON -->
              <v-btn
                v-if="display.smAndDown.value"
                color="success"
                class="mx-auto w-100 my-3"
                @click="() => addToCart(product.id)"
                style="max-width: 600px;"
              >
                add to cart ( ${{ product.price }} )
              </v-btn>
              <p
                v-else
                class="text-h6 mt-2"
              >${{ product.price }}
              </p>
      
              <p
                class="mt-8"
                v-html="product.description"
              >
              </p>
      
              <v-btn
                v-if="display.mdAndUp.value"
                class="mt-8 rounded-lg"
                color="success"
                @click="() => addToCart(product.id)"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {useCartStore} from '@/stores/cart'
import {useDisplay} from 'vuetify'

const store = useCartStore()
const { params } = useRoute()
const productId = ref(params.id)
const product = ref(null)
let display = useDisplay()

try {
  await store.fetchProducts()
  product.value = store.getProductById(productId.value)

  if (!product.value) {
    console.error(`Product with id ${productId.value} not found`)
  }
} catch (error) {
  console.error('Error fetching product:', error)
}




let expansionPanels = [
  {title: 'Money-back Guarantee', text: "You can return the product if there was any problem, and get your money back in 24 hours"},
  {title: 'Safe Transactions', text: "We are using a p2p connection for the checkout process to ensure a secure purchase"},
]
let addToCart = (id) => {
  store.add(id)
}





</script>

<style scoped>

</style>