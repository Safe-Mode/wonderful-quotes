<template>
  <div id="app" class="app container">
    <counter :quantity="quantity"
        class="mb-5"></counter>
    <add-quote
        class="mb-5"
        :addQuote="addQuote"></add-quote>
    <quotes :quotes="quotes"
        :removeQuote="removeQuote"></quotes>
  </div>
</template>

<script>
  import Counter from './components/Counter'
  import AddQuote from './components/AddQuote'
  import Quotes from './components/Quotes'

  export default {
    name: 'app',
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
        minQuoteLength: 2
      }

      return data
    },
    methods: {
      addQuote (quote, evt, cb) {
        if (quote &&
          quote.trim().length >= this.minQuoteLength &&
          this.quantity.current() < this.quantity.max
        ) {
          this.quotes.push(quote)
          cb()
        }
      },
      removeQuote (quote) {
        this.quotes.splice(this.quotes.indexOf(quote), 1)
      }
    },
    components: {
      Counter,
      AddQuote,
      Quotes
    }
  }
</script>

<style lang="scss">
  body {
    font-family: "Roboto", sans-serif;
  }

  .app {
    // min-height: 100vh;
  }
</style>
