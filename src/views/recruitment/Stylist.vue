<template>
  <div id="recruitment">
    <div class="section columns is-marginless">
      <div class="column is-6 has-text-white">
        <div>
          <h2 class="title is-2 has-text-white">Join the team</h2>
          <h3 class="subtitle is-4 has-text-white">Stylist Position</h3>
          <p><strong class="has-text-white is-size-5">Sloane The Salon is a hotbed of hair talent.</strong></p>
          <p>If you're looking to join a friendly, innovative team and think you have what it takes then apply below.</p>
          <p>Please complete ALL sections of the form before submitting your application.</p>
          <p>We will contact you as soon as a position becomes available.</p>
          <form v-if="submitStatus !== 'OK'" @submit.prevent="submit">
            <div class="recruitment-honeypot" aria-hidden="true">
              <label for="recruitment-website">Leave this field empty</label>
              <textarea id="recruitment-website" name="website" v-model="website" tabindex="-1" autocomplete="off" data-lpignore="true" data-1p-ignore="true"></textarea>
            </div>
            <p v-if="errorMessage" class="help is-danger" role="alert">{{ errorMessage }}</p>
            <div class="field">
              <label class="label has-text-white">Full Name</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.name.$error }" v-model.trim="$v.name.$model" placeholder="Your Full Name">
              </div>
              <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
                <p>Full Name is required</p>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Mobile Number</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.mobile.$error }" v-model.trim="$v.mobile.$model" placeholder="Your Mobile Number">
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.required">
                  Mobile number is required
                </div>
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.phone">
                  <p>Valid Mobile number is required</p>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Email Address</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.email.$error }" v-model.trim="$v.email.$model" placeholder="Your Email address">
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.required">
                  Email Address is required
                </div>
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.email">
                  <p>Valid Email address is required</p>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Current Position</label>
              <div class="control">
                <div class="select" :class="{ 'is-danger': $v.position.$error }">
                  <select  v-model.trim="$v.position.$model">
                    <option value="default">Please select</option>
                    <option value="less than one year">Less than one year's experience</option>
                    <option value="1 - 3 years">1 - 3 years experience</option>
                    <option value="3 - 5 years">3 - 5 years experience</option>
                    <option value="5 plus years">5 plus years experience</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && $v.position.$invalid">
              Position is required
            </div>
            <div class="field">
              <label class="label has-text-white">Tell us a bit about yourself</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.about.$error }" v-model.trim="$v.about.$model" placeholder="Tell us about yourself?"/>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.about.required">
              About yourself is required
            </div>
            <div class="field">
              <label class="label has-text-white">Why did you choose hairdressing as a career?</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.why_hair.$error }" v-model.trim="$v.why_hair.$model" placeholder="Why did you choose hairdressing?"/>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.why_hair.required">
              Why hairdressing required
            </div>
            <div class="field">
              <label class="label has-text-white">Tell us why you want to join the Sloane team</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.why_us.$error }" v-model.trim="$v.why_us.$model" placeholder="Why do you want to join Sloane?"/>
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
            <p class="is-size-4 has-text-primary">Thanks for applying! We'll be in touch when a position becomes available</p>
            <p class="is-size-5 has-text-primary">If you're considering our other salons too (Jakata and Base Hairdressing) there's no need to apply again as we're all connected and this application covers all 3 salons!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'

const phone = value => /^[+0-9() .-]+$/.test(value) && (value.match(/[0-9]/g) || []).length >= 10 && (value.match(/[0-9]/g) || []).length <= 15
const answer = value => /[^\d\s\p{P}\p{S}]/u.test(value || '')
export default {
  data() {
    return {
      showInfo: false,
      name: '',
      mobile: '',
      email: '',
      position: 'default',
      about: '',
      why_hair: '',
      why_us: '',
      salon: 2,
      role: "Stylist",
      website: '',
      errorMessage: '',
      submitStatus: null
    }
  },

  validations: {
    name: {required, minLength: minLength(2), maxLength: maxLength(100)},
    mobile: {required, phone, maxLength: maxLength(30)},
    email: {required, email, maxLength: maxLength(254)},
    position: {required, allowed: value => ['less than one year', '1 - 3 years', '3 - 5 years', '5 plus years'].includes(value)},
    about: {required, minLength: minLength(10), maxLength: maxLength(5000), answer},
    why_hair: {required, minLength: minLength(10), maxLength: maxLength(5000), answer},
    why_us: {required, minLength: minLength(10), maxLength: maxLength(5000), answer}
  },

  methods:{
    submit() {
      if (this.submitStatus === 'PENDING') return
      this.errorMessage = ''
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.errorMessage = 'Please check your details, select a position and give each written answer at least 10 characters (maximum 5,000).'
      } else {
        this.submitStatus = 'PENDING'
        axios.post('/api/joinus', {
          website: this.website,
          name: this.name,
          mobile: this.mobile,
          email: this.email,
          position: this.position,
          about: this.about,
          why_hair: this.why_hair,
          why_us: this.why_us,
          salon: this.salon,
          role: this.role
        }, { timeout: 30000 })
            .then(response => {
              this.submitStatus = 'OK'
            })
            .catch((e) => {
              this.submitStatus = 'ERROR'
              this.errorMessage = e.response && e.response.status === 429
                ? 'Too many attempts. Please wait a while before trying again.'
                : (e.response && e.response.data && e.response.data.message) || 'We could not confirm your application. Please try again shortly, or contact us if the problem continues.'
            })
      }
    }
  }
}
</script>
<style scoped>
.recruitment-honeypot {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
