<template>
  <div class="hello"> 
    <input type="text" @blur="updateName">
    <div class="divGrey" @mouseup="sendAlert(e)">
            {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    updateName(e) {
      return this.name = e.target.value
    },
    sendAlert(e){
        console.log(e)
        console.log(e.srcElement.baseURI)
        alert("mouse moved up" )
     }
  },
}
</script>

<style scoped>
.divGrey{
width: 300px;
height: 100px;
color: white;
background: grey;
}
</style>
