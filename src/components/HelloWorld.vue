<template>
  <div class="hello">
    <div>
      <p v-if="shortName">Benyou</p>
      <p v-else-if="toggleAge">15</p>
      <button @click="toggleClick">showName is {{ shortName }}</button>
      <button @click="toggleAge">showAge is {{ age }}</button>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      shortName: false,
      age: true
    }
  },
  methods: {
    toggleClick(){
      // const short = this.shortName
      // if(short== true) {

      // if(this.shortName == true) {
      //   this.shortName = false
      // }else{
      //   this.shortName = true
      // }
  
      this.shortName = !this.shortName
    },
    toggleAge() {
      this.age = !this.age
    }
  },
}
</script>

<style scoped>

</style>
