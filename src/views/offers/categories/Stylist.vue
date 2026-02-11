<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary mb-3">Beautiful Results, Expertly Delivered</h2>
          <h2 class="title is-4 is-size-6-mobile has-text-primary">Full colour, Cut & Blowdry for £100 with Lauren</h2>
          <p class="is-size-4">Whether you’re new to Paul Kemp Hairdressing or visiting us for the first time, this offer is designed to introduce you to our more advanced stylist team with clear, all inclusive pricing on your first appointment.</p>
          <p class="is-size-5">Enjoy a complete colour service with expert consultation, precision cutting and a polished finish, perfect if you’re looking for high level results with no surprises on price.</p>
        </div>
      </div>
    </div>
    <!-- Original image (hidden on mobile) -->
    <figure class="image is-hidden-mobile">
      <img src="/dist/img/offer/march26_stylist_wide.jpg" alt="Special Colour Package" class="mb-6">
    </figure>
    <!-- Square image (hidden on tablet and up) -->
    <figure class="image is-square is-hidden-tablet">
      <img src="/dist/img/offer/march26_stylist_square.png" alt="Special Colour Package" class="mb-6">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book a full Colour, Cut and Blowdry with our experienced stylist Lauren at a special first visit price, available for a limited time for new clients. </strong></p>
          <h2 class="title is-4 mb-1">Full Colour, Cut and Blowdry</h2>
          <p class="is-size-4">£100 with Lauren (usually £140)</p>
          <p class="is-size 4 mb-2"><strong>You can check out her work here:</strong></p>
          <a href="https://www.instagram.com/laurenw_hairr" class="is-size-4 has-text-primary">Lauren: @laurenw_hairr</a>
          <h2 class="title is-4 mt-5 mb-3">What’s included?</h2>
          <ul>
            <li>Full colour (excludes colour correction services)</li>
            <li>Bespoke treatment</li>
            <li>Cut & Blowdry</li>
          </ul>
          <h2 class="title is-4 mt-5 mb-3">Why book this?</h2>
          <ul class="mb-4">
            <li>Expert colour and cutting from our senior team</li>
            <li>Clear, all inclusive pricing for your first visit</li>
            <li>A confident introduction to Paul Kemp Hairdressing</li>
          </ul>
          <p class="mb-5"><em>If you're looking for a more affordable option <router-link :to="{name: 'graduate-offer'}" class="has-text-primary"><strong>click here</strong></router-link></em></p>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book a FREE Consultation</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444488</strong></p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><em>An ideal first appointment if you’re looking for professional, polished results delivered by an experienced stylist.</em></p>
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