<template>
  <div id="ind-offer">
    <div class="columns">
      <div class="column is-8">
        <div class="top section">
          <h2 class="title is-2 is-size-4-mobile has-text-primary">Special offer with Jo</h2>
          <p class="is-size-5">Jo is one of the longest standing members of th PK team and is a sought after hairdreser.</p>

          <p class="is-size-4"><strong>If you're considering a new stylist then take advantage of this great offer with her&hellip;</strong></p>
        </div>
      </div>
    </div>
    <figure class="image">
      <img src="/dist/img/offer/jo_montage.png" alt="Jo's Offer">
    </figure>
    <div class="columns">
      <div class="column is-8">
        <div class="section">
          <p class="is-size-5"><strong>Come in for a FREE consultation and if you like the ideas Jo comes up with then book in to get 25% off your visit!</strong></p>
          <p class="is-size-4"><strong>Call 01925 444488 to book</strong><br>
            or use our online booking (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends 31/03/20 - Skin Test required 48 hrs before any colour service for new clients)</p>
          <router-link :to="{ name: 'team-detail', params: { slug: 'jo' } }" class="button is-primary">Find out more about Jo</router-link>
          <br><br>

          <div id="fb-like">
            <div class="fb-like" data-href="https://www.paulkemphairdressing.com/offers/jo" data-width="250" data-layout="standard" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>