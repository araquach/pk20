<template>
  <div>
    <section id="offers" class="section">
      <div class="columns">
        <div class="column is-9">
          <h1 class="title is-2 has-text-primary">Latest Special Offers</h1>
        </div>
      </div>
      <router-link :to="{  name: 'abi-offer' }">
        <div class="box">
          <div class="columns">
            <div class="column">
              <img src="/dist/img/offer/abi.png" alt="Abi Clarke">
            </div>
            <section class="column is-8">
              <h2 class="title is-3">25% off your first visit to Abi</h2>
              <p>Abi is an awesome stylist and a member of the GHD Style Squad!</p>
              <p class="is-size-4"><strong>A Colour & Cut from just £60</strong></p>
              <p>Click for more info ></p>
              <small class="is-size-7">For New Clients - not with any other offer <br>Skin test required 48hrs before any colour service</small>
            </section>
          </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'david-offer' }">
        <div class="box">
          <div class="columns">
            <div class="column">
              <img src="/dist/img/offer/david.png" alt="David Randles">
            </div>
            <section class="column is-8">
              <h2 class="title is-3">Special Limited offer with David</h2>
              <p>Our super-talented stylist is looking to take on new clients.</p>
              <p class="is-size-4"><strong>25% off your first Visit</strong></p>
              <p>A Colour & Cut from just £50</p>
              <p>Find out more here ></p>
              <small class="is-size-7">For New Clients - not with any other offer<br>Skin test required 48hrs before any colour service</small>
            </section>
          </div>
        </div>
      </router-link>
      <a href="https://phorest.com/book/salons/paulkemp" class="button is-primary">Book Now</a>
      <br><br>
      <div class="fb-like" data-href="http://www.paulkemphairdressing.com/offers" data-width="250" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
    </section>
  </div> <!--end #offers-->
</template>