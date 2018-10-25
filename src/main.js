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
      quotes: []
    }

    return data;
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

export {eventBus}
