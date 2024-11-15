<template>
  <div id="recruitment">
    <div class="section columns is-marginless">
      <div class="column is-6 has-text-white">
        <div>
          <h2 class="title is-2 has-text-white">Join the team</h2>
          <h3 class="subtitle is-4 has-text-white">Saturday/Evening position</h3>
          <p><strong class="has-text-white is-size-5">Our 'Pre Apprenticeship Scheme' is perfect for anyone with an
            interest in hair that would like to try out the industry before they leave school or enrol in any further
            education.</strong></p>
          <p>We offer Saturday, evening and school holiday time work. You'll receive training from the start and plenty of hands on experience,
            which can fast track you to interview stage for our apprenticeship scheme.</p>
          <p>Please complete ALL sections of the form before submitting your application.</p>
          <p>We will contact you as soon as a position becomes available.</p>
          <form v-if="submitStatus !== 'OK'" @submit.prevent="submit">
            <div class="field">
              <label class="label has-text-white">Full Name</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.name.$error }" v-model.trim="$v.name.$model"
                       placeholder="Your Full Name">
              </div>
              <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
                <p>Full Name is required</p>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Mobile Number</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.mobile.$error }" v-model.trim="$v.mobile.$model"
                       placeholder="Your Mobile Number">
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.required">
                  Mobile number is required
                </div>
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.numeric">
                  <p>Valid Mobile number is required</p>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Email Address</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.email.$error }" v-model.trim="$v.email.$model"
                       placeholder="Your Email address">
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.required">
                  Email Address is required
                </div>
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.email">
                  <p>Valid Email address is required</p>
                </div>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.position.required">
              Position is required
            </div>
            <div class="field">
              <label class="label has-text-white">Tell us a bit about yourself</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.about.$error }" v-model.trim="$v.about.$model"
                          placeholder="Tell us about yourself?"/>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.about.required">
              About yourself is required
            </div>
            <div class="field">
              <label class="label has-text-white">What made you want to try hairdressing?</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.why_hair.$error }"
                          v-model.trim="$v.why_hair.$model" placeholder="What made you want to try hairdressing?"/>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.why_hair.required">
              Why hairdressing required
            </div>
            <div class="field">
              <label class="label has-text-white">Tell us why you want to join the PK team</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.why_us.$error }" v-model.trim="$v.why_us.$model"
                          placeholder="Why do you want to join PK?"/>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.why_us.required">
              Why us required
            </div>
            <br>
            <div class="field">
              <div class="control">
                <button class="button is-primary" type="submit" :disabled="submitStatus === 'PENDING'">Apply</button>
              </div>
              <br><br>
            </div>
          </form>
          <div v-if="submitStatus === 'OK'" class="box">
            <p class="is-size-4 has-text-primary">Thanks for applying! We'll be in touch when a position becomes
              available</p>
            <p class="is-size-5 has-text-primary">If you're considering our other salons too (Jakata and Base Hairdressing) there's no need to apply again as we're all connected and this application covers all 3 salons!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {required, numeric, email} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      showInfo: false,
      name: '',
      mobile: '',
      email: '',
      position: 'new to hairdressing',
      about: '',
      why_hair: '',
      why_us: '',
      salon: 2,
      role: 'Saturday',
      submitStatus: null
    }
  },

  validations: {
    name: {required},
    mobile: {required, numeric},
    email: {required, email},
    about: {required},
    why_hair: {required},
    why_us: {required}
  },

  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        axios.post('/api/joinus', {
          name: this.name,
          mobile: this.mobile,
          email: this.email,
          role: this.role,
          position: this.position,
          about: this.about,
          why_hair: this.why_hair,
          why_us: this.why_us,
          salon: this.salon,
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