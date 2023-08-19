<template>
  <v-container
    class="py-10"
  >
    <v-row class="">
      <v-col cols="12">
        <!-- TITLE -->
        <h1 class="text-center text-h3 font-waight-black py-9 text-capitalize">
          men's shirts collection
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
              v-for="(p, index) in homeDiscounts"
              :key="index"
            >
              <div class="mx-4">
                <HomeSingleProduct :product="p" class=""></HomeSingleProduct >
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
  
  
        <!-- ACTION -->
        <div class="d-flex justify-center py-9 mt-1">
          <v-btn
            elevation="1"
            variant="outlined"
            class="mx-auto"
            color="black"
          >
            check all Men's shirts
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {useCartStore} from '../stores/cart'

let homeDiscounts = ref([])

let cartStore = useCartStore()
cartStore.fetchProducts()
  .then(() => {
    homeDiscounts.value = cartStore.getHomeDiscounts
    console.log('home discounts injected')
  })
  .catch(err => console.log)


</script>

<style scoped>

</style>