<template>
  <div class="hello">
    <div>
      <input type="text" v-model="name">
       Type your name to show it: <b>{{ name }}</b>
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
    
  },
}
</script>

<style scoped>

</style>
