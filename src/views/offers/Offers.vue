<template>
  <div>
    <section v-if="!hideOffers" id="offers" class="section">
      <div class="columns">
        <div class="column is-9">
          <h1 class="title is-2 has-text-primary">Latest Offers</h1>
        </div>
      </div>
      <general-offer v-if="showOffers.general"/>
      <eve-offer v-if="showOffers.eve"/>
      <lauren-offer v-if="showOffers.lauren"/>
      <brad-offer v-if="showOffers.brad"/>
      <david-offer v-if="showOffers.david"/>
      <jo-offer v-if="showOffers.jo"/>
      <david-lauren-offer v-if="showOffers.davidLauren"/>
      <jo-brad-abi-offer v-if="showOffers.joBradAbi"/>
      <autumn-offer v-if="showOffers.autumn"/>
      <new-year v-if="showOffers.newYear"/>
      <spring v-if="showOffers.spring"/>
      <extensions v-if="showOffers.extensions"/>
      <autumnWinter v-if="showOffers.autumnWinter"/>
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
import davidOffer from "../../components/offers/David"
import eveOffer from "../../components/offers/Eve.vue"
import bradOffer from "../../components/offers/Brad"
import abiOffer from "../../components/offers/Abi"
import laurenOffer from "../../components/offers/Lauren"
import joOffer from "../../components/offers/Jo"
import davidLaurenOffer from "../../components/offers/DavidLauren"
import joBradAbiOffer from "../../components/offers/JoBradAbi"
import generalOffer from "../../components/offers/November"
import autumnOffer from "../../components/offers/Autumn.vue"
import newYear from "../../components/offers/NewYear.vue"
import spring from "../../components/offers/Spring.vue"
import extensions from "../../components/offers/Extensions.vue"
import autumnWinter from "../../components/offers/winter24/AutumnWinter.vue"

export default {
  components: {
    davidOffer,
    bradOffer,
    eveOffer,
    abiOffer,
    laurenOffer,
    joOffer,
    davidLaurenOffer,
    joBradAbiOffer,
    generalOffer,
    autumnOffer,
    newYear,
    spring,
    extensions,
    autumnWinter
  },

  data() {
    return {
      showOffers: {
        general: false,
        david: false,
        brad: false,
        lauren: false,
        jo: false,
        eve: false,
        davidLauren: false,
        joBradAbi: false,
        autumn: false,
        newYear: false,
        spring: false,
        extensions: false,
        autumnWinter: false
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