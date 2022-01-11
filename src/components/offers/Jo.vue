<template>
  <router-link :to="{ name: 'jo-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/jo.png" alt="Jo">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Special offer with Jo</h2>
          <p>Senior Stylist Jo has heaps of experience and has been a PK team member since we opened our doors!</p>
          <p class="is-size-4"><strong>25% off your first Visit</strong></p>
          <p>A Colour & Cut from just £80</p>
          <p>Find out more here ></p>
          <small class="is-size-7">For New Clients to Jo - not with any other offer - offer ends {{ endDate }}<br>Skin test required 48hrs before any colour service</small>
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