<template>
  <div class="section">
    <component :is="selector"/>
    <ColourSelector v-if="level.id"/>
    <ColourAddOnSelector v-if="selectedColour.id && !isColourCorrection"/>
    <TreatmentSelector v-if="selectedColourAddOn.id"/>
    <FinishSelector v-if="selectedTreatment.id || (isColourCorrection && selectedColour.id)"/>
    <FinishAddOnSelector v-if="selectedFinish.id"/>
    <component v-if="selectedColour.id" :is="totalsView"/>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex'

  import LevelSelector from "../selectors/LevelSelector"
  import StylistSelector from "../selectors/StylistSelector"
  import ColourSelector from "../services/ColourSelector"
  import ColourAddOnSelector from "../services/ColourAddOnSelector"
  import TreatmentSelector from "../services/TreatmentSelector"
  import FinishSelector from "../services/FinishSelector"
  import FinishAddOnSelector from "../services/FinishAddOnSelector"
  import Start from "../../views/Selector"
  import LevelTotal from "../totals/LevelTotal"
  import StylistTotal from "../totals/StylistTotal"
  import PriceTotal from "../totals/PriceTotal"

  export default {
    components: {
      Start,
      LevelSelector,
      StylistSelector,
      ColourSelector,
      ColourAddOnSelector,
      TreatmentSelector,
      FinishSelector,
      FinishAddOnSelector,
      LevelTotal,
      StylistTotal,
      PriceTotal
    },

    computed: {
      ...mapState([
          'selector',
          'level',
          'selectedColour',
          'isColourCorrection',
          'selectedColourAddOn',
          'selectedTreatment',
          'selectedFinish'
      ]),

      ...mapGetters([
          'totalsView'
      ])
    }
  }
</script>