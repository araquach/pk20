<template>
  <div id="blog" class="section is-size-5-mobile">
    <article class="columns has-background-white">
      <div class="column is-4">
        <figure class="image has-margin-5">
          <img :src="blogpost.image">
        </figure>
      </div>
      <div class="column section">
        <h2 class="title is-2">{{ blogpost.title }}</h2>
        <div v-html="blogpost.body" class="is-size-5">
          {{blogpost.body}}
        </div>
        <router-link :to="{ name: 'blog' }" class="button is-primary">Back to all the blogs</router-link>
        <br><br>
        <p class="is-size-7">Published by {{ blogpost.author }}<br>{{ blogpost.date }}</p>

        <div id="fb-like" class="section">
          <div class="fb-like" :data-href="fbLike" data-width="250" data-layout="standard" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        blogpost: {}
      }
    },

    computed: {
      fbLike() {
        return "https://www.paulkemphairdressing.com/blog/" + this.blogpost.slug
      }
    },

    created() {
      axios.get(`/api/blog-post/${this.$route.params.slug}`).then(response => this.blogpost = response.data)
          .catch(error => {
            console.log(error)
          })
    }
  }
</script>