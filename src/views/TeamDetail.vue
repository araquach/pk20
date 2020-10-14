<template>
  <div id="team_ind">
    <div class="columns">
      <div class="column section">
        <figure class="image">
          <img :src="teamMember.image" :alt="teamMember.first_name">
        </figure>
        <div id="feedback_feed_ind" class="box is-shadowless">
          <ReviewFeed/>
        </div>
      </div>
      <div class="column section is-size-6 is-size-5-mobile">
        <h2 class="title is-3 has-text-primary">{{ staffMember }}</h2>
        <p>{{ teamMember.para_1 }}</p>
        <p>{{ teamMember.para_2 }}</p>
        <p>{{ teamMember.para_3 }}</p>
        <p class="has-text-weight-bold is-size-5 is-bold">Average Cut &amp; Colour price with {{ teamMember.first_name }} : &pound;{{ teamMember.price }}*</p>
        <div class="team-ind-bottom">
          <router-link class="button is-primary" :to="{ name: 'reviews', params: 'slug' }">More of {{ teamMember.first_name }}'s reviews here</router-link>
          <br><br>
          <router-link class="button is-primary" :to="{ name: 'team' }">Back to the full team</router-link>
          <br><br>
          <div id="fb-like">
            <div class="fb-like" :data-href="fbLink" data-width="250" data-layout="button" data-action="like" data-show-faces="true" data-share="true"></div>
          </div>
          <section>
            <p class="has-text-centered is-size-7">*average prices for half-head foils or equivalent plus a Cut Dry and Style - before any discounts</p>
          </section>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import ReviewFeed from "../components/ReviewFeed"

  export default {
    components: { ReviewFeed },

    data() {
      return {
        teamMember: {}
      }
    },

    mounted() {
      axios.get(`/api/team/${this.$route.params.slug}`)
          .then(response => this.teamMember = response.data)
          .catch(error => {
            console.log(error)
          })
    },

    computed: {
      staffMember() {
        return this.teamMember.first_name + " " + this.teamMember.last_name
      },

      fbLink() {
        return  "http://www.paulkemphairdressing.com/" + this.teamMember.slug
      }
    }
  }
</script>