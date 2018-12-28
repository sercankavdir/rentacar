<template>
  <div class="app">
    <div id="landing-header">
      <h1>Welcome to Rent a Car!</h1>
      <router-link class="btn btn-lg btn-success" to="/carList" id="links">View All Cars</router-link>
    </div>
    
    <ul class="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import Car from './Car.vue'
export default {
  name: 'landing',
  data () {
    return {
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    background-color: #000;
}

#landing-header {
    z-index: 1;
    position: relative;
    text-align: center;
    padding-top: 40vh;
  }

  #landing-header h1 {
    color: #fff;
  }

  .slideshow { 
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .slideshow li { 
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 50s linear infinite; 
  }

  .slideshow li:nth-child(1) { 
    background-image: url(https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg);
  }
  .slideshow li:nth-child(2) { 
    background-image: url(https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg);
    animation-delay: 10s; 
  }
  .slideshow li:nth-child(3) { 
    background-image: url(https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg);
    animation-delay: 20s; 
  }
  .slideshow li:nth-child(4) { 
    background-image: url(https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg);
    animation-delay: 30s; 
  }
  .slideshow li:nth-child(5) { 
    background-image: url(https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg);
    animation-delay: 40s; 
  }

  @keyframes imageAnimation { 
    0% { 
      opacity: 0; 
      animation-timing-function: ease-in;
    }
    10% {
      opacity: 1;
      animation-timing-function: ease-out;
    }
    20% {
      opacity: 1
    }
    30% {
      opacity: 0
    }
  }

  /* Older browser support - .no-cssanimations class added by modernizr */
.no-cssanimations .slideshow li {
	opacity: 1;
}
</style>
