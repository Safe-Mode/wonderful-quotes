<template>
  <div id="app" class="container">
    <counter :quantity="quantity"></counter>
  </div>
</template>

<script>
  import Counter from './components/Counter'

  export default {
    name: 'app',
    data () {
      return {
        quantity: {
          min: 0,
          max: 10,
          current: 0
        }
      }
    },
    components: {
      Counter
    }
  }
</script>

<style lang="scss">

</style>
