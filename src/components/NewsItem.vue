<template>
  <div class="column">
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
              <p class="title is-6 is-size-4-mobile has-text-primary">{{ newsItem.title }}Test</p>
            </div>
          </div>
          <div class="content is-size-7 is-size-5-mobile">
            <p class="is-size-7 is-size-4-mobile has-text-primary" v-html="$options.filters.textLimit(newsItem.body, 120) + '...'">Hello!</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['newsItem']
  }
</script>