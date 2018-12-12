<template>
  <div class="app">

    <div v-for="(item, index) in items" :key="index">
        <Car v-bind:carData="item" />
    </div >
  </div>
</template>

<script>
import Car from './Car.vue'
export default {
  name: 'landing',
  data () {
    return {
      items: [
        {
            name:'Renault Capture 1.5DCI',
            img: "https://www.avis.com.tr/assets/images/Car/A.png"
        },
        {
            name:'opel',
            img: "https://www.avis.com.tr/assets/images/Car/O.png"
        },
        {
            name:'opel',
            img: "https://www.avis.com.tr/assets/images/Car/H.png"
        },
        ]
    }
  },
  props: {
    msg: String
  },
    components: {
    Car
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
