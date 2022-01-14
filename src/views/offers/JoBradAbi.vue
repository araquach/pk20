<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">Special offer with Jo, Brad & Abi</h2>
          <p class="is-size-5">Three of our established stylists are looking to take on more new clients</p>
          <p class="is-size-4"><strong>If you're considering a new stylist then take advantage of this great offer with any of them&hellip;</strong></p>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/jo-brad-abi.png" alt="Jo, Brad & Abi Offers">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Come in for a FREE consultation with any of them and if you like the ideas they come up with book in to get 25% off your visit!</strong></p>
          <p class="is-size-4"><strong>Call 01925 444488 to book</strong><br>
            or book your consultation online (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - for new clients to PK)</p>
          <p>Find out more about these stylists - click their link below</p>
          <router-link :to="{ name: 'team-detail', params: { slug: 'jo' } }" class="button is-primary">About Jo</router-link>
          <router-link :to="{ name: 'team-detail', params: { slug: 'brad' } }" class="button is-primary">About Brad</router-link>
          <router-link :to="{ name: 'team-detail', params: { slug: 'abi' } }" class="button is-primary">About Abi</router-link>
          <br><br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  computed: {
    ...mapState({
      endDate: state => state.pk.endDate
    })
  }
}
</script>