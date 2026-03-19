<template>
  <div id="home">
    <div class="hero home-image-mobile is-fullheight is-hidden-tablet">
      <div class="hero-body">
      </div>
    </div>
    <div class="columns is-marginless">
      <div class="column is-5 is-offset-7">
        <section class="section is-size-5-mobile">
          <h2 class="title 2 has-text-primary has-text-centered">A New Chapter</h2>
          <p>After many years as Paul Kemp Hairdressing, our Sankey Street salon is entering an exciting new chapter.</p>
          <p>Following a complete refurbishment of the space, we’re introducing</p>
          <div class="has-text-centered mb-3">
            <img src="/dist/img/logos/sloane_logo.png" class="sloane-logo" alt="Sloane The Salon">
          </div>
          <p>A refined evolution of the salon you’ve always known.</p>
          <p>While the name and environment are changing, the heart of what we do remains exactly the same: exceptional hair, thoughtful service, and the talented team you trust.</p>
          <p><em>Over the coming months you’ll see the new identity gradually introduced as we transition into this next phase. For now, simply enjoy the refreshed space and the same great experience you’ve always had with us.</em></p>
          <div class="buttons is-right">
            <router-link :to="{ name: 'rebrand'}" class="button is-primary is-size-4-mobile">Find out more</router-link>
          </div>
          <section id="feedback-feed-container">
            <div id="feedback_feed" class="box">
              <ReviewFeed :staffMember="staffMember"/>
              <router-link :to="{ name: 'reviews', params: { slug: 'all' } }">More reviews here</router-link>
            </div>
          </section>
        </section>
      </div>
    </div>
    <div class="columns">
      <div v-for="(newsItem, id) in homeNewsItems" class="section column blog-links">
        <router-link :to="{ name: 'blog-post', params: { slug: newsItem.slug } }">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="newsItem.image" :alt="newsItem.alt">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title has-text-white is-5 is-4-mobile">{{ newsItem.title }}</h2>
                </div>
              </div>
              <div class="content is-size-7 is-size-5-mobile">
                <p class="is-size-7 is-size-5-mobile has-text-white" v-html="$options.filters.textLimit(newsItem.body, 120) + '...'"></p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import NewsItem from "../components/NewsItem"
  import ReviewFeed from "../components/reviewFeed/ReviewFeed"

  export default {
    components: { NewsItem, ReviewFeed },

    data() {
      return {
        staffMember: ''
      }
    },

    computed: {
      ...mapGetters([
          'homeNewsItems'
      ])
    }

  }
</script>
<style scoped>
.sloane-logo {
  width: 70%;
}

@media screen and (max-width: 768px) {
  .buttons.is-right {
    justify-content: center !important;
  }
}

</style>