<template>
  <router-link :to="{ name: 'becky-blowdry-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/becky_blowdry_square.jpg" alt="Blow Dry and Treatment">
        </div>
        <section class="column is-8">
          <h2 class="title is-3">A Little Hair Reset with Becky</h2>
          <p class="is-size-4">A Blowdry and complimentary personalised hair treatment for just £20!</p>
          <p>For new and existing clients of <strong>Paul Kemp Hairdressing</strong> for a limited time</p>
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