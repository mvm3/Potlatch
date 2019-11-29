<template>
 <div id ="carrossel" class="t">  
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="Potlatch"
          text="DAR - RECEBER - RETRIBUIR"
          img-src="https://kinsta.com/wp-content/uploads/2018/05/stripe-donate-button-1-1.png">
          <!-- <h2>deus salve o rei</h2>
          <p>DAR - RECEBER - RETRIBUIR</p> -->
          </b-carousel-slide>


        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://radhakrishnatemple.net/wp-content/uploads/2018/01/o-GIVING-facebook.jpg">
         
        </b-carousel-slide>

        

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src= "https://thebetterparent.com/blog/wp-content/uploads/2018/12/google-play-donate-logo.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      </b-carousel>
      
    </div>
</template>

<style>


.t .carousel-caption {
  color: black !important; 
}



</style>