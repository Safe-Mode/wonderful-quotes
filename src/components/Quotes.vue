<template lang="html">
  <div class="quotes jumbotron"
      id="quotes">
    <ul class="quotes__list d-flex flex-wrap">
      <li class="quotes__item col-sm-6 col-md-4 col-lg-3"
          v-for="quote, index in quotes">
        <quote @click.native="removeQuote(index)"
            :key="index">
          {{ quote }}
        </quote>
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
    methods: {
      removeQuote (index) {
        this.quotes.splice(index, 1)
      }
    },
    components: {
      Quote
    }
  }
</script>

<style lang="css">
  .quotes__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .quotes__item {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
