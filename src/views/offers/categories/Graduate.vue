<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary mb-3">Refined Colour, Confidently Delivered</h2>
          <h2 class="title is-4 is-size-6-mobile has-text-primary">Full colour, cut & blowdry for £80 — exceptional quality for new clients</h2>
          <p class="is-size-4">This offer is perfect for new clients who want high quality results with excellent value on their first visit to Paul Kemp Hairdressing. </p>
          <p class="is-size-5">Our Graduate Stylist Becky has recently completed advanced training and continues to refine her craft within the salon, delivering professional results with confidence and care.</p>
        </div>
      </div>
    </div>
    <!-- Original image (hidden on mobile) -->
    <figure class="image is-hidden-mobile">
      <img src="/dist/img/offer/march26_graduate_wide.jpg" alt="Special Colour Package" class="mb-6">
    </figure>
    <!-- Square image (hidden on tablet and up) -->
    <figure class="image is-square is-hidden-tablet">
      <img src="/dist/img/offer/march26_graduate_square.jpg" alt="Special Colour Package" class="mb-6">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book in with our Graduate Stylist Becky at a special first visit price, available for a limited time.</strong></p>
          <h2 class="title is-4 mb-1">Full Colour, Cut and Blowdry</h2>
          <p class="is-size-4">£80 with our Graduate Stylist Becky (usually £100)</p>
          <p class="is-size 4 mb-2"><strong>You can check out her work here:</strong></p>
          <a href="https://www.instagram.com/becky.y.hair" class="is-size-4 has-text-primary">@becky.y.hair</a>
          <h2 class="title is-4 mt-5 mb-3">What’s included?</h2>
          <ul>
            <li>Full colour (excludes colour correction services)</li>
            <li>Bespoke treatment</li>
            <li>Cut & Blowdry</li>
          </ul>
          <h2 class="title is-4 mt-5 mb-3">Why book this?</h2>
          <ul class="mb-4">
            <li>High quality results at a more accessible price point</li>
            <li>A great introduction to the salon for new clients</li>
            <li>Clear pricing with no surprises</li>
          </ul>
          <p class="mb-5"><em>If you're looking for a more advanced stylist <router-link :to="{name: 'stylist-offer'}" class="has-text-primary"><strong>click here</strong></router-link></em></p>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book a FREE Consultation</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444488</strong></p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><em>Ideal if you’re new to the salon and want beautiful results with excellent value on your first appointment</em></p>
          <p class="small">Offer valid until {{ endDate }} – Cannot be used in conjunction with any other offer – Skin Test required 48 hrs before any colour service – Offer exclusively for new clients</p>
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