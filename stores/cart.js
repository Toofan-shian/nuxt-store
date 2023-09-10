import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    cartContent: [
      {
        id: 41,
        quantity: 1,
        title: 'NIGHT SUIT',
        description: 'NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.',
        price: 55,
        discountPercentage: 15.05,
        rating: 4.65,
        stock: 21,
        brand: 'RED MICKY MOUSE..',
        category: 'womens-dresses',
        thumbnail: 'https://i.dummyjson.com/data/products/41/thumbnail.webp',
        images: [
          'https://i.dummyjson.com/data/products/41/1.jpg',
          'https://i.dummyjson.com/data/products/41/2.webp',
          'https://i.dummyjson.com/data/products/41/3.jpg',
          'https://i.dummyjson.com/data/products/41/4.jpg',
          'https://i.dummyjson.com/data/products/41/thumbnail.webp'
        ]
      },
      {
        id: 51,
        quantity: 4,
        title: 'half sleeves T shirts',
        description: 'Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands',
        price: 23,
        discountPercentage: 12.76,
        rating: 4.26,
        stock: 132,
        brand: 'Vintage Apparel',
        category: 'mens-shirts',
        thumbnail: 'https://i.dummyjson.com/data/products/51/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/51/1.png',
          'https://i.dummyjson.com/data/products/51/2.jpg',
          'https://i.dummyjson.com/data/products/51/3.jpg',
          'https://i.dummyjson.com/data/products/51/thumbnail.jpg'
        ]
      },
    ],
    theme: 'light',
    snackBar: false,
    snackBarTimeout: null
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

    getProductsByCategory: (state) => {
      return (category) => {
        let filteredProducts =  state.products.filter(p => {
          return p.category == category ? p : false
        })
        return filteredProducts
      }
    },

    getPriceRange(state) {
      let range = () => {
        let min = null
        let max = null
        state.products.forEach(p => {
          if (!min) {
            min = p.price
          } else if (p.price <= min) {
            min = p.price
          }
          if (!max) {
            max = p.price
          } else if (p.price >= max) {
            max = p.price
          }
        })
        return [min, max]
      }
      range = range()
      console.log("range (state)------ ", range)
      return range
    },

    getCartInfo() {
      let count = 0;
      let subTotal = 0;

      this.cartContent.forEach(p => {
        count += p.quantity;
        subTotal += p.price * p.quantity;
      })

      return {count, subTotal}
    }
  },

  actions: {
    async fetchProducts() {
      if (this.products.length > 0) {
        return
      };
      try {
        console.log('fetching all products (store)...')
        
        let {data} = await useFetch('/api/products')
        if (!data.value) {
          throw error
        }
        this.products = data.value
        console.log('all products fetched (store)')
        return

      } catch (error) {
        throw error
      }

    },

    activateSnackBar() {
      if (this.snackBar) {
        this.snackBar = false;
        clearTimeout(this.snackBarTimeout)
      }

      this.snackBar = true;
      console.log('snackbar activated store');
      this.snackBarTimeout = setTimeout(() => {
        this.snackBar = false
      }, 3000);
    },

    add(productId) {
      let productInCart = this.cartContent.find(product => product.id == productId) 

      if (!productInCart) {
        let product = this.products.find(product => product.id == productId)
        product.quantity = 1
        this.cartContent.push(product)
        console.log('product added to cart')
        
      }
      else {
        productInCart.quantity += 1
        console.log('product quantity increased')
      }
      this.activateSnackBar()
      
    },

    remove(productId) {
      let index = this.cartContent.findIndex(product => product.id == productId)
      this.cartContent[index].quantity = 0;
      this.cartContent.splice(index, 1)
      console.log('product removed from cart')
    },

    changeQty(productId, number) {
      let index = this.cartContent.findIndex(product => product.id == productId)
      this.cartContent[index].quantity += number;
      
      if (this.cartContent[index].quantity == 0) {
        this.remove(productId)
      }
      

    }
  }
})