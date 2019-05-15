<template>
  <div id="app">
    <Navbar />
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar'
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style>

</style>
