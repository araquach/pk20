<template>
  <div  v-if="staff.length" class="staff-selection">
    <img v-if="s.id !== salon.id" :src="s.logo" :alt="s.name" :width="200">
    <br>
    <div class="columns is-multiline is-mobile">
      <div @click="cardModal(index)" v-for="(stylist, index) in staff" class="section column is-4">
        <div class="card has-background-colour">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="stylist.remote_image" :alt="stylist.first_name + stylist.last_name">
            </figure>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6 has-text-white has-text-centered">{{ stylist.first_name }} {{ stylist.last_name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex"
  import Modal from "../../components/Modal";

  export default {
    props: ['staff', 's'],

    components: {Modal},

    data() {
      return {
        isComponentModalActive: false,
        selectedStaff: {}
      }
    },

    methods: {
      cardModal(index) {
        this.selectedStaff = this.staff[index]
        this.$buefy.modal.open({
          parent: this,
          props: {staff: this.selectedStaff},
          component: Modal,
          hasModalCard: true,
          customClass: 'custom-class custom-class-2',
          trapFocus: true
        })
      }
    },

    computed: {
      ...mapState(['salon'])
    }
  }
</script>