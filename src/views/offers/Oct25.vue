<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 has-text-primary mb-3">Treat yourself to a new look!</h2>
          <h2 class="title is-4 has-text-primary">Take advantage of our exclusive new client offer</h2>
          <h2 class="title-new-mid is-2 mb-0"><strong>25% OFF your first visit!</strong></h2>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/oct25_wide.png" alt="New Client Offer">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book in for a FREE consultation with one of our talented stylists to take advantage of our new client offer.  We have stylists for a variety of budgets. </strong></p>
          <h3 class="title is-3 has-text-primary">Average Colour & Cut price for...</h3>
          <ul class="is-size-5">
            <li class="mb-3"><strong>Advanced Senior Stylist: £170 (£130 inc discount)</strong></li>
            <li class="mb-3"><strong>Senior Stylist: £160 (£120 inc discount))</strong></li>
            <li class="mb-3"><strong>Stylist: £130 (£100 inc discount)</strong></li>
            <li><strong>Graduate Stylist: £100 (£75 inc discount)</strong></li>
          </ul>
          <br>
          <router-link class="button is-primary" :to="{ name: 'team' }">Browse Stylists</router-link>
          <a class="button is-primary" href="https://www.phorest.com/salon/paulkemp/book/service-selection?showSpecialOffers=false">Book a Consultation</a>
          <br><br>
          <p class="small">25% off when you book with one of our stylists. – Offer valid until {{ endDate }} – Cannot be used in conjunction with any other offer – Skin Test required 48 hrs before any colour service – Offer exclusively for new clients – Choose your stylist level based on style and budget – Quote NEWCLIENT25 at the time of booking to secure this discount.</p>
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