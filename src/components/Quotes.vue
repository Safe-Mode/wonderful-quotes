<template lang="html">
  <div class="quotes jumbotron"
      id="quotes">
    <ul class="quotes__list">
      <li class="quotes__item col-sm-6 col-md-4 col-lg-3"
          v-for="quote, index in quotes">
        <quote :quote="quote"
            :removeQuote="removeQuote"
            :key="index"></quote>
      </li>
    </ul>
  </div>
</template>

<script>
  import Quote from './Quote'

  export default {
    props: {
      quotes: Array,
      removeQuote: Function
    },
    components: {
      Quote
    }
  }
</script>

<style lang="css">
  .quotes__list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .quotes__item {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
