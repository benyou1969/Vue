<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Navbar />
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    HelloWorld, Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
