<template>
  <div class="section box">
    <div class="level">
      <div class="level-left">
        <div>
          <p :class="[allSelected ? 'is-size-5' : 'is-size-7']"><strong>Try the price with different stylist levels</strong> <br>use the buttons at the top</p>
          <p class="is-size-7">Feel free to experiment with your other selections too!</p>
        </div>
      </div>
      <div class="level-right">
        <div class="section price">
          <p  v-if="allSelected" class="is-size-3 has-text-right">Total: {{ totalCost | toCurrency }}</p>
          <p  v-else class="is-size-6 has-text-right">Running Total: {{ totalCost | toCurrency }}</p>
          <p class="is-size-6 has-text-right">with {{ stylistName }}</p>
        </div>
      </div>
    </div>
    <div v-if="allSelected" class="level">
      <div class="columns">
        <div class="column is-10">
          <p class="is-size-4">Are you happy with this price?</p>
          <p>If it's pushing your budget select a different stylist level or see how much it would cost to upgrade to a more experienced sylist</p>
          <button :class="[(level > 0 && level < 7) ? '': 'disabled']"  @click="decreaseLevel" class="button is-danger is-small">&lt; Down a level</button>
          <button :class="[this.level > 1 ? '' : 'disabled']" @click="increaseLevel" class="button is-primary is-small">Up a level &gt;</button>
          <br><br>
          <p>Once you're happy with everything click the 'Show Stylist' button</p>
        </div>
      </div>
      <div class="column has-text-right">
        <button @click="onClickButton" class="button is-primary">Show Stylists</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['allSelected', 'totalCost', 'levelName', 'stylistName'],

  methods: {
    onClickButton(event) {
      this.$emit('switchPage', 'TotalsByPrice');
      this.$emit('selectLevel', this.level);
      this.$emit('totalPrice', this.totalCost)
    },
    increaseLevel() {
      if (this.level >1) {
        this.level--
      }
    },

    decreaseLevel() {
      if (this.level > 0 && this.level < 7) {
        this.level++
      }
    }
  },
}
</script>
