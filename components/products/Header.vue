<template>

  <!-- LAYOUT & SEARCH -->
  <v-row
    class="mt-n6"
  >
    <!-- LAYOUT -->
    <v-col
      class="d-flex align-end"
      cols="6"
      sm="7"
      md="9"
      lg="9"
    >
      <v-btn
        @click="grid = !grid"
        :class="{'bg-info': grid}"
        size="small"
      >
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-btn
        @click="grid = !grid"
        :class="{'bg-info': !grid}"
        size="small"
        class="ml-3 me-auto"
      >
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
    </v-col>

    <v-col
      class="d-flex justify-end align-end"
      cols="6"
      sm="5"
      md="3"
      lg="3"
    >
      <!-- SEARCH FIELD -->
      <v-text-field
        hide-details
        append-inner-icon="mdi-magnify"
        variant="underlined"
        placeholder="Search Here..."
        class="search-field w-100"
        clearable
        v-model="searchValue"
        @input="inputEntered"
        rounded
      ></v-text-field>
    </v-col>
  </v-row>

  <!-- CATEGORY-TITLE -->
  <v-row
    class="justify-center align-center "
  >
    <div
      v-ripple
      id="menuActivator"
      class="category-title rounded-t-lg d-flex align-center justify-center mt-6 mt-sm-8 mb-6 pb-1 px-1"
    >
      <h2
        class="text-center text-h4 text-sm-h3 text-lg-h2 text-grey-darken-2 px-1 py-1"
      >
        {{ category }}
      </h2>
      
      <v-icon
        icon="mdi-arrow-down"
        class="ml-3 text-h4 mt-2 "
        color="grey-darken-2"
      ></v-icon>
    </div>

    <v-menu
      activator="#menuActivator"
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in categoryItems"
          :key="index"
          @click="changeCategory(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>

  <!-- SORT & PRICE FILTER -->
  <v-row
    class="mb-14 "
  >
    <!-- sort select -->
    <v-col
      class=" d-flex align-end pr-4"
      cols="6"
      sm="7"
      md="9"
      lg="9"
    >
      <v-select
        rounded
        v-model="sortModel"
        :items="sortItems"
        variant="underlined"
        hide-details
        class="sort-select pt-0 ma-0 text-h1"
        placeholder="Sort By"
      ></v-select>
    </v-col>

    <!-- FILTER PRICE -->
    <v-col
      class="d-flex align-end pl-0 pa-sm-2"
      cols="6"
      sm="5"
      md="3"
      lg="3"
    >
      <div
        id="pricefilter"
        class="rounded-t-lg w-100 pb-1 pt-2"
        style="cursor: pointer; border-bottom: 1px solid rgb(155, 155, 155); border-radius: 0px; padding: 0px 4px;"
        v-ripple
      >
        <div class="text-capitalize d-flex align-center w-100 text-body-2 text-sm-subtitle-1">

          <span
            class="text-grey-darken-1  me-auto"
          >
            Price Filter
          </span>

          <div
            class="price-filter-content-range text-end text-caption font-weight-thin text-grey-darken-2"
          >
            ${{ priceRange[0] }}-{{priceRange[1]}}
          </div>

          <v-icon
            class="ml-1"
            size="large"
            color="grey-darken-1"
          >
            mdi-menu-down
          </v-icon>
        </div>
      </div>

      <v-menu
        :close-on-content-click="false"
        activator="#pricefilter"
      >
        <div
          class=" py-3 px-1 bg-grey-lighten-4 rounded-b-lg"
        >
          <v-range-slider
            color="info-darken-2"
            v-model="priceRange"
            strict
            :min="priceMinMax[0]"
            :max="priceMinMax[1]"
            hide-details
            thumb-size="12"
            track-size="2"
            :step="10"
          ></v-range-slider>
        </div>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script setup>
// import {useCartStore} from '@/stores/cart.js'

// let cartStore = useCartStore()
let props = defineProps(["category", 'priceRange'])
let emits = defineEmits(['categoryChange', 'layoutChange', 'sortChange', "priceRangeChange", 'searchTermChange'])

let grid = ref(true)

watch(grid, () => {
  emits('layoutChange')
})

let category = ref(props.category)

let categoryItems = ref([
  {title: "All Products"},
  {title: "Womens Dresses"},
  {title: "Mens Shirts"},
])

let changeCategory = (item) => {
  category.value = item.title
}

watch(category, () => {
  emits('categoryChange', category.value)
})

let sortModel = ref()
let sortItems = ref([
  {title: 'Price: Low-Hight', value: 'lh'},
  {title: 'Price: High-Low', value: 'hl'},
  {title: 'Alphabet: A-Z', value: 'az'},
])
watch(sortModel, () => {
  emits('sortChange', sortModel.value)
})

let priceRange = ref(props.priceRange)
let priceMinMax = ref(priceRange.value)


watch(priceRange, () => {
  emits('priceRangeChange', priceRange.value)
})

let searchValue = ref('')

let inputEntered = () => {
  emits('searchTermChange', searchValue.value)
}

</script>



<style lang="scss" scoped>
.sort-select {
  width: 90px;
  max-width: 150px;
}
.category-title {
  cursor: pointer;
  border-bottom: 1px solid rgb(175, 175, 175);
}
// .search-field {
//   max-width: 250px;
// }
/* .price-filter-content {
  position: relative;
} */
.price-filter-content-range {
  display: inline-block;
  // min-width: 80px;
}

</style>