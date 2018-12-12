<template>
  <div id="app">
    <b-container>
      <b-col md="8" offset-md="2">
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
                        label="Password"
                        label-for="exampleInput1"
                        description="We'll never share your email with anyone else.">
            <b-form-input id="exampleInput1"
                          type="password"
                          v-model="form.password"
                          required
                          placeholder="Enter password">
            </b-form-input>
          </b-form-group>
          
          <b-form-group id="group3"
                      label="Full Name:"
                      label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Enter name">
          </b-form-input>
          </b-form-group>

          <b-form-group id="group4"
                        label="Food:"
                        label-for="exampleInput3">
            <b-form-select id="exampleInput3"
                          :options="foods"
                          required
                          v-model="form.food">
            </b-form-select>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
