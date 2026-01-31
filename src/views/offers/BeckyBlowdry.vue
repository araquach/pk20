<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary mb-3">A Little Hair Reset with Becky</h2>
          <p class="is-size-4">Whether you’re new to Paul Kemp Hairdressing or already a client of Becky’s, this offer is designed to keep your hair healthy, glossy and feeling it’s best between colour or cut appointments.</p>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/becky_blowdry_wide.jpg" alt="Blowdry and Treatment" class="mb-6">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Book a blowdry and enjoy a complimentary personalised hair treatment, selected by our Graduate Stylist Becky to suit your hair’s specific needs.</strong></p>
          <h2 class="title is-4 mb-1">Blowdry & Complimentary Personalised Hair Treatment</h2>
          <p class="is-size-4">£20 with Becky (usually up to £40)</p>
          <p class="is-size 4 mb-2"><strong>You can check out her work here:</strong></p>
          <a href="https://www.instagram.com/becky.y.hair" class="is-size-4 has-text-primary">@becky.y.hair</a>
          <h2 class="title is-4 mt-5 mb-3">What’s included?</h2>
          <ul>
            <li>Blowdry</li>
            <li>Complimentary personalised hair treatment</li>
            <li>Tailored to your hair’s condition and needs</li>
          </ul>
          <h2 class="title is-4 mt-5 mb-3">Why book this?</h2>
          <ul class="mb-4">
            <li>Boosts hair health and shine</li>
            <li>Helps maintain colour and condition</li>
            <li>A relaxing, feel good reset without committing to a full service</li>
          </ul>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=c2Xu6QWmnm2TbJc2aSwzpw"
               class="button is-primary">Book Now</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444488</strong></p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><em>An ideal refresh if you’re not quite ready for your next full service, but you want your hair looking and feeling great.</em></p>
          <p class="small">Offer valid until {{ endDate }} – Cannot be used in conjunction with any other offer</p>
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