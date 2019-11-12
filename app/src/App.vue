<template>
<div>
       <div id="teste"> 
       <Header />
    </div>

  
      <router-view />
   
    
      <Footer />
  
</div>
  
</template>

<script>

import Footer from "./components/pages/shared/Footer.vue";
import Header from "./components/pages/shared/Header.vue";

export default {
  name: "app",
  components: {
   
    Footer,
    Header
  }
};
</script>

<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
