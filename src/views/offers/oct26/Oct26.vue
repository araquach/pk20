<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary mb-3">Ready for an Autumn reset?</h2>
          <h2 class="title is-4 is-size-6-mobile has-text-primary">Enjoy <strong>25% OFF</strong> your first appointment at Sloane The Salon.</h2>
          <p class="is-size-4">Considered hairdressing, tailored to you. Our experienced team combines expertise, creativity and a personal approach to create hair that feels entirely your own.</p>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/oct_26.png" alt="Autumn Offer">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <h2 class="title is-4 mb-3">Why book with us?</h2>
          <ul class="is-size-5 mb-6">
            <li>- Complimentary, in depth consultation</li>
            <li>- Expert colour, cutting and styling</li>
            <li>- A considered, personalised approach</li>
            <li>- Beautiful hair, tailored to you and your lifestyle</li>
          </ul>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book a FREE Consultation</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444488</strong></p>
          <p>Just mention the offer at the time of your visit</p>
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