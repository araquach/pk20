<template>
  <div class="section">
    <component :is="selector"/>
    <MensCutSelector v-if="level.id"/>
    <MensColourSelector v-if="selectedMensCut.id"/>
    <component v-if="selectedMensCut.id" :is="totalsView"/>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import LevelSelector from "../selectors/LevelSelector"
import StylistSelector from "../selectors/StylistSelector"
import MensColourSelector from "../services/MensColourSelector"
import MensCutSelector from "../services/MensCutSelector"
import Start from "../../views/Selector"
import LevelTotal from "../totals/LevelTotal"
import StylistTotal from "../totals/StylistTotal"
import PriceTotal from "../totals/PriceTotal"

export default {
  components: {
    Start,
    LevelSelector,
    StylistSelector,
    MensColourSelector,
    MensCutSelector,
    LevelTotal,
    StylistTotal,
    PriceTotal
  },

  computed: {
    ...mapState([
      'selector',
      'level',
      'selectedMensColour',
      'selectedMensCut'
    ]),

    ...mapGetters([
      'totalsView'
    ])
  },

  created() {
    this.$store.dispatch('loadSalons')
    this.$store.dispatch('loadStylists')
    this.$store.dispatch('loadServices')
    this.$store.dispatch('loadLevels')
  }
}
</script>