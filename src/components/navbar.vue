<template>
  <div id="app">
    <div id="colorDiv"> </div>
    <b-navbar toggleable="md" type="dark" variant="primary">
        <b-navbar-brand href="#"><router-link to="/" id="links">Rent a Car</router-link></b-navbar-brand>

        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><router-link to="/register" id="links">Sign Up</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/login" id="links">Login</router-link></b-nav-item>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'navbar',
}
</script>

<style>
#links {
    color: white;
}
#colorDiv {
    background-color: #007BFF;
    height: 20px;
}
</style>
