<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 has-text-primary">Celebrate the start of Spring with a Fresh Look!</h2>
          <p class="is-size-4"><strong>New Clients Exclusive: </strong>Enjoy £20 off all haircuts when you book a colour service this March and April!</p>
          <p class="is-size-4"><strong>Start the new season with a fresh look at Paul Kemp Hairdressing!</strong></p>
        </div>
      </div>
    </div>

    <figure class="image">
      <img alt="Spring Offer" src="/dist/img/offer/spring_wide.png">
    </figure>

    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book in for a FREE consultation with David, Eve and Shell to take advantage of our Spring offer.</strong></p>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
               class="button is-primary">Book a FREE Consultation</a>
          </div>
          <p class="is-size-7">(Select any of the above stylists from the dropdown)</p>
          <p class="is-size-5"><strong>Prefer to Book by Phone? Call Us on 01925 444488!</strong></p>
          <div class="box has-background-primary has-text-white">
            <div class="columns is-vcentered is-flex-tablet">
              <div class="column is-3">
                <img src="/dist/img/logos/base_logo.svg" alt="" width="170">
              </div>
              <div class="column">
                <p class="is-size-5">Looking for More Options? Discover Affordable Styles at Our Hair Academy. Check Out
                  Our Special Offers Today!</p>
                <div class="buttons is-flex is-justify-content-flex-end">
                  <a class="button is-small is-white" href="https://www.basehairdressing.com/offers/spring">Base Offers</a>
                </div>
              </div>
            </div>
          </div>
          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><strong>Offer Code: PK SPRING OFFER</strong></p>
          <p class="small">(Offer valid until {{ endDate }} - Cannot be used in conjunction with any other offer - Skin Test required 48 hrs before any colour service - offer exclusively for clients new to Paul Kemp Hairdressing - Quote PK SPRING OFFER at time of booking to secure this discount)</p>
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