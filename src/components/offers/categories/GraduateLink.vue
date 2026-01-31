<template>
  <router-link :to="{ name: 'graduate-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/march26_graduate_square.jpg" alt="Graduate Offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">Graduate Colour & Cut Package</h2>
          <p class="is-size-4">Special Offer with Becky</p>
          <p>Anyone new to <strong>Paul Kemp Hairdressing</strong> can take advantage of this offer for a limited time</p>
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