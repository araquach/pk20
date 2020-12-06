<template>
  <div class="section columns is-centered">
    <div class="section column is-8">
      <h1 class="title is-2">Your Selections</h1>
      <p class="is-size-4">You've chosen the following services:</p>
      <table class="table">
        <tr v-if="selectedColourPrice">
          <td>{{ selectedColour.service }}</td>
          <td>{{ selectedColourPrice | toCurrency}}</td>
        </tr>
        <tr v-if="selectedColourAddOnPrice">
          <td>{{ selectedColourAddOn.service }}</td>
          <td>{{ selectedColourAddOnPrice | toCurrency }}</td>
        </tr>
        <tr v-if="selectedTreatmentPrice">
          <td>{{ selectedTreatment.service }}</td>
          <td>{{ selectedTreatmentPrice | toCurrency }}</td>
        </tr>
        <tr v-if="selectedFinishPrice">
          <td>{{ selectedFinish.service }}</td>
          <td>{{ selectedFinishPrice | toCurrency}}</td>
        </tr>
        <tr v-if="selectedFinishAddOnPrice">
          <td>{{ selectedFinishAddOn.service }}</td>
          <td>{{ selectedFinishAddOnPrice | toCurrency}}</td>
        </tr>
        <tr v-if="selectedMensColourPrice">
          <td>{{ selectedMensColour.service }}</td>
          <td>{{ selectedMensColourPrice | toCurrency}}</td>
        </tr>
        <tr v-if="selectedMensCutPrice">
          <td>{{ selectedMensCut.service }}</td>
          <td>{{ selectedMensCutPrice | toCurrency}}</td>
        </tr>
      </table>

      <p class="is-size-4">The total estimated cost is: {{ totalCost | toCurrency }}</p>
      <p class="is-size-7">Please note: a full consultation is required to determine the exact price - a skin test is required 48hrs before any colour service</p>
      <br>
      <h2 v-if="hasStaff" class="is-size-4">Here are the {{ salon.name }} stylists that fit your budget:</h2>

      <StaffSelection v-if="hasStaff" :staff="thisStaff" :s="salon"/>
      <div v-else>
        <p class="is-size-4"><strong class="has-text-danger">Unfortunately there are no staff at your chosen level at {{ salon.name }}</strong></p>
      </div>
      <br>
      <div v-if="hasOtherStaff">
        <p v-if="hasStaff" class="is-size-4">We also have these stylists at a similar price in our other salon</p>
        <p v-else class="is-size-5">These are the other stylists from our other salons within your price range...</p>
        <br>
        <div v-for="s in salons">
          <StaffSelection :staff="otherStaff(s.id)" :s="s" />
        </div>
      </div>
      <div v-if="hasStaff || hasOtherStaff">
        <p class="is-size-5">Click on a stylist to find out more about them</p>
        <p class="is-size-4">Are you happy with your selection or do you want to adapt your options?</p>
      </div>
      <div v-else>
        <p class="is-size-4">Please click below to adapt your choice</p>
      </div>
      <br><br>
      <button @click="SELECT_VIEW('calculator')" class="button is-primary">Change Choices</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from "vuex"
  import StaffSelection from "./StaffSelection"

  export default {
    components: {StaffSelection},

    computed: {
      ...mapState([
          'salon',
          'salons',
          'stylists',
          'selectedColour',
          'selectedColourAddOn',
          'selectedTreatment',
          'selectedFinish',
          'selectedFinishAddOn',
          'selectedMensColour',
          'selectedMensCut',
          'calculator'
      ]),

      ...mapGetters([
          'stylistsByLevel',
          'totalCost',
          'selectedColourPrice',
          'selectedColourAddOnPrice',
          'selectedTreatmentPrice',
          'selectedFinishPrice',
          'selectedFinishAddOnPrice',
          'selectedMensColourPrice',
          'selectedMensCutPrice'
      ]),

      thisStaff() {
        return this.stylistsByLevel.filter(s => s.salon === this.salon.id)
      },

      hasStaff() {
        if (this.thisStaff.length) {
          return true
        }
      },

      hasOtherStaff() {
        const other = this.stylistsByLevel.filter(s => s.salon !== this.salon.id)
        if (other.length) {
          return true
        }
      }
    },

    methods: {
      ...mapMutations([
          'SELECT_VIEW'
      ]),

      otherStaff(id) {
        return this.stylistsByLevel.filter(s => s.salon === id && this.salon.id !== id)
      }
    }
  }
</script>