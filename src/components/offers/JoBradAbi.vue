<template>
  <router-link :to="{ name: 'jo-brad-abi-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/jo_brad_abi.png" alt="Jo, Brad & Abi">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Special offer with Jo, Brad & Abi</h2>
          <p>These established stylists are looking to take on more new clients and are running this special offer...</p>
          <p class="is-size-4"><strong>25% off your first Visit</strong></p>
          <p>A Colour & Cut from just £85</p>
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