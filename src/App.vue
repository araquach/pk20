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
    components: {Footer, Header }
  }
</script>