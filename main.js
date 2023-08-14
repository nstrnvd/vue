
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
  <div class="product">
    <div>
      <h1>{{ brand }} {{ product }}</h1>
      <h1>
        <p>{{ description.value }}</p>
      </h1>
      <a v-bind:href="Link.href" v-bind:title="Title.text">
        <img class="green_img" :src="imageSource" :alt="imageAlt" width="500" height="600">
      </a>
      <p v-if="inStock" :class="{ inStock: inStock }">in stock</p>
      <p v-else :class="{ outOfStock: !inStock }">out of stock</p>
      <p>user is premium:{{ premium }} </p>

      <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
        :style="{ backgroundColor: variant.variantColor }" @mouseover="updatePtoduct(index)">
      </div>

      <ul>
        <li v-for="size in sizes" :key="size.key">{{ size.size }}</li>
      </ul>

      <button
        @click="addToCart()"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to cart
      </button>
      <button @click="removeFromCart()">Remove from cart</button>

      <div class="cart">
        <p>cart({{cart}})</p>
      </div>

      <p>{{ onsale }}</p>
    </div>
  </div>
  `,
  data() {
    return {
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
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      Title: {
        text: 'This is a Title'
      },
      // cart: 0,
    }
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
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
  },
});

Vue.component("product-details", {
  props: {
    details: {
      type: String,
    },
  },
  template: `
	<div>
		<h5>
			details of sock
		</h5>
		<p>
			type: {{ details }}
		</p>
	</div>
	`
})

var app = new Vue({
  el: "#nastaran",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      for (var i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    },
  },
})
Vue.config.devtools = true;