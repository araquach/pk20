<template>
  <div id="link-tree" class="has-text-centered">
    <div class="pt-5">
     <router-link :to="{name: 'home'}">
       <img src="/dist/img/linktree/pk_logo.svg" alt="Base Hairdressing" width="200">
     </router-link>
    </div>
    <div class="section columns is-centered is-mobile">
      <div class="column is-9 has-text-centered is-size-5">
        <a v-if="$route.path === '/links'" href="https://www.salonhub.uk/skintest-in-salon/2" class="box lt-blog">
          <span class="title-new-mid has-text-white">SKIN TEST UPDATE</span>
        </a>
        <router-link :to="{ name: 'refer' }" class="box lt-refer">
          <span class="title-new-mid">REFER A FRIEND</span>
        </router-link>
        <router-link :to="{ name: 'team' }" class="box lt-team">
          <span class="title-new-mid">MEET THE TEAM</span>
        </router-link>
        <router-link :to="{ name: 'bookings' }" class="box lt-bookings">
          <span class="title-new-mid">BOOK ONLINE</span>
        </router-link>
        <router-link :to="{ name: 'prices' }" class="box lt-quote">
          <span class="title-new-mid">ONLINE QUOTE</span>
        </router-link>
        <router-link :to="{ name: 'recruitment'}" class="box lt-join-us">
          <span class="title-new-mid">JOIN THE TEAM</span>
        </router-link>
        <a href="https://www.basehairdressing.com/models" class="box lt-models">
          <span class="title-new-mid">MODEL SIGNUP</span>
        </a>
        <router-link :to="{ name: 'online-shop' }" class="box lt-shop">
          <span class="title-new-mid">THE PK SHOP</span>
        </router-link>
        <router-link :to="{ name: 'blog' }" class="box lt-blog">
          <span class="title-new-mid">THE PK BLOG</span>
        </router-link>
      </div>
    </div>
    <div class="columns link-tree-social is-mobile is-centered">
      <div class="column is-2 is-1-mobile">
        <figure class="image is-square">
          <a href="https://www.instagram.com/paulkemphairdressing1/">
            <img src="/dist/img/linktree/social/instagram.svg" alt="Instagram">
          </a>
        </figure>
      </div>
      <div class="column is-2">
        <figure class="image is-square">
          <a href="https://www.facebook.com/PaulKempHairdressing/">
            <img src="/dist/img/linktree/social/facebook.svg" alt="Facebook">
          </a>
        </figure>
      </div>
      <div class="column is-2">
        <figure class="image is-square">
          <a href="https://www.pinterest.co.uk/PKHairdressing/">
            <img src="/dist/img/linktree/social/pinterest2.svg" alt="Pinterest">
          </a>
        </figure>
      </div>
      <div class="column is-2">
        <figure class="image is-square">
          <a href="https://www.tiktok.com/@paulkemphairdressing">
            <img src="/dist/img/linktree/social/tiktok.svg" alt="TikTok">
          </a>
        </figure>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>