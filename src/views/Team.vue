<template>
  <div id="team">
    <div class="section columns is-multiline">
      <div v-for="(tm, id) in teamMembers" class="column is-4">
        <router-link :to="{ name: 'team-detail', params: { slug: tm.slug} }">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="tm.image" :alt="tm.first_name">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-3 has-text-primary">{{ tm.first_name }} {{tm.last_name}}</p>
                  <p class="subtitle has-text-primary">{{ tm.level }}</p>
                </div>
              </div>
              <div class="content is-size-5-mobile">
                <p>{{ tm.para_1 }}</p>
                <p>{{ tm.para_2 }}</p>
                <p>{{ tm.para_3 }}</p>
                <p class="price">Average Cut &amp; Colour price with {{ tm.first_name }} : &pound;{{ tm.price }}*</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="level">
      <p class="level-item"><strong class="price">*average prices for half-head foils or equivalent plus a Cut Dry and Style - before any discounts</strong></p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teamMembers: []
      }
    },

    mounted() {
      axios.get("/api/team").then(response => this.teamMembers = response.data)
          .catch(error => {
            console.log(error)
          })
    }
  }
</script>
