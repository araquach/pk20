<template>
  <router-link :to="{ name: 'extensions-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/extensions_24_square.png" alt="Extensions Offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Extensions Offer</h2>
          <p class="is-size-4"><strong>Treat yourself to the thick long hair you’ve always wanted this year and take advantage of our exclusive new extensions offer.</strong></p>
          <p class="is-size-5">Anyone new to hair extensions at Paul Kemp Hairdressing gets 20% off their first ever fitting!</p>
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