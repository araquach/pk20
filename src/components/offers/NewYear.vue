<template>
  <router-link :to="{ name: 'new-year-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/new_year_offer_23_square.png" alt="New Year Offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">New Year Offer</h2>
          <p class="is-size-3"><strong>Treat yourself to some girl therapy this new year and take advantage of our exclusive new client offer</strong></p>
          <p class="is-size-5">New clients get new hair and money off at Paul Kemp Hairdressing</p>
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