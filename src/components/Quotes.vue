<template lang="html">
  <div class="quotes jumbotron"
      id="quotes">
    <ul class="quotes__list">
      <li class="quotes__item col-sm-6 col-md-4 col-lg-3"
          v-for="quote, index in quotes">
        <quote :quote="quote"
            :key="index"></quote>
      </li>
    </ul>
  </div>
</template>

<script>
  import Quote from './Quote'
  import {eventBus} from '../main'

  export default {
    data () {
      return {
        quotes: eventBus.$data.quotes
      }
    },
    components: {
      Quote
    },
    methods: {
      onQuotesChange (quotes) {
        this.quotes = quotes
      }
    },
    created () {
      eventBus.$on('addQuote', this.onQuotesChange),
      eventBus.$on('removeQuote', this.onQuotesChange)
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
