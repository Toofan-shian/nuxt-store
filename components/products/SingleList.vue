<template>
  <v-card
    class="product-card-list w-100 mx-xl-16"
    hover
    :to="`/products/${product.id}`"
    max-height="333"
  >
    <v-row
      class=" h-100"
      no-gutters
    >
      <v-col
        cols="4"
        class="h-100"
      >
        <v-img
          :src="product.thumb"
          class="h-100"
          cover
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
        class="d-flex flex-column justify-space-around align-space-between "
      >

        <v-card-title
          class="text-capitalize mt-1"
        >
          {{ product.title }}
        </v-card-title>

        <v-card-subtitle
          class="mt-n2 mt-sm-n4 mt-md-n8 mt-xl-n10"
        >
          ${{ product.price }}
        </v-card-subtitle>

        <v-card-text
          class="text-body-2 text-sm-body-1"
          style="max-height: 75px; overflow: hidden;"
        >
          <div
            class=""
            :class="{'truncate-multiline-lg': display.lgAndUp.value, 'truncate-multiline': display.mdAndDown}"
            v-html="product.description"
          >
          </div>
        </v-card-text>
        
        <v-card-actions
          class="d-flex justify-end mb-2 mx-7 "
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
import {useDisplay} from 'vuetify'

let display = useDisplay()

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
.truncate-multiline {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em; /* Adjust the height to match the number of lines */
}
.truncate-multiline-lg {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 5em; /* Adjust the height to match the number of lines */
}
</style>