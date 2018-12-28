<template>
  <div id="app">
    <navbar></navbar>

    <div class="container.fluid">
        <div id="borderContainer">
            <div class="row">
                <div class="col" id="imgDiv">
                    <img height="260" width="720" v-bind:src="carData.img" />
                </div>
                <div class="col" id="infoDiv">
                    <p>{{carData.name}}</p>
                    <div class="row">
                        <div class="col" id="infosDiv">
                            <i class="fa fa-paw"></i>
                            <p>Koltuk Sayısı : {{carData.seatNumber}}<p/>
                            <p>Klima: Var<p/>
                        </div>
                        <div class="col" id="infosDiv">
                            <p>Yakıt Tipi : {{carData.fuelType}}<p/>
                            <p>Vites Tipi : {{carData.gear}}<p/>
                        </div>
                        <div class="col" id="infosDiv">
                        </div>
                    </div>
                    <p>Price: {{(price+featuresPrice).toFixed(2)}} TL <span v-if="form.dayCount"> - For {{form.dayCount}} days</span></p>
                     <div id="space">
                       
                    </div>
                     <div>
                 </div>
                </div>
            </div>
        </div>
            <div id="container">
                <b-container>
                    <b-row>
                        <b-col>
                            <div id="personalForm">
                                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                    <b-form-group id="group1"
                                                label="Email address"
                                                label-for="exampleInput1"
                                                description="We'll never share your email with anyone else.">
                                    <b-form-input id="exampleInput1"
                                                    type="email"
                                                    v-model="form.email"
                                                    required
                                                    placeholder="Enter email">
                                    </b-form-input>
                                    </b-form-group>
                                    
                                    <b-form-group id="group2"
                                                label="Full Name:"
                                                label-for="exampleInput2">
                                    <b-form-input id="exampleInput2"
                                                type="text"
                                                v-model="form.name"
                                                required
                                                placeholder="Enter your full name">
                                    </b-form-input>
                                    </b-form-group>

                                     <b-form-group id="group3"
                                                label="Date:"
                                                label-for="exampleInput3">
                                    <b-form-input id="exampleInput3"
                                                type="text"
                                                v-model="form.date"
                                                required
                                                placeholder="Enter date ( 2018-12-28 )">
                                    </b-form-input>
                                    </b-form-group>

                                     <b-form-group id="group4"
                                                label="Number of days:"
                                                label-for="exampleInput4">
                                    <b-form-input id="exampleInput4"
                                                type="number"
                                                v-model="form.dayCount"
                                                @change="setDayCount"
                                                required
                                                placeholder="1-10">
                                    </b-form-input>
                                    </b-form-group>

                                    <b-button type="submit" variant="primary">Rent</b-button>
                                    <b-button type="reset" variant="danger">Reset</b-button>
                                </b-form>
                            </div>
                        </b-col>
                        <b-col>
                            <div id="featuresForm">
                                <div id="featuresForm">
                                    <input type="checkbox" id="ekSurucu" value="ekSurucu" @change="setFeatures()" v-model="features">
                                    <label class="form-check-label" for="exampleCheck1"><p id="featureInfo">Ek Sürücü 22.44 TL</p></label>
                                    <p>Aracın, kiralayan şahıs dışındaki kişi ve / veya kişilerce kullanılabilmesini sağlamaktadır.</p>                           
                                </div>
                                <div id="featuresForm">
                                    <input type="checkbox" id="gps" value="gps" @change="setFeatures()" v-model="features">
                                    <label class="form-check-label" for="exampleCheck1"><p id="featureInfo">GPS Navigasyon 36.58 TL</p></label>
                                    <p>Aracın, kiralayan şahıs dışındaki kişi ve / veya kişilerce kullanılabilmesini sağlamaktadır.</p>                           
                                </div>
                                <div id="featuresForm">
                                    <input type="checkbox" id="cocukKoltuk" value="cocukKoltuk" @change="setFeatures()" v-model="features">
                                    <label class="form-check-label" for="exampleCheck1"><p id="featureInfo">Çocuk Koltuğu 42.48 TL</p></label>
                                    <p>Aracın, kiralayan şahıs dışındaki kişi ve / veya kişilerce kullanılabilmesini sağlamaktadır.</p>                           
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import  navbar from './navbar.vue'
export default {
    beforeMount() {
     this.price = this.carData.price
  },
  name: 'car', 
    data () {
    return {
        price: 0,
        featuresPrice: 0,
        status: 'not_accepted',
        features: [],
      form: {
        email: '',
        name: '',
        dayCount: null,
        date: null
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      var carInfo = {
          form: this.form,
          carData: {
              name: this.carData.name,
              img: this.carData.img,
              seatNumber: this.carData.seatNumber,
              gear: this.carData.gear,
              climate: this.carData.climate,
              fuelType: this.carData.fuelType,
              price: this.price+this.featuresPrice
          }
      }
      axios.post('http://localhost:3000/rentCar', carInfo).then(result => {
          console.log(result)
      }).catch(err => {
          console.log(err)
      })
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
    },
    setFeatures: function () {
        var total = 0
        this.features.forEach(feature => {
            if(feature == "ekSurucu")
                total += 22.44
            if(feature == "gps")
                total += 36.58
            if(feature == "cocukKoltuk")
                total += 42.48
        })
        this.featuresPrice = total;
    },
    setDayCount: function () {
        if(this.form.dayCount != null || this.form.dayCount != undefined) {
            this.price = this.carData.price * parseInt(this.form.dayCount)
        }
    }
  },
  props: {
    carData: Object
  },
  components: {
    navbar
  }
}
</script>

<style scoped>
#borderContainer {
    border: 1px solid grey;
}
#imgDiv {
    text-align: center;
    background-color: #e6e6e6;
}
#infoDiv {
    text-align: left;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 30px;
}

#infosDiv {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
}

#space {
    display: flex;
    justify-content:flex-end;
    margin-right: 30px;
}

#container {
  margin-top: 50px
}

#personalForm {
    border: 1px solid grey;
    padding: 20px;
}

#featuresForm {
    border: 1px solid grey;
    padding: 20px;
    margin-bottom: 10px;
}

#featureInfo {
    font-weight: bold;
}

</style>
