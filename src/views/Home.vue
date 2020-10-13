<template>
  <div id="home">
    <div class="hero home-image-mobile is-fullheight is-hidden-tablet">
      <div class="hero-body">
      </div>
    </div>
    <div class="columns">
      <div class="column is-5 is-offset-7">
        <section class="section is-size-5-mobile">
          <h2 class="title 2 has-text-primary has-text-centered">A New Standard of Hairdressing</h2>
          <p>Paul Kemp Hairdressing is located right in the heart of Warrington town centre. Sister salon to the award winning <em><a href="http://www.jakatasalon.co.uk/" target="_blank">Jakata</a></em>, the stunning salon opened in June 2011 with the aim to offer an ultra relaxing atmosphere, first class customer service, alongside the highest level of hairdressing expertise.</p>
          <p>The talented hairdressing team are all trained to the highest level in cutting, colouring and styling hair, with specialists in technical colour, hair straightening, wedding hair and hair extensions. The team has a wealth of experience in all aspects of hairdressing so you can just sit back, relax and enjoy the experience.</p>
          <p><em>The salon has built up a strong reputation for creating stunning, fashionable looks tailored to suit you, and your lifestyle, so if you're looking for a new <strong class="paraend">hairdressers in Warrington</strong> then look no further!</em></p>
          <section id="feedback-feed-container">
            <div id="feedback_feed" class="box">
              <ReviewFeed :staffMember="staffMember"/>
              <router-link :to="{ name: 'reviews' }">More reviews here</router-link>
            </div>
          </section>
        </section>
      </div>
    </div>

    <div v-for="newsItem in NewsItems" class="section columns">
      <NewsItem :news-item="newsItem"/>
    </div>
  </div>
</template>

<script>
  import NewsItem from "../components/NewsItem"

  export default {
    components: { NewsItem },

    data() {
      return {
        newsItems: [],
        staffMember: ''
      }
    },

    mounted() {
      axios.get("/api/news-items").then(response => this.newsItems = response.data)
          .catch(error => {
            console.log(error)
          })
    }
  }
</script>