<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">Special introductory offer with Lauren</h2>
          <p class="is-size-5">Lauren recently returned to PK after helping launch our Base Hair Academy</p>
          <p>She's excited to rejoin her former team and is looking forward to building her client base</p>
          <p class="is-size-4"><strong>If you're considering a new stylist then take advantage of this great offer with
            her&hellip;</strong></p>
        </div>
      </div>
    </div>

    <figure class="image">
      <img alt="Lauren's Offer" src="/dist/img/offer/lauren_montage.png">
    </figure>

    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Come in for a FREE consultation and if you like the ideas Lauren comes up with
            then get 25% off your first visit to her</strong></p>
          <p class="is-size-4"><strong>Call 01925 444488 to book</strong><br>
            or book your consultation online (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - for new clients
            to Lauren)</p>
          <router-link :to="{ name: 'team-detail', params: { slug: 'lauren' } }" class="button is-primary">Find out more
            about Lauren
          </router-link>
          <br><br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {format, endOfMonth} from 'date-fns'

export default {
  computed: {
    endDate() {
      const today = new Date()
      return format(endOfMonth(today), "dd/MM/yy")
    }
  }
}
</script>