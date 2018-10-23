<template lang="html">
  <div class="counter" id="counter">
    <h2 class="counter__title">Quotes added</h2>
    <div class="counter__progress progress">
      <div class="progress-bar"
          role="progressbar"
          :style="{ width: barWidth}"
          :aria-valuenow="quantity.current"
          :aria-valuemin="quantity.min"
          :aria-valuemax="quantity.max">{{ `${quantity.current} / ${quantity.max}` }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    data () {
      return {
        bar: {
          minWidthFactor: 0.5
        }
      }
    },
    props: {
      quantity: Object
    },
    computed: {
      barWidth () {
        return (this.quantity.current < this.bar.minWidthFactor) ? `${this.quantity.max * this.bar.minWidthFactor}%` : `${this.quantity.current * this.quantity.max}%`
      }
    }
  }
</script>

<style lang="css">
  .counter__progress {
    min-height: 20px;
  }
</style>
