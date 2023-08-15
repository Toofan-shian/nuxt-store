<template>
  <v-app>
    <Header/>
    <v-main class="vuetify-main">
        <NuxtPage/>
    </v-main>
    <Footer class="footer"/>
  </v-app>



  <!-- <div>
    <NuxtPage/>
  </div> -->
</template>

<style>
.footer {
  max-height: 10px;
}
.vuetify-main {
 padding-top: 80px;
}
.border-r {
  border: 1px solid red;
}
.border-g {
  border: 1px solid green;
}
</style>