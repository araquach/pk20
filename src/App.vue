<template>
  <div id="main">
    <div class="main container">
      <Header/>
      <transition name="fade" mode="out-in">
        <RouterView/>
      </transition>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer";

  export default {
    components: {Footer, Header },

    created() {
      this.$store.dispatch('loadSalons')
      this.$store.commit('UPDATE_SALON', {
        id: 2,
        name: 'Paul Kemp Hairdressing',
        logo: 'https://9dd4398ac4d52ba12cab-f1aee8fa44b57276f7c290953cbe1cf5.ssl.cf5.rackcdn.com/logos/pk.png',
        image: 'https://9dd4398ac4d52ba12cab-f1aee8fa44b57276f7c290953cbe1cf5.ssl.cf5.rackcdn.com/logos/small/pk.png'
      })
      this.$store.dispatch('loadStylists')
      this.$store.dispatch('loadServices')
      this.$store.dispatch('loadLevels')
    }
  }
</script>