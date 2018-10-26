<template lang="html">
  <div class="add-quote col-md-6 mx-auto"
      id="add-quote">
    <form action="/"
        @submit.prevent="addQuote(currentQuote, $event)">
      <fieldset class="form-group">
        <label for="add-quote"
            class="add-quote__label h4">Quote</label>
        <textarea class="add-quote__text form-control"
            id="add-quote"
            v-model="currentQuote"
            name="add-quote"
            rows="5"
            cols="80"
            placeholder="Type your quote"></textarea>
      </fieldset>

      <span class="d-inline-block"
          v-if="!isAppendable(currentQuote)"
          data-toggle="popover"
          data-trigger="hover"
          :data-content="popoverText">
        <button class="add-quote__submit btn btn-secondary"
            type="submit"
            style="pointer-events: none;"
            disabled="true">Add quote</button>
      </span>
      <button class="add-quote__submit btn btn-primary"
          v-else
          type="submit">Add quote</button>
    </form>
  </div>
</template>

<script>
  import {eventBus} from '../main'

  export default {
    name: 'add-quote',
    data () {
      return {
        quantity: eventBus.$data.quantity,
        quotes: eventBus.$data.quotes,
        currentQuote: eventBus.$data.currentQuote,
      }
    },
    computed: {
      popoverText () {
        if (this.quantity.current() >= this.quantity.max) {
          return 'Only 10 quotes are available'
        } else if (!this.currentQuote || this.currentQuote.trim().length < this.minQuoteLength) {
          return 'Quote should contain at least 2 symbols'
        }
      }
    },
    methods: {
      isAppendable (embed) {
        return eventBus.isAppendable(embed)
      },
      addQuote (quote, evt) {
        if (this.isAppendable(quote)) {
          this.quotes.push(quote)
          this.currentQuote = null
        }
      }
    },
    mounted () {
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
    },
    updated () {
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
    }
  }
</script>

<style lang="css">
  .add-quote__text {
    resize: none;
  }
</style>
