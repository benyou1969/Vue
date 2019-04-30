<template>
  <div class="hello">
    <div>
      <button @click="clickEvent">click me</button>
      <button @click.exact="clickExactEvent">click me</button>
      <button @click.shift="shiftEvent">shift me</button>
      <button @click.alt="altEvent">alt me</button>
      <button @click.once="price++">{{ price }}</button>
      <button @click.meta="preventEvent">Stop Google</button>
      <a @click.prevent="preventEvent" href="http://www.google.com">Google</a>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      price:10,
      name: ''
    }
  },
  methods: {
    clickEvent(){
      console.log('clicked...')
    },
    clickExactEvent(){
      console.log('you pressed only click event...')
    },
    shiftEvent(){
      console.log('shifted...')
    },
    altEvent(){
      console.log('alted...')
    },
    preventEvent(){
      console.log('prevent')
    }
  },
}
</script>

<style scoped>

</style>
