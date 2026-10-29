<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary mb-3">A New Look. A Fresh Start.</h2>
          <h2 class="title is-3 is-size-3-mobile has-text-primary mb-4">Paul Kemp has become Sloane The Salon - and we'd love to welcome you back.</h2>
          <p class="is-size-4">We've completely transformed the salon, creating a beautiful new space with the same passion for exceptional hairdressing.</p>
          <p class="is-size-4">To celebrate our new chapter, we're treating you to <strong>25% off</strong> your next appointment this November.</p>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/lapsed_nov_26.jpg" alt="November Offer">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <h2 class="title is-4">Planning a colour appointment?</h2>
          <p class="is-size-5"><strong>As it's been a little while since your last visit, we may need to update your skin test before your colour service. You can arrange this with our team.</strong></p>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book your FREE Consultation</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444488</strong></p>
          <p>Just show the text message at the time of your visit</p>
          <p class="small">Offer valid until {{ endDate }} – Cannot be used in conjunction with any other offer – Skin Test required 48 hrs before any colour service</p>
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