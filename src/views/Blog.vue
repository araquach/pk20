<template>
  <div id="blog" class="section is-size-5-mobile">
    <div v-for="blog in blogPosts" class="columns box has-margin-3">
        <div class="column is-5">
          <figure class="image">
            <img :src="blog.image">
          </figure>
        </div>
        <div class="column">
          <h2 class="title is-4">{{ blog.title }}</h2>
          <div v-html="blog.body">
            <p>{{ blog.body }}</p>
          </div>
          <router-link :to="{ name: 'blog-post', params: { slug: blog.slug } }" class="button is-primary">Read More ></router-link>
          <br><br>
          <p>Published by {{ blog.author }}</p>
          <p class="is-size-7">{{blog.date | moment("MMMM Do YYYY") }}</p>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        blogPosts: []
      }
    },

    mounted() {
      axios.get("/api/blog-posts").then(response => this.blogPosts = response.data)
          .catch(error => {
            console.log(error)
          })
    }
  }
</script>