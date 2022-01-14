<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">Special offer with Abi</h2>
          <p class="is-size-5">Abi is an amazing stylist and a previous member of the GHD Style Squad!</p>
          <p class="is-size-4"><strong>If you're considering a new stylist then take advantage of this great offer with her&hellip;</strong></p>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/abi_montage.png" alt="Abi Clarke Offers">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p>Abi has been with the team for many years now and her work goes from strength to strength</p>
          <p class="is-size-5"><strong>Come in for a FREE consultation and if you like the ideas Abi comes up with then book in to get 25% off your visit!</strong></p>
          <p class="is-size-4"><strong>Call 01925 444488 to book</strong><br>
            or book your consultation online (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service for new clients)</p>
          <router-link :to="{ name: 'team-detail', params: { slug: 'abi' } }" class="button is-primary">Find out more about Abi</router-link>
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