<template>
  <v-footer
    class="bg-grey-darken-3 site-footer"
    :elevation="10"
  >
    <v-row class="d-flex flex-column align-center justify-center py-1" no-gutters>

      
      <h3
      class="w-100 text-center pa-2"
      > Quick Links
      </h3>

      <v-divider color="white"></v-divider>
    
      <div class="pa-2">
        <NuxtLink
          v-for="link in links"
          :to="link.path"
          class="mx-4"
        >
          <span
            class="text-grey-lighten-3"
          >{{ link.name }}
          </span>
        </NuxtLink>
      </div>

    </v-row>
  </v-footer>
</template>

<script setup>
let links = ref([
  {name: 'HOME', path: '/'},
  {name: "PRODUCTS", path: '/products'},
  {name: 'CART ITEMS', path: '/cart'},
])
</script>

<style lang="scss" scoped>
.site-footer {
  min-height: 74px;
  // max-height: 74px;
}
</style>