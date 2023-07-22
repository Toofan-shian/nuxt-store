<template>
  <v-app-bar>

    <v-toolbar-title @click="$router.push('/')">
      Shoping Site
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn @click="$router.push('/cart')" class="text-none" stacked>
      <v-badge :content="23" color="error">
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
    

    <v-btn
      prependIcon="mdi-weather-sunny"
    >
      Toggle Theme  
    </v-btn>
  </v-app-bar>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>