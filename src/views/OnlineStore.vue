<template>
  <div>
    <br>
    <StoreCarousel :banners="storeData.banners"/>
    <br>
    <div class="section columns is-multiline p-3">
      <div v-for="image in storeData.tiles" class="column is-4 m-0 p-0">
        <div class="box is-flex is-flex-direction-column">
          <img :src="`/dist/img/store/tiles/${image.image}`" alt="">
          <div class="container p-3">
            <h3 class="new-title is-size-4">{{ image.brand }}</h3>
            <p class="is-size-6 is-marginless">{{ image.description }}</p>
            <div class="has-text-centered">
              <a :href="image.url" class="button is-small is-dark">SHOP {{ image.title }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section store-info">
      <p><strong>Welcome to The PK Haircare Shop</strong>, where excellence meets your everyday haircare needs. We take pride in
      offering a curated selection of only the finest professional haircare brands, including trusted names like
        <strong>GHD</strong>, <strong>Schwarzkopf</strong>,
        <strong>Olaplex</strong>, and <strong>Kevin Murphy</strong>.</p>
      <p>At <strong>Paul Kemp Hairdressing</strong>, we believe that your hair deserves the very best. That's why we exclusively stock
        brands that we use in the salon and are known for their exceptional performance and results. Step into our
        online shop and experience a world of <strong>premium haircare</strong>, carefully selected to help you achieve the vibrant, healthy
        locks you deserve!</p>
      <p>Plus, for your convenience, we offer both <strong>at-home delivery</strong> and a convenient <strong>click-and-collect</strong> service to ensure
        you can get your favourite products in the way that suits you best.</p>
      <p><em>Please note 'click-and-collect orders will need to be collected from our Head Quarters 'Base Hairdressing'
        located at 90-92 Bridge St, Warrington WA1 2RF.</em></p>
      <a href="https://shop.phorest.com/businesses/l4Fu5XgHuhR9SEX-1sCrhQ/branches/AONcuPZxFAaslwcLxL_3fw" class="button is-primary">SHOP NOW</a>
    </div>
  </div>
</template>
<script>
import StoreCarousel from "../components/StoreCarousel.vue";

export default {
  components: {StoreCarousel},

  data() {
    return {
      storeData: {}
    }
  },
  mounted() {
    axios.get("/api/store-data").then(response => this.storeData = response.data)
        .catch(error => {
          console.log(error)
        })
  }
}
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This ensures that the content inside is spaced out with the button at the bottom */
}

.store-info {
  padding-top: 0;
}
</style>
