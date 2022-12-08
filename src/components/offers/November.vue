<template>
  <router-link :to="{ name: 'general-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/november2.jpg" alt="November Offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Special offer for new clients</h2>
          <p>We're running this amazing offer throughout November</p>
          <p class="is-size-4"><strong>25% off your first Visit</strong></p>
          <p>Find out more here ></p>
          <small class="is-size-7">For New Clients to PK - not with any other offer - offer ends 30/11/22<br>Skin test required 48hrs before any colour service</small>
        </section>
      </div>
    </div>
  </router-link>
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