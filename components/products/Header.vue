<template>

  <!-- CATEGORY-TITLE -->
  <v-row
    class="justify-center align-center"
    no-gutters
  >
    <div
      v-ripple
      id="menuActivator"
      class="category-title rounded-t-lg d-flex align-center justify-center mt-11 mb-6 pb-1 px-1"
    >
      <h2
        class="text-center text-h3 text-grey-darken-2 px-1 py-1"
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

  <!-- FILTERS -->
  <v-row
    class="mb-14"
    no-gutters
  >
    <v-col
      cols="12"
      class="d-flex justify-space-between align-end"
    >

      <!-- layout & sort -->
      <div class="d-flex align-end">
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
          class="ml-3"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>

        <!-- sort select -->
        <v-select
          rounded
          v-model="sortModel"
          :items="sortItems"
          variant="underlined"
          hide-details
          label="Sort By"
          class="sort-select ml-4 "
        ></v-select>
      </div>


      <!-- price filter -->
      <v-btn
        id="pricefilter"
        variant="text"
        class="rounded-t-lg price-filter"
        style="border-bottom: 1px solid rgb(155, 155, 155); border-radius: 0px; padding: 0px 4px;"

      >
        <div class="text-capitalize price-filter-content rounded-b-lg ">

          <span class="text-grey-darken-1 text-subtitle-1 mr-4">Filter price</span>

          <div
            class="price-filter-content-range text-end text-caption font-weight-thin text-grey-darken-2"
          >
            ${{ PriceRange[0] }}-{{PriceRange[1]}}
          </div>

          <v-icon
            class="ml-1"
            size="large"
            color="grey-darken-1"
          >
            mdi-menu-down
          </v-icon>
        </div>
      </v-btn>

      <v-menu
        :close-on-content-click="false"
        activator="#pricefilter"
      >
        <div
          class=" py-3 px-1 bg-grey-lighten-4"
        >
          <v-range-slider
            color="info-darken-2"
            v-model="PriceRange"
            strict
            :min="150"
            :max="1800"
            hide-details
            thumb-size="12"
            track-size="2"
            :step="10"
          ></v-range-slider>
        </div>
      </v-menu>
      
      <!-- search field -->
      <v-text-field
        hide-details
        prepend-inner-icon="mdi-magnify"
        variant="underlined"
        placeholder="Search Here..."
        class="search-field"
        clearable
        :model-value="searchValue"
        rounded
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script setup>
let props = defineProps(["category"])
let emits = defineEmits(['categoryChange'])

let grid = ref(true)

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

let searchValue = ref('')
let sortModel = ref()
let sortItems = ref([
  {title: 'Price: Low-Hight', value: 'lh'},
  {title: 'Price: High-Low', value: 'hl'},
  {title: 'Highest Rating', value: 'hr'},
  {title: 'Highest Discount', value: 'hd'},
  {title: 'Alphabet: A-Z', value: 'az'},
])

let PriceRange = ref([150, 550])

</script>



<style lang="scss" scoped>
.sort-select {
  width: 90px;
  /* max-width: 90px; */
}
.category-title {
  cursor: pointer;
  border-bottom: 1px solid rgb(175, 175, 175);
}
.search-field {
  max-width: 250px;
}
/* .price-filter-content {
  position: relative;
} */
.price-filter-content-range {
  display: inline-block;
  min-width: 80px;
}
</style>