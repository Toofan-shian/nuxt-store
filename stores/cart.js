import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    cartContent: [
      // {
      //   "quantity": 3,
      //   "id" : 1,
      //   "category": "womens-dresses",
      //   "title" : "essential loopback terry hoodie",
      //   "description" : "We're layering. We're lounging. We're living in this one. The Essential Hoodie is a classic on all counts, with an upgraded fabric that'll have you ditching your old college hoodie in a heartbeat Lightweight cotton fleece Hoodie with crossover at neckline Raglan long sleeves Kangaroo pocket Make it a set with a pair of our Essential Loopback Terry Sweatpants",
      //   "price" : 97,
      //   "thumb" : "/1/thumb-min.jpg",
      //   "images" : [
      //     "/1/1-min.jpg",
      //     "/1/2-min.jpg",
      //     "/1/3-min.jpg",
      //     "/1/4-min.jpg"
      //   ]
      // }, 
      // {
      //   "quantity": 1,
      //   "id" : 2,
      //   "category": "womens-dresses",
      //   "title" : "stretch rib crop long sleeve top",
      //   "description" : "A deliciously textured top made for lounging, walking, or whatever else you may be doing. Pro tip: wear it as a set with our Stretch Rib Bootcut Legging and let the compliments roll in Stretchy, ribbed organic cotton fabric Wide neck, long sleeves Slim fit, cropped just below the ribcage Make it a set with our Stretch Rib Leggings",
      //   "price" : 63,
      //   "thumb" : "/2/thumb-min.jpg",
      //   "images" : [
      //     "/2/1-min.jpg",
      //     "/2/2-min.jpg",
      //     "/2/3-min.jpg",
      //     "/2/4-min.jpg"
      //   ]
      // },
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
          console.log('couldnt fetch products (store)')
        }
        this.products = data.value
        console.log('all products fetched (store)')
        return

      } catch (error) {
        console.log('error from store getting products (stroe-catch)')
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