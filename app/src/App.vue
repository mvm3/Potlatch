<template>
<div>
       <div id="fixed-header"> 
       <Header />
    </div>

  <div class="margem">
      <router-view />
   </div>
    
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

#fixed-header{
  
  position: fixed;
    height: 100px;
    top: 0;
    padding-bottom: 150px;
    width: 100%;
    z-index: 8;
} 

.margem {  
 /* verificar isso - Juliano 12 de nov */
  margin-top: 70px;
  display:block;
}
</style>
