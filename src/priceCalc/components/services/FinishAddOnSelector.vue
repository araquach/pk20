<template>
  <div>
    <b-collapse
        aria-id="contentIdForA11y2"
        class="panel is-finish-add-on"
        animation="slide"
        :open.sync="isOpen">
      <div
          slot="trigger"
          class="panel-heading"
          role="button"
          aria-controls="contentIdForA11y2">
        <div class="level">
          <div class="level-left">
            Select A Finish Add-on
          </div>
          <div v-if="selectedFinishAddOn.id" class="level-right">
            {{ selectedFinishAddOn.service }}: {{ selectedFinishAddOnPrice | toCurrency }}
          </div>
        </div>
      </div>
      <div v-if="!selectedFinishAddOn.id" class="section">
        <p class="is-size-5">A perfect finish is a given with all our work. <strong>Straightening</strong>, <strong>waving</strong> and certain
          <strong>curl techniques</strong> come as standard but sometimes you just want that little bit more&hellip;</p>
        <p>If you want a volumous <strong>curly blow</strong> or <strong>vintage pincurls</strong> to set off your new look it all takes extra time and skill so click the add-on.</p>
        <p>Going on a <strong>special night out</strong> or to a <strong>festival</strong>? Select the extra styling or up-do option.</p>
        <p><em>If you're happy with our standard exceptional styling then go ahead and click 'none'</em></p>
      </div>
      <div class="section columns is-multiline is-mobile">
        <div v-for="(service, i) in finishAddOnPrices"
             :key="i" class="column">
          <div class="button is-small is-finish-add-on is-outlined"
               :class="{ 'activeSelectedFinishAddOn': i === activeItem}"
               @click="$store.commit('UPDATE_SELECTED_FINISH_ADD_ON', service); isOpen = false; selectItem(i)"
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
  props: [],

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
    ...mapState(['selectedFinishAddOn']),
    ...mapGetters(['finishAddOnPrices', 'selectedFinishAddOnPrice'])
  }
}
</script>