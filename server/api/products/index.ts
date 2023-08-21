import { useFetch } from "nuxt/app"

export default defineEventHandler(async event => {
  console.log('fetching all products (server)...')

  let products = []

  console.log('getting womens products')
  let womensRes = await $fetch("https://dummyjson.com/products/category/womens-dresses")

  console.log('getting mens products')
  let mensRes = await $fetch("https://dummyjson.com/products/category/mens-shirts")

  for(let i = 0; i < 5; i++) {
    products.push(womensRes.products[i])
    products.push(mensRes.products[i])
  }

  return products
})