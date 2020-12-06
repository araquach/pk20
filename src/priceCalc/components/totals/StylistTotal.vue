<template>
  <div class="section box">
    <div class="columns">
      <div class="column is-8">
        <div v-if="!allSelected">
          <p class="is-size-7"><strong>Try the price with different stylists</strong></p>
          <p class="is-size-7">Feel free to experiment with your other selections too!</p>
        </div>
        <div v-if="allSelected">
          <p class="is-size-4">Are you happy with this price?</p>
          <p class="is-size-5">Experiment with the different stylists and change your service selections.</p>
          <a @click="UPDATE_SELECTOR('LevelSelector')" class="is-size-5"><strong>Alternatively, If you'd like to try different stylist levels
            across all our sites click here ></strong></a>
        </div>
      </div>
      <div class="column has-text-right">
        <div class="section price">
          <p  v-if="allSelected" class="is-size-3 has-text-right">Total: {{ totalCost | toCurrency }}</p>
          <p  v-else class="is-size-6 has-text-right">Running Total: {{ totalCost | toCurrency }}</p>
          <p class="is-size-6 has-text-right">with {{ stylist.first_name }} {{ stylist.last_name }}</p>
          <br>
        </div>
      </div>
    </div>
    <div v-if="allSelected">
      <div class="columns">
        <div class="column is-7">
          <p>Once you're happy with everything click 'next'</p>
        </div>
        <div class="column has-text-right">
          <button @click="SELECT_VIEW('TotalsByStylist')" class="button is-primary is-small">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['level', 'stylist']),
    ...mapGetters(['allSelected', 'totalCost'])
  },

  methods: {
    ...mapMutations([
        'SELECT_VIEW',
        'UPDATE_SELECTOR'
    ])
  }
}
</script>
