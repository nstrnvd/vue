document.addEventListener("DOMContentLoaded", function () {
  var app = new Vue({
    el: '#nastaran',
    data: {
      description: {
        value: 'A pair of warm, fuzzy socks',
      },
      Link: {
        href: 'https://v2.vuejs.org/v2/guide/index.html'
      },
      imageSource: "imges/green.jpg",
      imageAlt: "green-socks",
      inStock: false,
      show: false,
      onSale: true,
      variants: [
        {
          variantId: 2233,
          variantColor: "green",
          variantImage: "imges/green.jpg",
        },
        {
          variantId: 2234,
          variantColor: "blue",
          variantImage: "imges/blue.png",
        },
      ],
      sizes: [{ key: 0, size: 'small' }, { key: 1, size: 'Medium' }, { key: 2, size: 'Large' }],
      Title: {
        text: 'This is a Title'
      },
      inSale: true,
      cart: 0,
    },
    methods: {
      addToCart: function () {
        this.cart += 1;
      },
      removeFromCart: function () {
        this.cart -= 1;
      },
      updatePtoduct: function (variantImage) {
        this.imageSource = variantImage;
      },
    },
  })
  Vue.config.devtools = true;
});

