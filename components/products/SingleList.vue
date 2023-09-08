<template>
  <v-card
    class="product-card-list w-100 "
    hover
    :to="`/products/${product.id}`"

  >
    <v-row
      class=""
      no-gutters
    >
      <v-col
        cols="4"
      >
        <v-img
          :src="product.thumbnail"
          height="200"
          cover
          class=""
        >
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

      <v-col
        cols="8"
        class="d-flex flex-column space-between"
      >

        <v-card-title
          class="text-capitalize mt-1"
        >
          {{ product.title }}
        </v-card-title>

        <v-card-subtitle
          class="mt-n2 "
        >
          ${{ product.price }}
        </v-card-subtitle>

        <v-card-text
          class=""
        >
          {{ product.description }}
        </v-card-text>
        
        <v-card-actions
          class="d-flex justify-end mb-2 mx-7"
        >
          <v-btn
            @click.prevent="addToCart"
            class="w-100"
            variant="outlined"
            color="green-darken-2"
          >
            add to cart
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
  
</template>

<script setup>
import {useCartStore} from '@/stores/cart'
let props = defineProps(['product'])

let cartStore = useCartStore()

let addToCart = () => cartStore.add(props.product.id) 

let router = useRouter()

let goToDetails = () => {
  let router = useRouter()
  console.log('here')
  router.push({ path: `/products/${product.id}` })
  console.log('and here')
}
</script>

<style lang="scss" scoped>
.product-card-list {
  border: 1px solid rgb(189, 189, 189);
  border-radius: 12px;
}
</style>