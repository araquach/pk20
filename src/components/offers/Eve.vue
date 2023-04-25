<template>
    <router-link :to="{  name: 'eve-offer' }">
        <div class="box">
            <div class="columns">
                <div class="column">
                    <img src="/dist/img/offer/eve.png" alt="Eve">
                </div>
                <section class="column is-8">
                    <h2 class="title is-3">25% off your first visit to Eve</h2>
                    <p class="is-size-4"><strong>A Colour & Cut from just £60</strong></p>
                    <p class="is-size-4">Click for more info ></p>
                </section>
            </div>
        </div>
    </router-link>
</template>
<script>
import {mapState} from "vuex"
export default {
    computed: {
        ...mapState({
            endDate: state => state.pk.endDate
        })
    }
}
</script>