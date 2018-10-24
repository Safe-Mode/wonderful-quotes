<template>
  <div id="app" class="container">
    <counter :quantity="quantity"
        class="mb-5"></counter>
    <add-quote
        class="mb-5"></add-quote>
    <quotes :quotes="quotes"></quotes>
  </div>
</template>

<script>
  import Counter from './components/Counter'
  import AddQuote from './components/AddQuote'
  import Quotes from './components/Quotes'

  export default {
    name: 'app',
    data () {
      return {
        quantity: {
          min: 0,
          max: 10,
          current: 0
        },
        quotes: ['Fuck!']
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
</style>
