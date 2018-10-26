<template lang="html">
  <div class="quote card shadow-sm"
      @mouseover="isHover = true"
      @mouseout="isHover = false"
      :class="[{'bg-danger': isHover}, {'text-white': isHover}]">
    <div class="card-body">
      <p class="quote__text card-text text-center">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main'

  export default {
    data () {
      return {
        quotes: eventBus.$data.quotes,
        isHover: false
      }
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
