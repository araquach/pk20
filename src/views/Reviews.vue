<template>
  <div id="reviews">
    <div class="columns section">
      <div class="column is-8">
        <h2 class="title is-3 has-text-primary">Some of our recent client reviews</h2>
        <h3 class="subtitle is-5 has-text-primary">Filter by stylist</h3>
        <div class="columns is-multiline is-mobile">
          <div v-for="tm in teamMembers" class="column is-3-desktop is-2-tablet is-4-mobile">
            <div class="card">
              <div class="card-image">
                <figure class="image is-small">
                  <img :src="tm.image">
                </figure>
              </div>
              <div class="card content has-background-primary">
                <div class="content has-text-white">
                  {{ tm.first_name }} {{ tm.last_name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-for="review in reviews" class="box">
          <p class="is-size-5">"{{ review.review }}"</p>
          <small>{{ review.client }}</small><br>
          <small>Hair by: {{ review.stylist }}</small>
        </div>
      </div>
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

    created() {
      let param = this.$route.params.slug
      if (this.$route.params.slug == null) {
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
  }
</script>