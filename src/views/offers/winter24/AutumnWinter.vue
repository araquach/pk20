<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">Special offer This Autumn</h2>
          <p class="is-size-3">Achieve your dream look with our expert stylists!</p>
          <p class="is-size-4">Specialising in balayage, vivid colours, and personalised treatments!</p>
        </div>
      </div>
    </div>

    <figure class="image">
      <img src="/dist/img/offer/aw24/aw24_wide.png" alt="Special Offer"/>
    </figure>

    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book in for a FREE consultation with any of our expert stylists and get a 25% discount off your first ever appointment.</strong></p>

          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book a FREE Consultation</a>
            <router-link class="button is-primary" :to="{ name: 'team' }">Browse our stylists</router-link>
          </div>
          <p class="is-size-4"><strong>Alternatively Call <strong>01925 444488</strong> to book</strong></p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Cannot be used in conjunction with any other offer - Only redeemable on staff available to book with online - Skin Test required 48hrs before any colour service  - offer exclusively for anyone new to Paul Kemp Hairdressing - Quote PK25 at the time of booking to secure this discount )</p>
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