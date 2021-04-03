<template>
  <div class="column">
    <router-link :to="{ name: 'reopening' }">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="https://7640aea0bc7c7ccd9594-a5dcc640caa66d050a2badccb70574e9.ssl.cf5.rackcdn.com/reopening/back_soon">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <h1 class="title is-5 is-size-4-mobile has-text-white">We'll be back soon!</h1>
            </div>
          </div>
          <div class="content is-size-7 is-size-5-mobile">
            <p class="is-size-7 is-size-4-mobile has-text-white">With the end of lockdown in sight we're getting ready for our big reopening!</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>