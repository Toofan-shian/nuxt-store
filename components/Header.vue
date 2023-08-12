<template>
  <v-app-bar class="pa-2">

    <v-toolbar-title @click="$router.push('/')">
      Nuxify Shop
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      class="text"
      text="Products"
      @click="$router.push('/products')"
    ></v-btn>

    <v-btn
      icon="mdi-weather-sunny"
    >
    </v-btn>

    <v-btn
      stacked
      icon="mdi-cart-outline"
      class="icon"
      @click="$router.push('/cart')"
    >
      <v-badge :content="23" color="error" class="ma-0 pa-0">
        <v-icon class="pa-0">mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>

  </v-app-bar>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>