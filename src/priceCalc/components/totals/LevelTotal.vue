<template>
  <div class="section box">
    <div class="columns">
      <div class="column is-8">
        <div v-if="!allSelected">
          <p class="is-size-7"><strong>Try the price with different stylist levels</strong></p>
          <p class="is-size-7">Feel free to experiment with your other selections too!</p>
        </div>
        <div v-if="allSelected">
          <p class="is-size-4">Are you happy with this price?</p>
          <p>If it's pushing your budget select a different stylist level or see how much it would cost to upgrade to a more experienced stylist</p>
        </div>
      </div>
      <div class="column has-text-right">
        <div class="section price">
          <p  v-if="allSelected" class="is-size-3 has-text-right">Total: {{ totalCost | toCurrency }}</p>
          <p  v-else class="is-size-6 has-text-right">Running Total: {{ totalCost | toCurrency }}</p>
          <p class="is-size-6 has-text-right">with {{ level.name}}</p>
          <br>
          <div v-if="allSelected">
            <button :class="[level.id > 1 ? '' : 'disabled']"
                    @click="INCREASE_LEVEL"
                    class="button is-warning is-small"
            >
              < Down a level
            </button>
            <button :class="[(level.id > 0 && level.id < 7) ? '': 'disabled']"
                    @click="DECREASE_LEVEL"
                    class="button is-warning is-small"
            >
              Up a level &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="allSelected">
      <div class="columns">
        <div class="column is-7">
          <p>Once you're happy with everything click the 'Show Stylist' button</p>
        </div>
        <div class="column has-text-right">
          <button @click="SELECT_VIEW('TotalsByLevel')" class="button is-primary">Show Stylists</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState(['level']),
      ...mapGetters(['allSelected', 'totalCost']),

    },
    methods: {
      ...mapMutations(['SELECT_VIEW', 'INCREASE_LEVEL', 'DECREASE_LEVEL'])
    }
  }
</script>
