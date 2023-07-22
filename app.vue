<template>
  <v-app id="inspire">
    <Header/>
    <v-main>
      <v-container>
        <RouterView></RouterView>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.rb {
  border: 1px solid red;
}
.gb {
  border: 1px solid green;
}
</style>