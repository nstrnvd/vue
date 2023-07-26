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
      sizes: [{ key: 0, size: 'small' }, { key: 1, size: 'Medium' }, { key: 2, size: 'Large' }],
      Title: {
        text: 'This is a Title'
      },
      inSale: true
    }
  })
  Vue.config.devtools = true;
});

