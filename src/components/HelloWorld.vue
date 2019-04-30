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

@media (min-width: 1000px) 
{
  .divGrey{
  width: 500px;
  height: 150px;
  border: 1px solid #41b883;
  background-color: grey;
  border-radius: 5px;
  margin-left: 30%;
  }
}
@media only screen and (max-width: 600px)
{
.divGrey{
  width: 500px;
  height: 150px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-left: 7%;
}
}
</style>
