<template>
  <div class="hello"> 
    <p>My name is <b>{{ name.toUpperCase()}}, I earn ${{ wage }} per hour</b></p>
    <button @click="wage++">Increase wage by $1</button>
    <button @click="wage--">Decrease wage by $1</button>
    <button @dblclick="wage++">Increase wage by $1(dbl)</button>
    <button @dblclick="wage--">Decrease wage by $1(dbl)</button>
    <button @click="changeWage(5)">Increase wage by $5</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     name: 'benyou',
     wage: 15,
    }
  },
  methods: {
    changeWage(amount) {
        this.wage += amount    
    }
  },
}
</script>

<style scoped>

</style>
