<template>
  <router-link :to="{ name: 'brad-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/brad.png" alt="Brad">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Special offer with Brad</h2>
          <p>Senior Stylist Brad produces some incredible looks!</p>
          <p>For a limited time take advantage of this great offer with him</p>
          <p class="is-size-4"><strong>25% off your first Visit</strong></p>
          <p>A Colour & Cut from just £80</p>
          <p>Find out more here ></p>
          <small class="is-size-7">For New Clients to Brad - not with any other offer - offer ends {{ endDate }}<br>Skin test required 48hrs before any colour service</small>
        </section>
      </div>
    </div>
  </router-link>
</template>
<script>
import { format, endOfMonth } from 'date-fns'
export default {
  computed: {
    endDate() {
      const today = new Date()
      return format(endOfMonth(today), "dd/MM/yy")
    }
  }
}
</script>