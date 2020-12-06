<template>
  <div class="section columns is-centered">
    <div class="section column is-8">
      <h1 class="title is-3">Let us match the best stylist for your budget</h1>
      <p class="is-size-4">The vast array of services we offer along with our wide range of stylist levels makes quoting for our services
        less than straight forward!</p>
      <p>That's why we created our comprehensive <strong>price calculator</strong>, a simple way for you to get a bespoke quote for the
        services you want us to do, with the ability to experiment with different services and change the stylist level
        until you find a price and stylist that suits you!</p>
      <p class="is-size-5"><strong>Have you been to {{ salon.name }} before?</strong></p>
      <br>
      <button @click="UPDATE_REGULAR(true)" :class="[regular ? 'is-primary' : '']" class="button">Yes</button>
      <button @click="UPDATE_REGULAR(false)" :class="[!regular ? 'is-primary' : '']" class="button">No</button>
      <br><br>
      <div>
        <h3 class="title is-5"><strong>To get started select the type of service you require from the options below...</strong></h3>
        <div class="section columns is-multiline service-selector">
          <div class="column">
            <div @click="UPDATE_CALCULATOR('Colour'); SELECT_VIEW('selector')" class="service-link colour">
              <p>Colour, Cutting & Styling</p>
            </div>
          </div>
          <div class="column">
            <div @click="UPDATE_CALCULATOR('CuttingStyling'); SELECT_VIEW('selector')" class="service-link cutting">
              <p>Cutting/Styling only</p>
            </div>
          </div>
          <div class="column">
            <div @click="UPDATE_CALCULATOR('Men'); SELECT_VIEW('selector')" class="service-link men">
              <p>Men's Hairdressing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState(['view', 'calculator', 'selector', 'salon', 'regular'])
    },

    methods: {
      ...mapMutations([
          'UPDATE_REGULAR',
          'UPDATE_CALCULATOR',
          'SELECT_VIEW'
      ])
    }
  }


</script>