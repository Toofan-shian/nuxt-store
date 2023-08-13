<template>
  <v-col
    cols="4"
  >
    <v-img :src="product.thumbnail" height="200" cover>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0 justify-center align-center">
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
</template>

<script setup>
defineProps(['product'])
let addToCart = () => console.log('add to cart')
</script>

<style lang="scss" scoped>

</style>