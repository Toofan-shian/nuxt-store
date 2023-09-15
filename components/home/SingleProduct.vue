<template>
  <v-card
    class="product-card-grid mx-auto my-2 pb-4"
    :to="`/products/${product.id}`"
    elevation="2"
  >
    <v-img :src="product.thumb" class=""  width="250">
      <template v-slot:placeholder>
        <v-row
          class="h-100 d-flex align-center justify-center ma-0"
        >
          <v-progress-circular
            indeterminate
            color="gray lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title
      class="text-capitalize pt-3"
    >
      {{ product.title }}
    </v-card-title>

    <!-- <v-card-subtitle class="mt-n3">
      ${{ product.price }}
    </v-card-subtitle> -->
  </v-card>
</template>

<script setup lang="ts">
defineProps(['product'])

let addToCart = () => console.log('add product')
</script>

<style scoped>
.product-card-grid {
  min-width: 250px;
  max-width: 250px;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 12px;
}
.card-text {
  height: 3rem;
}
</style>