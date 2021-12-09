<template>
  <div id="link-tree" class="section columns is-centered">
    <div class="column is-8 has-text-centered is-size-5 has-text-weight-bold">
      <img src="/dist/img/linktree/pk-01.png" alt="Paul Kemp Hairdressing" width="130">
      <p class="is-size-4 has-text-weight-bold has-text-primary">@paulkemphairdressing1</p>
      <router-link :to="{ name: 'prices' }" class="box">
        Get a tailor made price with our quote generator
      </router-link>
      <router-link :to="{ name: 'team' }" class="box">
        Learn all about our amazing team members
      </router-link>
      <router-link :to="{ name: 'gift-voucher' }" class="box">
        Buy a Gift Voucher online
      </router-link>
      <router-link :to="{ name: 'reviews', params: {slug: 'all'} }" class="box">
        Read all of our incredible client reviews
      </router-link>
      <router-link :to="{ name: 'recruitment' }" class="box">
        Want to join our team? Apply here
      </router-link>
      <router-link v-for="newsItem in linkTreeNews" :key="newsItem.id" :to="{ name: 'blog-post', params: {slug: newsItem.slug} }" class="box">
        {{ newsItem.title }}
      </router-link>
      <div class="columns social is-mobile">
        <div class="column is-2 is-offset-2">
          <figure class="image is-square">
            <a href="https://www.instagram.com/paulkemphairdressing1">
              <img src="/dist/img/linktree/social/Insta2.svg" alt="Instagram">
            </a>
          </figure>
        </div>
        <div class="column is-2">
          <figure class="image is-square">
            <a href="https://www.facebook.com/PaulKempHairdressing">
              <img src="/dist/img/linktree/social/fb.svg" alt="Facebook">
            </a>
          </figure>
        </div>
        <div class="column is-2">
          <figure class="image is-square">
            <a href="https://twitter.com/paulkemphair">
              <img src="/dist/img/linktree/social/twitter.svg" alt="Twitter">
            </a>
          </figure>
        </div>
        <div class="column is-2">
          <figure class="image is-square">
            <a href="https://www.pinterest.co.uk/PKHairdressing/">
              <img src="/dist/img/linktree/social/pinterest.svg" alt="Pinterest">
            </a>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters([
        'linkTreeNews'
    ])
  }
}
</script>