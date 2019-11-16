<template>
  <div class="rotasDinamicas">
     <Carrossel/>
    <Cards/> 
   
      </div>
</template>


<script>
import Carrossel from './HomeComponents/Carrossel';
import Cards from './HomeComponents/Cards';

export default {
  name: 'Home',
  components:
  {
    Carrossel,
    Cards
  }


  // data() {
  //     return {
  //       slide: 0,
  //       sliding: null
  //     }
  //   }
    // methods: {
    //   onSlideStart(slide) {
    //     this.sliding = true
    //   },
    //   onSlideEnd(slide) {
    //     this.sliding = false
    //   }
    // }

}
</script>

<style  scoped>
.rotasDinamicas{
  display: block;
  padding-bottom: 10%;
  
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

