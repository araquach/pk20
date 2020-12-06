<template>
  <div>
    <b-collapse
        aria-id="contentIdForA11y2"
        class="panel is-level"
        animation="slide"
        :open.sync="isOpen">
      <div
          slot="trigger"
          class="panel-heading"
          role="button"
          aria-controls="contentIdForA11y2">
        <div class="level">
          <div class="level-left">
            Select Level of your stylist
          </div>
          <div v-if="level" class="level-right">
            {{ level.name }}
          </div>
        </div>
      </div>
      <div v-if="!level.id" class="section">
        <p>At Paul Kemp Hairdressing we have stylists from <strong>Graduate Stylist</strong> level up to <strong>Advanced Senior</strong>. The cost with each level reflects how much experience they have.
          A Graduate stylist has 2-3 years experience, a Stylist 3-5 years experience, a Senior Stylist 5+ years experience.</p>
        <p>Our <strong>Junior stylists</strong> are based at our training Academy <strong>Base Hairdressing</strong> if you're looking for our most affordable option.</p>
        <p>All of our Senior Stylists have the <strong>Schwarzkopf Colour Masters</strong> qualification.
            Our Advanced Seniors are the most in-demand stylists with a wealth of experience and also oversee the running of the salon.</p>
        <p class="has-text-level is-size-5"><strong>Please select a stylist level below - you can change this at any time to see the price difference</strong></p>
      </div>
      <div class="section columns is-multiline is-mobile">
        <div v-for="(l, i) in levels"
             :key="i"
             class="column">
          <button class="button is-small is-level is-outlined"
                  :class="{ 'activeLevel': i === level.id -1 }"
                  @click="SELECT_LEVEL(l);
                  selectItem(i)"
          >
            {{ l.name }}
          </button>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {

    data() {
      return {
        isOpen: true,
        activeItem: null
      }
    },

    methods: {
      ...mapMutations([
          'SELECT_LEVEL'
      ]),

      selectItem(i) {
        this.activeItem = i
      },
    },

    computed: {
      ...mapState(['level', 'levels'])
    }
  }
</script>