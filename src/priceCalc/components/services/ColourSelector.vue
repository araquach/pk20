<template>
  <div>
    <b-collapse
        aria-id="contentIdForA11y2"
        class="panel is-colour"
        animation="slide"
        :open.sync="isOpen">
      <div
          slot="trigger"
          class="panel-heading"
          role="button"
          aria-controls="contentIdForA11y2">
        <div class="level">
          <div class="level-left">
            Select A colour Service
          </div>
          <div v-if="selectedColour.id" class="level-right">
            {{ selectedColour.service }} {{ selectedColourPrice | toCurrency }}
          </div>
        </div>
      </div>
      <div v-if="!colourCat && !selectedColour.id" class="section">
        <p class="is-size-4">We pride ourselves in our creative colouring work</p>
        <p>From Classic <strong>foiling techniques</strong> to full head colours, beautiful seamless <strong>Balayage's</strong> to bold striking <strong>Ombre's</strong></p>
        <p>Our team love to create statement looks too! <strong>Full head bleaching</strong> with <strong>pastel tones</strong> and <strong>crazy colours</strong> for those Instagram ready looks!</p>
        <p class="has-text-colour"><strong>Select the most appropriate colour service category from the list below. You can always come back and edit it later</strong></p>
      </div>
      <div v-if="colourCat" class="section">
        <div v-if="colourCat === 5">
          <p class="is-size-5 has-text-danger">Pricing for a colour correction requires a full, in depth consultation as there are so many factors to consider, dependant on how much corrective work is required.</p>
          <p>We've based these colour correction prices on an average typical cost as a guideline to help you select the best stylist for your budget. Please be aware the price could be more expensive or potentially cheaper - get booked in for a consultation for an accurate price.</p>
          <br><br>
        </div>
        <p v-if="!selectedColour.id" class="has-text-colour"><strong>Now choose a colour service</strong></p>
        <p>If you can't see the service you want <strong @click="$store.commit('CHANGE_COLOUR_CAT', colourCat = null)" class="back-link has-text-colour">click to go back to the categories &gt;</strong></p>
      </div>
      <div class="section">
        <div v-if="!colourCat" class="columns is-multiline is-mobile">
          <div class="column">
            <button class="button is-small" :class="{ 'activeColour': colourCat === 1}" @click="$store.commit('CHANGE_COLOUR_CAT', 1), $store.commit('UPDATE_IS_COLOUR_CORRECTION', false)">
              Classic Colours
            </button>
          </div>
          <div class="column">
            <button class="button is-small" :class="{ 'activeColour': colourCat === 2}" @click="$store.commit('CHANGE_COLOUR_CAT', 2), $store.commit('UPDATE_IS_COLOUR_CORRECTION', false)">
              Foiling Techniques
            </button>
          </div>
          <div class="column">
            <button class="button is-small" :class="{ 'activeColour': colourCat === 3}" @click="$store.commit('CHANGE_COLOUR_CAT', 3), $store.commit('UPDATE_IS_COLOUR_CORRECTION', false)">
              Creative Colouring
            </button>
          </div>
          <div class="column">
            <button class="button is-small" :class="{ 'activeColour': colourCat === 4}" @click="$store.commit('CHANGE_COLOUR_CAT', 4), $store.commit('UPDATE_IS_COLOUR_CORRECTION', false)">
              Full Head Bleaching
            </button>
          </div>
          <div class="column">
            <button class="button is-small" :class="{ 'activeColour': colourCat === 5}" @click="$store.commit('CHANGE_COLOUR_CAT', 5), $store.commit('UPDATE_IS_COLOUR_CORRECTION', true)">
              Corrective Colouring
            </button>
          </div>
        </div>
        <div v-else>
          <div class="columns is-multiline is-mobile">
            <div v-for="(service, i) in filteredColourPrices"
                 :key="i"
                 class="column">
              <button class="button is-small is-outlined is-colour"
                      :class="{ 'activeSelectedColour': i === activeItem}"
                      @click="$store.commit('UPDATE_SELECTED_COLOUR', service);
                              isOpen = false;
                              selectItem(i);"
                      v-text="service.service"
              />
            </div>
          </div>
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
      ...mapState(['colourCat', 'isColourCorrection', 'selectedColour', 'levels', 'level']),
      ...mapGetters(['colourPrices', 'selectedColourPrice']),

      filteredColourPrices() {
        return this.colourPrices.filter(c => c.cat2 === this.colourCat)
      }
    }
  }
</script>