<template>
  <header class="hero is-primary is-bold">
    <div class="hero-body">
      <b-navbar class="is-transparent">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="/dist/img/header/pk_logo_white.png">
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item tag="router-link" :to="{ name: 'home' }">
            Home
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ name: 'salon' }">
            Salon
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ name: 'team' }">
            Team
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ name: 'prices' }">
            Prices
          </b-navbar-item>
<!--          <b-navbar-item tag="router-link" :to="{ name: 'offers' }">-->
<!--            Offers-->
<!--          </b-navbar-item>-->

          <b-navbar-dropdown label="More">
<!--            <b-navbar-item tag="router-link" :to="{ name: 'corona' }">-->
<!--              COVID Guidelines-->
<!--            </b-navbar-item>-->
            <b-navbar-item tag="router-link" :to="{ name: 'blog' }">
              Blog
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'men' }">
              Men
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'reviews', params: { slug: 'all' } }">
              Reviews
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'recruitment' }">
              Recruitment
            </b-navbar-item>
          </b-navbar-dropdown>
        </template>
        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <router-link class="button is-primary" :to="{ name: 'contact' }">
                Contact Us
              </router-link>
<!--              <router-link class="button is-light" :to="{ name: 'bookings' }">-->
<!--                Book Now-->
<!--              </router-link>-->
              <a href="https://phorest.com/book/salons/paulkemp" class="button is-light">
                <strong>Book Now</strong>
              </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </header>
</template>
<script>

</script>