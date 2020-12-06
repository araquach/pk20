<template>
  <div class="section columns is-centered">
    <div class="section column is-8">
      <h1 class="title is-4">How do you want us to create your quote?</h1>
      <p class="is-size-5">Are you looking for a quote for a specific stylist or do you want us give you pricing based on stylist level?</p>
      <br>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <button class="button is-colour" @click="UPDATE_SELECTOR('StylistSelector'); SELECT_VIEW('calculator')">
              Quote for a specific stylist
            </button>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <button class="button is-colour"  @click="UPDATE_SELECTOR('LevelSelector'); SELECT_VIEW('calculator')">
              Quote based on a stylist level
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from "vuex"

  export default {
    computed: {
      ...mapState([
        'calculator'
      ])
    },

    methods: {
      ...mapMutations([
          'SELECT_VIEW',
          'UPDATE_SELECTOR'
      ])
    }
  }
</script>