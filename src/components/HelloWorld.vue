<template>
  <div class="hello"> 
    <div class="divGrey" @mousemove="logEvent">
      <b>X: {{ coords.offsetX }}</b>,
      <b>Y: {{ coords.offsetY }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      coords:{
      offsetX: 0,
      offsetY: 0,
      }
    }
  },
  methods: {
    logEvent(e){
       this.coords.offsetX = e.offsetX
       this.coords.offsetY = e.offsetY
     }
  },
}
</script>

<style scoped>
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .divGrey{
  width: 500px;
  height: 150px;
  background-color: grey;
  border-radius: 5px;
  margin-left: 30%;
  color: white;
  }  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
    .divGrey{
    width: 500px;
    height: 150px;
    background-color: grey;
    border-radius: 5px;
    margin-left: 22%;
    color: white;
    }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

/* @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .divGrey{
    width: 500px;
    height: 150px;
    border: 1px solid #41b883;
    background-color: grey;
    border-radius: 5px;
    margin-left: 22%;
    }
  
} */

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
    .divGrey{
    width: 400px;
    height: 150px;
    background-color: grey;
    border-radius: 5px;
    margin-left: 12%;
    color: white;
    }
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
    .divGrey{
    width: 300px;
    height: 150px;
    background-color: grey;
    border-radius: 5px;
    margin-left: 8%;
    color: white;
    }
}
</style>
