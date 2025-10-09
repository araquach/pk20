<template>
  <router-link :to="{ name: 'autumn-winter-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/aw24/aw24_square.png" alt="Offers">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Special Autumn Offer</h2>
          <p class="is-size-4">Treat yourself to the hair you’ve always wanted this year and take advantage of our exclusive <strong>new client
            offer</strong>.</p>
          <p>Anyone new to <strong>Paul Kemp Hairdressing</strong> gets <strong>25% off</strong> their first ever appointment!</p>
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