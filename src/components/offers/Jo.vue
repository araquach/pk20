<template>
  <router-link :to="{ name: 'jo-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/jo.png" alt="Jo">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Special offer with Senior Stylist Jo</h2>
          <p class="is-size-4"><strong>25% off your first Visit</strong></p>
          <p class="is-size-5">A Colour & Cut from just £90</p>
          <p class="is-size-4">Find out more here ></p>
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