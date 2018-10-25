<template>
  <div id="app" class="app container">
    <counter class="mb-5"></counter>
    <add-quote class="mb-5"></add-quote>
    <quotes></quotes>
  </div>
</template>

<script>
  import Counter from './components/Counter'
  import AddQuote from './components/AddQuote'
  import Quotes from './components/Quotes'

  export default {
    name: 'app',
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
