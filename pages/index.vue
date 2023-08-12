<template>
  <div>
    <carousel/>
    

  </div>

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


// onBeforeUnmount(() => {
//   console.log('leaving')
// })

</script>

<style scoped>

</style>