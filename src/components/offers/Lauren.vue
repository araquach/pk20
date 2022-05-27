<template>
  <router-link :to="{ name: 'lauren-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/lauren_2022.png" alt="Lauren Watson">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Special offer with Lauren</h2>
          <p>Our talented Graduate Stylist is looking to take build her existing client base.</p>
          <p class="is-size-4"><strong>25% off your first Visit Lauren</strong></p>
          <p>A Colour & Cut from just £60</p>
          <p>Find out more here ></p>
          <small class="is-size-7">For New Clients to Lauren - not with any other offer - offer ends {{ endDate }}<br>Skin test required 48hrs before any colour service</small>
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