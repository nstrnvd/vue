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
      Title: {
        text: 'This is a Title'
      },
      inSale: true
    }
  })
  Vue.config.devtools = true;
});

