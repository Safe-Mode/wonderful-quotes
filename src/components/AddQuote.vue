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

      <button class="add-quote__submit btn btn-primary"
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
        currentQuote: null,
        minQuoteLength: 2
      }
    },
    methods: {
      isAppendable (embed) {
        return embed &&
            embed.trim().length >= this.minQuoteLength &&
            this.quantity.current() < this.quantity.max
      },
      addQuote (quote, evt) {
        if (this.isAppendable(quote)) {
          this.quotes.push(quote)
          this.currentQuote = null
          eventBus.$emit('addQuote', this.quotes)
        }
      }
    }
  }
</script>

<style lang="css">
  .add-quote__text {
    resize: none;
  }
</style>
