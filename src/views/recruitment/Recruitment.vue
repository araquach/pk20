<template>
  <div id="recruitment">
    <div class="columns is-marginless">
      <div class="column is-6">
        <section class="section has-text-white">
          <h1 class="title is-2 has-text-white">Join the Team</h1>
          <p>The Paul Kemp Hairdressing team is growing fast. We're always looking for new talent to expand our already
            diverse team of hairdressers.</p>
          <p>We have positions for stylists of all levels with ongoing internal and external training to help you push
            the boundaries in your career.</p>
          <h3 class="title is-4 has-text-white">Stylist Position</h3>
          <p class="last">Paul Kemp Hairdressing is home to some extremely talented stylists. If you're creative,
            ambitious and have a natural flair for hairdressing then we could be the perfect environment to push your
            skills to the next level.</p>
          <router-link :to="{ name: 'recruitment-stylist' }" class="button is-primary">Apply for for a Stylist
            position
          </router-link>
          <br><br>
          <h3 class="title is-4 has-text-white">Apprentice Position</h3>
          <p>If you're just starting out on the road to becoming a hairdresser, choosing the right place to train and
            develop is one of the most important decisions you'll ever make!</p>
          <p>If you've already started out and feeling you're current training provider isn't fulfilling you're needs
            then we can step in and accelerate you're development.</p>
          <p><em><strong class="has-text-white">If you have the passion to do whatever it takes to be a top stylist then
            apply now!</strong></em></p>
          <router-link :to="{ name: 'recruitment-apprentice' }" class="button is-primary">Apply for for an Apprentice
            position
          </router-link>
          <br><br>
          <h3 class="title is-4 has-text-white">Saturday/Evening Work</h3>
          <p>If you're still at school/college and interested in a career in hairdressing then apply for
            Saturday/Evening work on our Pre-Apprenticeship scheme.</p>
          <router-link :to="{ name: 'recruitment-saturday' }" class="button is-primary">Apply for a Saturday/Evening
            position
          </router-link>
          <br><br>
          <p class="has-text-weight-bold is-size-4"><em>An amazing career starts here</em></p>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>