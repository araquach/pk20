<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">New clients can transition seamlessly into the winter months with 25% OFF</h2>
          <p class="is-size-4">Prepare to embrace the brisk autumn breeze and the warm, golden tones it brings.</p>
          <p class="is-size-5">At <strong>Paul Kemp Hairdressing</strong>, we're dedicated to ensuring you effortlessly step into the winter season with a rejuvenated and stunning appearance, by offering an
            <strong>exclusive 25% discount for all first-time clients</strong> that book in October and November!</p>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/autumn_wide.png" alt="Autumn Offers">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book in for a FREE consultation with any of our stylists to take advantage of this autumn offer!</strong></p>
          <router-link class="button is-primary" :to="{ name: 'team' }">Browse Stylists</router-link>
          <router-link class="button is-primary" :to="{ name: 'bookings' }">Book a Consultation</router-link>
          <br><br>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer exclusively for clients new to Paul Kemp Hairdressing - Quote offer code AUTUMN OFFER at time of booking to secure this discount</p>
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