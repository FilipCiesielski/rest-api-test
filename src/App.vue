<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import VueDropdown from './components/VueDropdown'

  export default {
    name: 'App',
    components: {VueDropdown}
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
