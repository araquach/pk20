<template>
  <div>
    <keep-alive>
      <component :is="calculator"/>
    </keep-alive>
  </div>
</template>
<script>
  import Colour from "../components/calculators/Colour"
  import CuttingStyling from "../components/calculators/CuttingStyling"
  import Men from "../components/calculators/Men"
  import {mapState} from "vuex"

  export default {
    components: {
      Colour,
      CuttingStyling,
      Men
    },

    computed: {
      ...mapState([
        'calculator'
      ]),
    }
  }
</script>
