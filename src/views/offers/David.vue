<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">Special introductory offer with David</h2>
          <p class="is-size-5">David joined the team earlier this year after completing his training at the Andrew Collinge Graduates Academy in Liverpool.</p>
          <p>He's fully settled into the PK team and is creating some stunning looks!</p>
          <p class="is-size-4"><strong>If you're considering a new stylist then take advantage of this great offer with him&hellip;</strong></p>
        </div>
      </div>
    </div>

    <figure class="image">
      <img src="/dist/img/offer/david_montage_2.png" alt="David's Offer">
    </figure>

    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Come in for a FREE consultation and if you like the ideas David comes up with then get 25% off your first visit to him</strong></p>
          <p class="is-size-4"><strong>Call 01925 444488 to book</strong><br>
            or book your consultation online (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service for new clients)</p>
          <router-link :to="{ name: 'team-detail', params: { slug: 'david' } }" class="button is-primary">Find out more about David</router-link>
          <br><br>

          <div id="fb-like">
            <div class="fb-like" data-href="https://www.paulkemphairdressing.com/offers/david" data-width="250" data-layout="standard" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
          </div>
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