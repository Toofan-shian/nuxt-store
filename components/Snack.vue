<template>
  <v-snackbar
    v-model="bar"
    z-index="10000"
    color="success"
    location="top"
    class="mt-4"
  >
    Product Added To Cart 

    <template v-slot:actions>
      <v-btn
        variant="text"
        @click="bar = !bar"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'; 

let cartStore = useCartStore()
let bar = ref(cartStore.snackBar)

watch(() => cartStore.snackBar, (newVal) => {
  bar.value = newVal
})
// let bar = computed(() => {
//   return cartStore.snackBar
// })

</script>

<style lang="scss" scoped>

</style>