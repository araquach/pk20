<template>
  <div>
    <b-collapse
        aria-id="contentIdForA11y2"
        class="panel is-treatment"
        animation="slide"
        :open.sync="isOpen">
      <div
          slot="trigger"
          class="panel-heading"
          role="button"
          aria-controls="contentIdForA11y2">
        <div class="level">
          <div class="level-left">
            Select A Hair Treatment
          </div>
          <div v-if="selectedTreatment.id" class="level-right">
            {{ selectedTreatment.service }}: {{ selectedTreatmentPrice | toCurrency }}
          </div>
        </div>
      </div>
      <div v-if="!selectedTreatment.id" class="section">
        <p class="is-size-4">If you want to keep your hair in perfect condition we recommend having one of our intensive treatments.</p>
        <p>Our <strong>Schwarzkopf BC</strong> treatments are the most affordable option with a treatment selected to match your hair type.</p>
        <p>If you're looking for a more luxurious option then our <strong>Kevin Murphy TREAT.ME</strong> range will tantalise your senses and restore your hairs condition to it's former glory.</p>
        <p>For any heavy bleaching services we recommend <strong>Olaplex</strong> and for already damaged hair Schwarzkopf BC <strong>Fibre Clinix</strong> for a customised treatment suited to your hair type</p>
      </div>
      <div class="section columns is-mobile is-multiline">
        <div v-for="(service, i) in treatmentPrices" class="column">
          <div class="button is-small is-treatment is-outlined"
               :class="{ 'activeSelectedTreatment': i === activeItem }"
               @click="$store.commit('UPDATE_SELECTED_TREATMENT', service); isOpen = false; selectItem(i)"
               v-text="service.service"
          />
        </div>
      </div>
    </b-collapse>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      isOpen: true,
      activeItem: null
    }
  },

  methods: {
    selectItem(i) {
      this.activeItem = i
    },
  },

  computed: {
    ...mapState(['selectedTreatment']),
    ...mapGetters(['treatmentPrices', 'selectedTreatmentPrice'])
  }
}
</script>