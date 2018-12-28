<template>
  <div id="app">
    <navbar></navbar>
    <div id="container">
        <div v-for="(item, index) in items" :key="index">
            <Car v-bind:carData="item" />
        </div >
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import  navbar from './navbar.vue'
import Car from './Car.vue'
export default {
    beforeMount() {
     axios.get('http://localhost:3000/getCars').then(result => {
         this.items = result.data.cars;
     }).catch(err => {
         console.log(err)
     })
  },
  name: 'landing',
  data () {
    return {
        items: []
    }
  },
  props: {
    msg: String
  },
    components: {
    Car,
    navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  color: #2c3e50;
}

#container {
  margin-top: 10px
}
</style>
