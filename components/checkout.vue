<template>
  <v-card class="" style="border-width: 2px;border-radius: 7px; border-color:rgb(189, 189, 189)">
    
    <v-card-title
      class="text-center pt-3 pb-5"
    >Checkout
    </v-card-title>

    <v-card-text>
      <v-container class="pa-0">

        <v-row class=" justify-space-between px-1 py-1" no-gutters>
          <span>
            Items
            <span class="text-caption">({{ count }})</span>
          </span>
          <span>
            ${{ total }}
          </span>
        </v-row>
        
        <v-row class=" justify-space-between px-1 py-1" no-gutters>
          <span>
            Shipping
          </span>
          <span>
            Free
          </span>
        </v-row>
        
        <v-row class=" justify-space-between px-1 py-1 pb-4" no-gutters>
          <span>
            Discounts
          </span>
          <span>
            {{discounts}}
          </span>
        </v-row>
  
        <v-divider class="pb-0 border-opacity-25"></v-divider>
        
        <v-row class=" justify-space-between px-1 pt-3  text-h5" no-gutters>
          <span>
            Subtotal
          </span>
          <span>
            ${{total}}
          </span>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions class="px-4 pb-4">
      <v-btn class=" block bg-success rounded-lg w-100 text-capitalize text-subtitle-1">
        pay with Stripe
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script setup lang="ts">
let count = ref(23)
let total = ref(234)
let discounts = ref('2$')
</script>

<style scoped>

</style>