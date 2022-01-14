<template>
  <router-link :to="{ name: 'david-lauren-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/david_lauren.png" alt="David & Lauren">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Special offer with David & Lauren</h2>
          <p>These two talented stylists are running a special offer this month...</p>
          <p class="is-size-4"><strong>25% off your first Visit</strong></p>
          <p>A Colour & Cut from just £70</p>
          <p>Find out more here ></p>
          <small class="is-size-7">For New Clients to PK - not with any other offer - offer ends {{ endDate }}<br>Skin test required 48hrs before any colour service</small>
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