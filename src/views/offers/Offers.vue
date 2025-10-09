<template>
  <div>
    <section v-if="!hideOffers" id="offers" class="section">
      <div class="columns">
        <div class="column is-9">
          <h1 class="title is-2 has-text-primary">Latest Offers</h1>
        </div>
      </div>
      <general-offer v-if="showOffers.general"/>
      <new-year v-if="showOffers.newYear"/>
      <extensions v-if="showOffers.extensions"/>
      <br><br>
      <div class="fb-like" data-href="http://www.paulkemphairdressing.com/offers" data-width="250"
           data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
    </section>
    <section v-else class="section hero is-fullheight">
      <div class="columns">
        <div class="column is-9">
          <h1 class="title is-2 has-text-primary">New Special Offers Coming...</h1>
          <p class="is-size-4">Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {mapState} from "vuex"
import format from "date-fns/format"
import generalOffer from "../../components/offers/Oct25.vue"
import newYear from "../../components/offers/NewYear.vue"
import extensions from "../../components/offers/Extensions.vue"

export default {
  components: {
    generalOffer,
    newYear,
    extensions
  },

  data() {
    return {
      showOffers: {
        general: true,
        newYear: false,
        extensions: false,
      }

    }
  },

  computed: {
    ...mapState({
      hideOffers: state => state.pk.hideOffers
    }),

    showMonth() {
      return format(new Date(), "MMMM")
    }
  }
}
</script>