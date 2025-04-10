<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">Exclusive for New Clients</h2>
          <h2 class="title is-2 is-size-4-mobile has-text-primary">25% OFF plus a FREE Consultation</h2>
          <p class="is-size-4">Get incredible value with our talented team of stylists!</p>
          <p class="is-size-5"><strong>Book now</strong> and choose from a range of stylist levels based on your desired style and budget.</p>
          <p class="is-size-5">Whether you’re after a precision cut, creative colouring, or a full transformation, we’ve got the perfect stylist for you!</p>
          <h3 class="title is-3 has-text-primary mt-6">Average Colour & Cut price for...</h3>
          <ul class="is-size-5">
            <li class="mb-3">Advanced Senior Stylist: <strong>£170</strong> (£130 inc discount)</li>
            <li class="mb-3">Senior Stylist: <strong>£160</strong> (£120 inc discount))</li>
            <li class="mb-3">Advanced Stylist: <strong>£140</strong> (£105 inc discount)</li>
            <li class="mb-3">Stylist: <strong>£120</strong> (£90 inc discount)</li>
            <li>Graduate Stylist: <strong>£100</strong> (£75 inc discount)</li>
          </ul>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/feb25_wide.png" alt="New Client Offer">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book in for a FREE consultation with any of our stylists to take advantage of this amazing offer!</strong></p>
          <p class="is-size-4">Limited slots available, so don’t miss out!</p>
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