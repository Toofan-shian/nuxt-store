<template>
  <v-row class="mt-8">
    <v-col cols="12">

      <v-sheet
        class="discounts order"
        rounded
        elevation="1"
        >
        <!-- TITLE -->
        <h1 class="text-center pa-5">Discounts</h1>
  
        
        <!-- PRODUCTS -->
        <v-slide-group
          model-value="discountSlideValue"
          class=""
          show-arrows
          center-active
        >
          <v-slide-group-item
            v-for="(p, index) in homeDiscounts"
            :key="index"
          >
            <div class="mx-4">
              <singleProductGrid :product="p" class=""></singleProductGrid>
            </div>
          </v-slide-group-item>
        </v-slide-group>
  
  
        <!-- ACTION -->
        <div class="d-flex justify-center pt-8 pb-6">
          <v-btn
            class="mx-auto"
            color="success"
            @click="logger"
          >
            check all discounts
          </v-btn>
        </div>
      </v-sheet>

    </v-col>
  </v-row>
  
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


let discountSlideValue = ref([])
watch(discountSlideValue,() => console.log('here'))

let logger = () => console.log(discountSlideValue.value)
</script>

<style scoped>
.discounts {
  background-color: rgb(247, 247, 247);
  border: 1px solid rgb(214, 214, 214);
  border-radius: 13px;
}
</style>