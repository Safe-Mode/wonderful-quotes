<template lang="html">
  <div class="quotes jumbotron"
      id="quotes">
    <transition-group class="quotes__list d-flex flex-wrap"
        tag="ul"
        name="fade">
      <li class="quotes__item col-sm-6 col-md-4 col-lg-3"
          v-for="quote, index in quotes"
          :key="quote">
        <quote @click.native="removeQuote(index)"
            :key="index">
          {{ quote }}
        </quote>
      </li>
    </transition-group>
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

<style lang="css" scoped>
  .quotes__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .quotes__item {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s;
  }

  .fade-leave-active {
    opacity: 0;
    position: absolute;
  }

  .fade-move {
    transition: all 0.4s;
  }
</style>
