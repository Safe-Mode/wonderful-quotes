<template lang="html">
  <div class="quote card shadow-sm"
      @mouseover="isHover = true"
      @mouseout="isHover = false"
      @click="removeQuote(quote)"
      :class="[{'bg-danger': isHover}, {'text-white': isHover}]">
    <div class="card-body">
      <p class="quote__text card-text text-center">{{ quote }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isHover: false
      }
    },
    props: {
      quote: String,
      removeQuote: Function
    }
  }
</script>

<style lang="css">
  .quote {
    font-family: "Charmonman", cursive;
    font-size: 24px;
    cursor: pointer;
  }
</style>
