import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    cartContent: [
      {
        id: 1,
        quantity: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/3.jpg',
          'https://i.dummyjson.com/data/products/1/4.jpg',
          'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
        ]
      },
      {
        id: 2,
        title: 'iPhone X',
        quantity: 2,
        description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/2/1.jpg',
          'https://i.dummyjson.com/data/products/2/2.jpg',
          'https://i.dummyjson.com/data/products/2/3.jpg',
          'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
        ]
      },
    ],
    theme: 'light',
  }),
  getters: {
    getAllProducts() {
      return this.products
    },
    getCartItems() {
      console.log('getting cart items')
      return this.cartContent
    },
    getProductById: (state) => {
      return (id) => state.products.find(p => p.id == id)
    },
    getHomeDiscounts() {
      let discProducts = this.products.filter(p => {
        return p.discountPercentage ? p : false
      })
      let homeDiscounts = discProducts.slice(0, 6)
      return homeDiscounts
    }
  },
  actions: {
    async fetchProducts() {
      if (this.products.length > 0) {
        console.log(this.products)
        return
      };
      try {
        console.log('fetching all products...')
        let {data} = await useFetch('https://dummyjson.com/products')
        this.products = data.value.products
        console.log('all products fetched')
      } catch (error) {
        throw(error)
      }

    },
    add(productId) {
      let productInCart = this.cartContent.find(product => product.id == productId) 
      console.log('productInCart:', productInCart)

      if (!productInCart) {
        let product = this.products.find(product => product.id == productId)
        product.quantity = 1
        this.cartContent.push(product)
        console.log(this.cartContent)
      }
      else {
        productInCart.quantity += 1
      }
      console.log('product added to cart')
    }
  }
})