<template>
  <div>
    <b-collapse
        aria-id="contentIdForA11y2"
        class="panel is-finish"
        animation="slide"
        :open.sync="isOpen">
      <div
          slot="trigger"
          class="panel-heading"
          role="button"
          aria-controls="contentIdForA11y2">
        <div class="level">
          <div class="level-left">
            Select A Cut or Finish service
          </div>
          <div v-if="selectedFinish.id" class="level-right">
            {{ selectedFinish.service }}: {{ selectedFinishPrice | toCurrency }}
          </div>
        </div>
      </div>
      <div v-if="!selectedFinish.id" class="section">
        <p class="is-size-5">Our team are trained to the highest level in cutting & styling hair.</p>
        <p>From classic, bold looks to choppy, textured styles - we'll be able to create a look perfectly suited to you.</p>
        <p><em>If you're wanting that little bit more to your styling then choose an add-on in the next section</em></p>
      </div>
      <div class="section columns is-multiline is-mobile">
        <div v-for="(service, i) in finishPrices"
             :key="i" class="column">
          <div class="button is-small is-finish is-outlined"
               :class="{ 'activeSelectedFinish': i === activeItem}"
               @click="$store.commit('UPDATE_SELECTED_FINISH', service); isOpen = false; selectItem(i)"
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
    ...mapState(['selectedFinish']),
    ...mapGetters(['finishPrices', 'selectedFinishPrice'])
  }
}
</script>