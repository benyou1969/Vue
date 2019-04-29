<template>
  <div class="hello"> 
  <h2>DATA BINDING</h2>
  <p>first of all, what is binding? or bind something? it's strong covering sometime is a metal to hold the pages of the book together.</p>
  why VUE doesn't update this? Like it did with others properties <br>
    <!-- <a href="{{ msg }}" target="__blank" class="hrefSite">Benyou</a> -->
  The reason is, All HTML Attributes like href, value, class...they all expect a  string value <br>

  How to do it or solve it? <br>

  It's very easy, when we see attribute try to bind it with data, like we are saying: Vue when u see attribute has binded with data properties change Msg and display the msg or link from vue instance <br>
    <a :href="msg" target="__blank" :class="classes">Benyou</a>
    <!-- <a v-bind:href="msg" target="__blank" v-bind:class="classes">Benyou</a> -->
    <input type="text" :value="value_input">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'http://www.benyou.me/',
      classes: 'hrefSite',
      value_input: 'Search...'
    }
  },
}
</script>

<style scoped>
.hrefSite{
  color:aquamarine;
  font: 1em sans-serif;
}
</style>
