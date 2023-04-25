<template>
    <div id="ind-offer">
        <div class="columns">
            <div class="column is-8">
                <div class="top section">
                    <h2 class="title is-2 is-size-4-mobile has-text-primary">Special introductory offer with Lauren</h2>
                    <p class="is-size-5">Lauren is an amazing stylist looking to build her client base.</p>
                    <p class="is-size-4"><strong>If you're considering a new stylist then take advantage of this great
                        offer with
                        her&hellip;</strong></p>
                </div>
            </div>
        </div>

        <figure class="image">
            <img alt="Lauren's Offer" src="/dist/img/offer/lauren-wide.png">
        </figure>

        <div class="columns">
            <div class="column is-8">
                <div class="section">
                    <p class="is-size-5"><strong>Come in for a FREE consultation and if you like the ideas Lauren comes
                        up
                        with then book in to get 25% off your visit!</strong></p>
                    <div class="buttons">
                        <a href="https://phorest.com/book/salons/paulkemp#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
                           class="button is-primary">Book Your Consultation</a>
                    </div>
                    <p class="is-size-7">(Select Lauren from the dropdown)</p>
                    <p class="is-size-5"><strong>or call 01925 444488 to book</strong></p>
                    <p>Just mention the offer at the time of your visit</p>
                    <p class="is-size-5"><strong>Offer Code: PK25</strong></p>
                    <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service -
                        for new clients
                        to Lauren)</p>
                    <br><br>
                </div>
            </div>
        </div>
    </div>
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