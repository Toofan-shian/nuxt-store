<template>
  <v-container
    class="py-10 my-10"
  >
    <v-row class="">
      <v-col cols="12">

        <v-sheet
          class="discounts order"
          rounded
          elevation="1"
          >
          <!-- TITLE -->
          <h1 class="text-center pa-9 text-capitalize">
            gretest men's shirts collection
          </h1>
    
          
          <!-- PRODUCTS -->
          <v-slide-group
            class=""
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
    
    
          <!-- ACTION -->
          <div class="d-flex justify-center pt-9 pb-14">
            <v-btn
              elevation="1"
              variant="outlined"
              class="mx-auto"
              color="black"
            >
              check all Men's shirts
            </v-btn>
          </div>
        </v-sheet>

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
.discounts {
  background-color: rgb(247, 247, 247);
  border: 1px solid rgb(214, 214, 214);
  border-radius: 13px;
}
</style>