<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">Special offer for new clients</h2>
          <p class="is-size-5"></p>
          <p class="is-size-4"><strong>Take advantage of this amazing offer with any of our team members (subject to availability)</strong></p>
        </div>
      </div>
    </div>

    <figure class="image">
      <img alt="November Offer" src="/dist/img/offer/november.jpg">
    </figure>

    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Come in for a FREE consultation with one of our amazing team members and if you like what they come up with
            get 25% off your first visit to them!</strong></p>
          <p class="is-size-4"><strong>Call 01925 444488 to book</strong><br>
            or book your consultation online (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends 30/11/22 - Skin Test required 48 hrs before any colour service - for new clients
            to Lauren)</p>
          <router-link :to="{ name: 'prices'}" class="button is-primary">Use our quote generator to get an idea of prices</router-link>
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