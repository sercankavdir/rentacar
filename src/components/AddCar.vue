<template>
  <div id="app">
    <navbar></navbar>
    <div id="container">
      <b-container>
        <b-col md="8" offset-md="2">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="group1"
                          label="Car Name"
                          label-for="exampleInput1"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="exampleInput1"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Enter car name">
              </b-form-input>
            </b-form-group>

              <b-form-group id="group2"
                          label="Image"
                          label-for="exampleInput1"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="exampleInput1"
                            type="text"
                            v-model="form.img"
                            required
                            placeholder="Enter car image url">
              </b-form-input>
            </b-form-group>
            
            <b-form-group id="group3"
                        label="Price:"
                        label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="text"
                          v-model="form.price"
                          required
                          placeholder="Enter car's price">
            </b-form-input>
            </b-form-group>

            <b-form-group id="group4"
            label="Seat Number:"
            label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            type="text"
                            v-model="form.seatNumber"
                            required
                            placeholder="Enter car's seat number">
              </b-form-input>
            </b-form-group>

            <b-form-group id="group5"
                          label="Climate:"
                          label-for="exampleInput3">
              <b-form-select id="exampleInput3"
                            :options="climate"
                            required
                            v-model="form.climate">
              </b-form-select>
            </b-form-group>

            
            <b-form-group id="group6"
                          label="Fuel Type:"
                          label-for="exampleInput3">
              <b-form-select id="exampleInput3"
                            :options="fuelType"
                            required
                            v-model="form.fuelType">
              </b-form-select>
            </b-form-group>

            
            <b-form-group id="group7"
                          label="Gear:"
                          label-for="exampleInput3">
              <b-form-select id="exampleInput3"
                            :options="gear"
                            required
                            v-model="form.gear">
              </b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import  navbar from './navbar.vue'
export default {
  data () {
    return {
      form: {
        name:'',
        img: '',
        price: null,
        seatNumber: null,
        climate: null,
        fuelType: null,
        gear: null,
      },
      climate: [
        { text: 'Select One', value: null },
        'Var', 'Yok',
      ],
      fuelType: [
        { text: 'Select One', value: null },
        'Dizel', 'Benzin',
      ],
      gear: [
        { text: 'Select One', value: null },
        'Manuel', 'Otomatic',
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      axios.post('http://localhost:3000/addCar', this.form).then(result => {
        this.$router.push({ path: '/carList'})
      }).catch(err => {
          console.log(err)
      })
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  },
  components: {
    navbar
  }
}
</script>

<style scoped>
#app {
  color: #2c3e50;
}

#container {
  margin-top: 50px
}

</style>
