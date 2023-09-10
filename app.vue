<template>
  <v-app>
    <Header/>
    <v-main class="vuetify-main">
        <Snack></Snack>
        <NuxtPage/>
    </v-main>
    <Footer class="footer"/>
  </v-app>



</template>

<style>
/* .footer {
  max-height: 10px;
} */
.vuetify-main {
 padding-top: 80px;
}
.border-r {
  border: 1px solid red;
}
.border-g {
  border: 1px solid green;
}
.card-border {
  border: 1px solid rgb(189, 189, 189);
  border-radius: 12px;
}
</style>