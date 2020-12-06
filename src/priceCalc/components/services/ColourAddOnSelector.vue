<template>
  <div>
    <b-collapse
        aria-id="contentIdForA11y2"
        class="panel is-colour-add-on"
        animation="slide"
        :open.sync="isOpen">
      <div
          slot="trigger"
          class="panel-heading"
          role="button"
          aria-controls="contentIdForA11y2">
        <div class="level">
          <div class="level-left">
            Select A Colour Add-on
          </div>
          <div v-if="selectedColourAddOn.id" class="level-right">
            {{ selectedColourAddOn.service }}: {{ selectedColourAddOnPrice | toCurrency }}
          </div>
        </div>
      </div>
      <div v-if="!selectedColourAddOn.id" class="section">
        <p class="is-size-4">If you're going lighter you'll probably need a <strong>Toner</strong> to achieve a beautiful colour.</p>
        <p>If you want fashion toning (silver/lilac/pink etc) Select <strong>Complex Toner</strong></p>
        <p>For vibrant fashion colours select <strong>Crazy Colour</strong></p>
        <p>If you're having foils and need a <strong>Colour in-between</strong> (to cover grey, etc) select this option</p>
      </div>
      <div class="section columns is-mobile is-multiline">
        <div v-for="(service, i) in colourAddOnPrices" class="column">
          <div class="button is-small is-colour-add-on is-outlined"
               :class="{ 'activeSelectedColourAddOn': i === activeItem }"
               @click="$store.commit('UPDATE_SELECTED_COLOUR_ADD_ON', service); isOpen = false; selectItem(i)"
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
    ...mapState(['selectedColourAddOn']),
    ...mapGetters(['colourAddOnPrices', 'selectedColourAddOnPrice'])
  }
}
</script>