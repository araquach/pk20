<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Your chosen stylist</p>
      <button
          type="button"
          class="delete"
          @click="$emit('close')"/>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column is-4">
          <figure class="image">
            <img :src="staff.remote_image" :alt="staff.first_name">
          </figure>
        </div>
        <div class="column">
          <h2 class="title is-4">{{ fullName }}</h2>
          <p class="is-size-4 is-size-5-mobile">{{ staff.para_1}}</p>
          <p>{{ staff.para_2 }}</p>
          <p v-if="staff.para_3">{{ staff.para_3 }}</p>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button @click="SELECT_VIEW('TotalsByStylist');
                      SELECT_STYLIST(staff)
                      $emit('close')"
                      class="button is-small is-primary" type="button">Choose {{ staff.first_name }} as your stylist</button>
      <button class="button is-small" type="button" @click="$emit('close')">Choose a different stylist</button>
    </footer>
  </div>
</template>
<script>
  import { mapMutations } from "vuex"

  export default {
    props: ['staff'],

    methods: {
      ...mapMutations([
        'SELECT_VIEW',
        'SELECT_STYLIST'
      ]),
    },

    computed: {
      fullName() {
        return this.staff.first_name + " " + this.staff.last_name
      }
    }
  }
</script>