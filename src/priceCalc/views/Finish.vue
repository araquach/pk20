<template>
  <div class="section">
    <p class="is-size-4">We'll save you're quote and send it to you!</p>
    <p>Just fill in your details below and we'll email it over and send a text message link too.</p>
    <form v-if="submitStatus != 'OK'" @submit.prevent="submit">
      <div class="field">
        <label class="label has-text-white">Full Name</label>
        <div class="control">
          <input class="input" v-model.trim="$v.name.$model" :class="{ 'is-danger': $v.name.$error }" placeholder="Your Full Name">
        </div>
        <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
          Your name is required
        </div>
      </div>
      <div class="field">
        <label class="label has-text-white">Mobile Number</label>
        <div class="control">
          <input class="input" :class="{ 'is-danger': $v.mobile.$error }" v-model.trim="$v.mobile.$model" placeholder="Your Mobile Number">
          <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.required">
            Your mobile number is required
          </div>
          <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.numeric">
            A valid mobile number is required
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label has-text-white">Email Address</label>
        <div class="control">
          <input class="input" :class="{ 'is-danger': $v.email.$error }" v-model.trim="$v.email.$model" placeholder="Your Email Address">
          <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.required">
            Email Address is required
          </div>
          <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.email">
            Valid Email Address is required
          </div>
        </div>
      </div>
      <br>
      <div class="field">
        <div class="control">
          <button class="button is-primary" type="submit" :disabled="submitStatus === 'PENDING'">Send</button>
        </div>
        <br><br>
      </div>
    </form>
    <div v-if="submitStatus === 'OK'">
      <p class="is-size-4 has-text-primary">Great! You'll receive your estimated quote via email and text message very soon!</p>
      <p>In the meantime we recommend booking in for a consultation with your chosen stylist. Call {{salon.phone}} to book or use the online booking {{salon.bookings}}</p>
    </div>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  import {required, email, numeric} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        showInfo: false,
        name: '',
        mobile: '',
        email: '',
        submitStatus: null
      }
    },

    validations: {
      name: { required },
      mobile: {required, numeric},
      email: { required, email }
    },

    computed: {
      ...mapState([
          'regular'
      ])
    },

    methods:{
      info() {
        return `From: ${this.name}
                Email Address: ${this.email}
                Mobile: ${this.mobile}
                `
      },

      submit() {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          axios.post('api/send-quote-details', {
            name: this.name,
            mobile: this.mobile,
            email: this.email,
            info: this.info()
          })
              .then(response => {
                this.submitStatus = 'OK'
              })
              .catch((e) => {
                console.error(e)
              })
        }
      }
    }
  }
</script>