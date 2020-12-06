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
            Select your stylist
          </div>
          <div v-if="stylist.name" class="level-right">
            {{ stylist.name }}
          </div>
        </div>
      </div>
      <div v-if="!salon.id" class="section">
        <p class="is-size-5">Please select your salon</p>
        <br>
        <div class="columns is-multiline is-mobile">
          <div v-for="(salon, index) in salons" class="column">
            <figure @click="UPDATE_SALON(salon)" class="image salonSelect">
              <img :src="salon.image" :alt="salon.name">
            </figure>
          </div>
        </div>
      </div>
      <div v-else class="section">
        <div v-if="!stylist.id">
          <p class="is-size-5">Now select your stylist</p>
          <br>
        </div>
        <div class="columns is-multiline is-mobile">
          <div v-for="(stylist, i) in salonStylists" class="column">
            <button
                class="button is-small is-level is-outlined"
                :key="i"
                :class="{ 'activeStylist': i === activeItem}"
                @click="SELECT_LEVEL(levels.filter(l => l.id === stylist.level)[0]);
                SELECT_STYLIST(stylist);
                selectItem(i);"
            >
              {{ stylist.first_name }}
            </button>
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex"

export default {
  data() {
    return {
      isOpen: true,
      activeItem: null
    }
  },

  computed: {
    ...mapState([
        'salons',
        'salon',
        'stylists',
        'stylist',
        'levels'
    ]),

    ...mapGetters([
        'salonStylists'
    ])
  },

  methods: {
    ...mapMutations([
        'UPDATE_SALON',
        'SELECT_STYLIST',
        'SELECT_LEVEL'
    ]),

    selectItem(i) {
      this.activeItem = i
    }
  }
}
</script>