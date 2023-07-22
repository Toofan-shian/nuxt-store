<template>
  <v-card class="gb mb-6">
    <v-row>

      <v-col cols="4">
        <v-img :src="product.thumbnail" class="" height="150" cover>
          <template v-slot:placeholder>
            <v-progress-circular
              indeterminate   
            ></v-progress-circular>
          </template>
        </v-img>
      </v-col>

      <v-col cols="8">
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-subtitle>${{ product.price }}</v-card-subtitle>
        <v-card-actions>
           <span class="text-subtitle-2 mr-2">Qty</span>
           <v-btn
              class="ma-0 "
              style="min-width:1px;"
              density="compact"
              variant="outlined"
            >
            <v-icon class="pa-0 ma-0">mdi-plus</v-icon>
           </v-btn>
           <span class="pa-0 mx-3">{{ product.quantity }}</span>
           <v-btn
              class="ma-0 "
              style="min-width:1px;"
              density="compact"
              variant="outlined"
            >
            <v-icon>mdi-minus</v-icon>
           </v-btn>

           <v-spacer></v-spacer>

           <v-btn class="text ma-0" size="small" >remove</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps(['product'])
</script>

<style scoped>

</style>