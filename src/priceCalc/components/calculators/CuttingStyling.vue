<template>
    <div class="section">
        <component :is="selector"/>
        <FinishSelector v-if="level.id"/>
        <FinishAddOnSelector v-if="selectedFinish.id"/>
        <TreatmentSelector v-if="selectedFinishAddOn.id"/>
        <component v-if="selectedFinish.id" :is="totalsView"/>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'

    import LevelSelector from "../selectors/LevelSelector"
    import StylistSelector from "../selectors/StylistSelector"
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
            'selectedTreatment',
            'selectedFinish',
            'selectedFinishAddOn'
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