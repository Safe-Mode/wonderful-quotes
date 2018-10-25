<template>
  <div id="app" class="app container d-flex flex-column py-4">
    <counter class="mb-5"></counter>
    <add-quote class="mb-5"></add-quote>
    <quotes></quotes>
    <div class="info alert alert-info mb-0 mt-auto">
      <p class="info__text text-center my-1">Info: Click on a Quote to delete it</p>
    </div>
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
    min-height: 100vh;
  }
</style>
