<template>
  <v-footer
    class="bg-grey-darken-3 site-footer py-3"
  >
    <v-row class="d-flex flex-column align-center justify-center text-grey-lighten-2" no-gutters>

      <h3
        class="w-100 text-center text-subtitle-1"
      > Quick Links
      </h3>

      <v-divider
        color="white" 
        style="width: 250px"
        class="mt-1 mb-3"
      >
      </v-divider>
    
      <div class="text-caption">
        <NuxtLink
          v-for="link in links"
          :to="link.path"
          class="mx-4 "
        >
          <span
            class="text-grey-lighten-3"
            style="text-decoration: none;"
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
  max-height: 90px;
}
</style>