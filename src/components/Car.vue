<template>
  <div id="app">
    <div id="car">
        <div class="container.fluid">
            <div class="row">
                <div class="col" id="imgDiv">
                    <img height="260" width="720" v-bind:src="carData.img" />
                </div>
                <div class="col" id="infoDiv">
                    <p>{{carData.name}}</p>
                    <div class="row">
                        <div class="col" id="infosDiv">
                            <i class="fa fa-paw"></i>
                            <p>Koltuk Sayısı : 4<p/>
                            <p>Klima: Var<p/>
                        </div>
                        <div class="col" id="infosDiv">
                            <p>Yakıt Tipi : Dizel<p/>
                            <p>Vites Tipi : Düz<p/>
                        </div>
                        <div class="col" id="infosDiv">
                        </div>
                    </div>
                    <p>Price: {{carData.price}} TL</p>
                     <div id="space">
                        
                        <b-button variant="primary lg"><router-link :to="{name: 'CarInfo', params: {carData}}" id="links">Rent</router-link></b-button>
                    </div>
                     <div>
                 </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'car', 
    data () {
    return {
        price : 0,
        status: 'not_accepted'
    }
  }, 
  props: {
    carData: Object
  }
}
</script>

<style scoped>
#car {
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
</style>
