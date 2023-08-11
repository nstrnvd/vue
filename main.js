var app = new Vue({
  el: "#nastaran",
  data: {
    description: {
      value: 'A pair of warm, fuzzy socks',
    },
    brand: "Vue Masterfull",
    product: "socks",
    Link: {
      href: 'https://v2.vuejs.org/v2/guide/index.html'
    },
    // imageSource: "assets/green.jpg",
    imageAlt: "green-socks",
    selectedVariant: 0,
    // inStock: false,
    // inventory: 5,
    // show: false,
    onSale: true,
    variants: [
      {
        variantId: 2233,
        variantColor: "green",
        variantImage: "assets/green.png",
        variantQuantity: 10,
      },
      {
        variantId: 2234,
        variantColor: "blue",
        variantImage: "assets/blue.png",
        variantQuantity: 0,
      },
    ],

    sizes: [{ key: 0, size: 'small' }, { key: 1, size: 'Medium' }, { key: 2, size: 'Large' }],
    Title: {
      text: 'This is a Title'
    },
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    removeFromCart: function () {
      this.cart -= 1;
    },
    updatePtoduct: function (index) {
      this.selectedVariant = index;
      // console.log(index)
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    imageSource() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    onsale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' on sale!'
      }
      return this.brand + ' ' + this.product + ' not on sale!'
    },
  }
});