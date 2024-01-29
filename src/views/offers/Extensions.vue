<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 has-text-primary">Achieve Your Ideal Look: Special Offers on our Quality Hair Extensions</h2>
          <p class="is-size-4"><strong>Treat yourself to the thick long hair you’ve always wanted this year and take advantage of our exclusive new extensions offer.</strong></p>
          <p class="is-size-4">Get the hair extensions you've always wanted, we specialise in nano bonds, micro bonds, tapes, braided & micro bead wefts!</p>
        </div>
      </div>
    </div>

    <figure class="image">
      <img alt="Extensions Offer" src="/dist/img/offer/extensions_24_wide.png">
    </figure>

    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book in for a FREE consultation with any of our extension specialists and get a 20% discount off on our first-ever application.</strong></p>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book a FREE Extensions Consultation</a>
          </div>
          <p class="is-size-5"><strong>Prefer to Book by Phone? Call Us on 01925 444488!</strong></p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><strong>Offer Code: PK EXT</strong></p>
          <p class="small">Offer Valid until 30.03.2024 - Cannot be used in conjunction with any other offer - Skin Test required 48hrs before any colour service  - offer exclusively for anyone new to hair extensions at Paul Kemp Hairdressing - Quote PK EXT at the time of booking to secure this discount</p>
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