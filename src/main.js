import Vue from 'vue'
import App from './App.vue'

const eventBus = new Vue({
  data () {
    const data = {
      quantity: {
        min: 0,
        max: 10,
        current () {
          return data.quotes.length
        }
      },
      quotes: [],
      currentQuote: null,
      minQuoteLength: 2
    }

    return data;
  },
  methods: {
    isAppendable (embed) {
      return embed &&
          embed.trim().length >= this.minQuoteLength &&
          this.quantity.current() < this.quantity.max
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

export {eventBus}
