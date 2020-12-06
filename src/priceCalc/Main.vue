<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="view"/>
      </keep-alive>
    </transition>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import Start from "./views/Selector"
import Selector from "./views/Selector"
import Calculator from "./views/Calculator"
import Colour from "./components/calculators/Colour"
import CuttingStyling from './components/calculators/CuttingStyling'
import Men from './components/calculators/Men'
import Technical from './components/calculators/Technical'
import Intro from "./views/Intro"
import TotalsByLevel from "./views/endpoint/TotalsByLevel"
import TotalsByStylist from "./views/endpoint/TotalsByStylist"
import TotalsByPrice from "./views/endpoint/TotalsByPrice"
import LevelSelector from "./components/selectors/LevelSelector"
import PriceSelector from "./components/selectors/PriceSelector"
import StylistSelector from "./components/selectors/StylistSelector"
import ColourSelector from "./components/services/ColourSelector"
import ColourAddOnSelector from "./components/services/ColourAddOnSelector"
import TreatmentSelector from "./components/services/TreatmentSelector"
import FinishSelector from "./components/services/FinishSelector"
import FinishAddOnSelector from "./components/services/FinishAddOnSelector"
import LevelTotal from "./components/totals/LevelTotal"
import StylistTotal from "./components/totals/StylistTotal"
import PriceTotal from "./components/totals/PriceTotal"
import Finish from "./views/Finish"

export default {
  components: {
    Start,
    Selector,
    Calculator,
    Colour,
    CuttingStyling,
    Men,
    Technical,
    Intro,
    TotalsByLevel,
    TotalsByStylist,
    TotalsByPrice,
    LevelSelector,
    PriceSelector,
    StylistSelector,
    ColourSelector,
    ColourAddOnSelector,
    TreatmentSelector,
    FinishSelector,
    FinishAddOnSelector,
    LevelTotal,
    PriceTotal,
    StylistTotal,
    Finish
  },

  computed: {
    ...mapState(['view'])
  },

  created() {
    this.$store.dispatch('loadSalons')
    this.$store.dispatch('loadStylists')
    this.$store.dispatch('loadServices')
    this.$store.dispatch('loadLevels')
  }
}
</script>