<template>
  <div id="reviews" class="columns section">
    <div class="column is-8">
      <h2 class="title is-3 has-text-primary">Some of our recent client reviews</h2>
      <h3 class="subtitle is-5 has-text-primary">Filter by stylist</h3>
      <div class="columns is-multiline is-mobile">
        <div v-for="tm in teamMembers" class="column is-2-desktop is-2-tablet is-4-mobile">
          <router-link :to="{ name: 'reviews', params: { slug: tm.slug } }">
            <div class="card">
              <div class="card-image">
                <figure class="image is-small">
                  <img :src="tm.image">
                </figure>
              </div>
              <div class="card content has-background-primary">
                <div class="content has-text-white">
                  {{ tm.first_name }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <h2 class="title is-4" >{{ stylist }} Reviews</h2>

      <div v-for="review in reviews" class="box">
        <p class="is-size-5">"{{ review.review }}"</p>
        <small>{{ review.client }}</small><br>
        <small>Hair by: {{ review.stylist }}</small>
      </div>
    </div>
    <div class="column">
      <img src="/dist/img/reviews/reviews-background.jpg">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        teamMembers: [],
        reviews: []
      }
    },

    methods: {
      loadData(route) {
        let param = route.params.slug
        if (route.params.slug == null) {
          param = "all"
        }

        axios.get('/api/reviews/' + param)
            .then(response => this.reviews = response.data)
            .catch(error => {
              console.log(error)
            })

        axios.get("/api/team").then(response => this.teamMembers = response.data)
            .catch(error => {
              console.log(error)
            })
      }
    },

    computed: {
      stylist() {
        name = this.$route.params.slug
        if (name !== "all") {
          return name.charAt(0).toUpperCase() + name.slice(1) + "'s"
        } else {
          return "All"
        }
      }
    },

    created() {
      this.loadData(this.$route)
    },

    watch: {
      $route(newRoute) {
        this.loadData(newRoute)
      }
    },
  }
</script>