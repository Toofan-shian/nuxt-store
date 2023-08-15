<template>
  <v-row
    class="d-flex justify-center mb-9"
  >
    <v-card
      variant="tonal"
      v-for="(img, index) in images"
      :key="index"
      class="mx-2"
    >
      <v-img :src="img" class="" width="50" height="50"></v-img>
    </v-card>
  </v-row>
</template>

<script setup>
defineProps(['images'])

</script>

<style lang="scss" scoped>

</style>