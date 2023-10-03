<template>
  <router-link :to="{  name: 'autumn-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/autumn.png" alt="Autumn Offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">25% OFF Autumn Appointments</h2>
          <h3>for new clients at Paul Kemp Hairdressing</h3>
          <p class="is-size-4">Offering all first-time clients the opportunity to <strong>step into Autumn</strong> with confidence!</p>
          <p class="is-size-5">Find out more here ></p>
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
<style scoped>
h2, h3 {
  margin: 0 !important;
}

h2 {
  margin-bottom: .5rem !important;
}

h3 {
  font-size: 1.5rem !important;
  margin-bottom: 2rem !important;
}
</style>