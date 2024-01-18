<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 has-text-primary">New Year Offer</h2>
          <p class="is-size-4">£20 off all hair cuts when you book in as a new client for a colour this January and February.</p>
          <p class="is-size-5"><strong>New clients get new hair and money off at Paul Kemp Hairdressing.</strong></p>
        </div>
      </div>
    </div>

    <figure class="image">
      <img alt="New Year Offer" src="/dist/img/offer/new_year_offer_23.png">
    </figure>

    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book in for a FREE consultation with Brad, Lauren or Jo to take advantage of our New Year offer.</strong></p>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book a FREE Consultation</a>
          </div>
          <p class="is-size-7">(Select any of the above stylists from the dropdown)</p>
          <p class="is-size-5"><strong>or call 01925 444488 to book</strong></p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><strong>Offer Code: PK NEW YEAR</strong></p>
          <p class="small">(Offer valid until 29.02.2024 - Cannot be used in conjunction with any other offer - Skin Test required 48 hrs before any colour service - offer exclusively for clients new to Paul Kemp Hairdressing - Quote PK NEW YEAR at time of booking to secure this discount)</p>
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