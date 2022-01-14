<template>
  <router-link :to="{  name: 'abi-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/abi.png" alt="Abi Clarke">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">25% off your first visit to Abi</h2>
          <p>Abi is an awesome stylist and a previous member of the GHD Style Squad!</p>
          <p class="is-size-4"><strong>A Colour & Cut from just £70</strong></p>
          <p>Click for more info ></p>
          <small class="is-size-7">For New Clients - not with any other offer - offer ends {{ endDate }}<br>Skin test required 48hrs before any colour service</small>
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