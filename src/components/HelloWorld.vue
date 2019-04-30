<template>
  <div class="hello">
    <div>
      <input type="text" @keyup="updateName">
       Type your name to show it: <b>{{ name }}</b>
    </div> 
    <div>
      <input type="text" @keypress="updateName">
       Type your name and Keypress to show it: <b>{{ name }}</b>
    </div> 
    <div>
      <input type="text" @keyup.enter="updateName">
       Keyup and Press enter to show the name: <b>{{ name }}</b>
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
    }
  },
}
</script>

<style scoped>

</style>
