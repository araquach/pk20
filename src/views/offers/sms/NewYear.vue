<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 has-text-primary">Celebrate the New Year with a Fresh Look!</h2>
          <p class="is-size-3">We've Missed You and Can't Wait to Welcome You Back!</p>
          <p class="is-size-4">Enjoy an Exclusive £20 Discount on All Haircuts with Any Colour Service!</p>
          <p class="is-size-5"><strong>Make Your January and February Shine with a New Look at Paul Kemp Hairdressing.</strong></p>
        </div>
      </div>
    </div>

    <figure class="image">
      <img alt="New Year Offer" src="/dist/img/offer/new_year_sms_24.png">
    </figure>

    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Secure Your Spot! Book in for a FREE consultation with Brad, Lauren or Jo to take advantage of our
            New Year offer.</strong></p>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book Your FREE Consultation</a>
          </div>
          <p class="is-size-7">(Select any of the above stylists from the dropdown)</p>
          <p class="is-size-5"><strong>Prefer to Book by Phone? Call 01925 444488!</strong></p>

          <div class="box has-background-primary has-text-white">
            <div class="columns is-vcentered is-flex-tablet">
              <div class="column is-3">
                <img src="/dist/img/logos/base_logo.svg" alt="" width="170">
              </div>
              <div class="column">
                <p class="is-size-5">Looking for More Options? Discover Affordable Styles at Our Hair Academy. Check Out
                  Our Special Offers Today!</p>
                <div class="buttons is-flex is-justify-content-flex-end">
                  <a class="button is-small is-white" href="https://www.basehairdressing.com/sms/newyear">Base
                    Offers</a>
                </div>
              </div>
            </div>
          </div>

          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><strong>Offer Code: PK NEW YEAR</strong></p>
          <p class="small">Make the Most of This Offer! Valid Until {{ endDate }}. Terms Apply: Cannot be combined with
            other offers. A Skin Test is required 48 hrs before any colour service. Remember to Quote 'PK NEW YEAR'
            when booking.</p>
          <br><br>
        </div>
      </div>
    </div>
  </div>
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