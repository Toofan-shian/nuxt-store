<template>
  <v-card class=" mx-auto pb-2">
    <v-img :src="product.thumbnail" class="" height="200" cover>
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
        @click="addToCart"
        class="bg-primary"
      >
        add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
defineProps(['product'])

let addToCart = () => console.log('add product')
</script>

<style scoped>

</style>