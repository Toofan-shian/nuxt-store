<template>
  <!-- display -->
  <v-row class="my-5">
    <v-col cols="12">
      <v-btn @click="grid = !grid" :class="{'bg-primary': !grid}">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <v-btn @click="grid = !grid" :class="{'bg-primary': grid}" class="ml-5">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-col>
  </v-row>

  <!-- products -->
  <v-row v-if="!products.length">
    <v-col cols="12">
      <h3 class="text-center">Loading...</h3>
    </v-col>
  </v-row>

  <v-row v-else>
    <v-col cols="12">

      <v-row v-show="grid">
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          sm="6"
          lg="4"
        >
          <v-card class="rb mx-auto pb-2">
            <v-img :src="product.thumbnail" class="" height="200" cover>
              <template v-slot:placeholder>
                <v-row
                  align="center"
                  class="full-height ma-0"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="gray lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <v-card-title
              class="text-capitalize"
            >
              {{ product.title }}
            </v-card-title>

            <v-card-subtitle>
              ${{ product.price }}
            </v-card-subtitle>

            <v-card-actions

            >
              <v-btn
                color="primary"
              >
                Read More
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                @click="cartStore.add(product.id)"
                class="bg-primary"
              >
                add to cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row
        v-show="!grid"
        v-for="(product, index) in products"
        :key="index"
        class="rb"
      >
        <v-col
          cols="4"
        >
          <v-img :src="product.thumbnail" height="200" cover>
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

        <v-col cols="8">
          <v-card-title class="text-capitalize">
            {{ product.title }}
          </v-card-title>
          <v-card-subtitle>{{ product.price }}</v-card-subtitle>
          <v-card-text>
            {{ product.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary">
              read more
            </v-btn>
            <v-btn @click="cartStore.add(product.id)" class="bg-primary">
              add to cart
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>



<script setup lang="ts">
import {useCartStore} from '../stores/cart'

let products = ref([])
let grid = ref(false)

let cartStore = useCartStore()
cartStore.fetchProducts()
  .then(() => {
  products.value = cartStore.getAllProducts
  console.log('products injected')
  })
  .catch(err => console.log)



</script>

<style scoped>

</style>