<template>
  <div class="geral"> 
     <div id="fixed-header"> 
       <Header />
    </div>

    <div class="dinamico">
      <router-view />
   </div>
    
  <div  class="rodape">
    <Footer />
  </div>
  
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
.geral{
overflow: hidden;
font-family: 'Gotham-Light';
}

#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#fixed-header{
  
  position: fixed;
    /* height: 100%; */
    top: 0;
    /* padding-bottom: 150px; */
    width: 100%;
    z-index: 8;
} 

.dinamico {  
 /* verificar isso - Juliano 12 de nov */
  margin-top: 6%;
  display:block;
  position:relative;

}

.rodape{
/* margin-top: 10%; */
/* position: absolute; */
  /* display:block; */
   /* z-index:initial; */
}
</style>
