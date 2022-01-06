<template>
  <div>
    <section v-if="!hideOffers" id="offers" class="section">
      <div class="columns">
        <div class="column is-9">
          <h1 class="title is-2 has-text-primary">Special Offers this {{ showMonth }}</h1>
        </div>
      </div>
      <abi-offer v-if="showOffers.abi"/>
      <lauren-offer v-if="showOffers.lauren"/>
      <brad-offer v-if="showOffers.brad"/>
      <david-offer v-if="showOffers.david"/>
      <jo-offer v-if="showOffers.jo"/>
      <br><br>
      <div class="fb-like" data-href="http://www.paulkemphairdressing.com/offers" data-width="250" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
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
  import bradOffer from "../../components/offers/Brad"
  import abiOffer from "../../components/offers/Abi"
  import laurenOffer from "../../components/offers/Lauren"
  import joOffer from "../../components/offers/Jo"

  export default {
    components: {
      davidOffer,
      bradOffer,
      abiOffer,
      laurenOffer,
      joOffer
    },

    data() {
      return {
        showOffers: {
          david: false,
          brad: true,
          lauren: true,
          jo: false,
          abi: true
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