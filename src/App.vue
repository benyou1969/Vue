<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Likes :items="items"/>
    <DisLikes :items="items"/>
  </div>
</template>

<script>
import Likes from "./components/Likes";
import DisLikes from "./components/DisLikes";

export default {
  name: "App",
  components: {
    Likes,
    DisLikes
  },
  data() {
    return {
     items: [
        { name: "benyou", time: "2min ago", type: 0 },
        { name: "jhon", time: "13min ago", type: 1 },
        { name: "minho", time: "1h ago", type: 0 },
        { name: "jack", time: "5min ago", type: 0 },
        { name: "evan", time: "2d ago", type: 1 }
      ]
     }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
