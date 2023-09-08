import { useFetch } from "nuxt/app"

export default defineEventHandler(async event => {
  let products = []
  // console.log('fetching all products (server)...')
  // let allProducts = await $fetch("https://dummyjson.com/products")

  try {
    console.log('fetching womens product (server)')
    let womensRes = await $fetch("https://dummyjson.com/products/category/womens-dresses")
    
    console.log('fetching mens products (server)')
    let mensRes = await $fetch("https://dummyjson.com/products/category/mens-shirts")
    
    for(let i = 0; i < 5; i++) {
      products.push(womensRes.products[i])
      products.push(mensRes.products[i])
    }
    console.log('all products fetched (server)')
    return products
  
  } catch (error) {
    console.log('faild to connect to api (server)')
    throw(error)
  }



})