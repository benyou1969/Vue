<template>
  <div class="hello">
    <input type="text" v-model="msg" class="ipt-green">
    <div class="msg-show">{{ msg.toUpperCase() }}</div>
    <br>
    {{ greet('Morning') }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'',
    }
  },
  methods: {
    greet(title){
      // return `Hello and good ${title}, ${this.msg.toUpperCase()}`
            return `Hello and good ${title}, ${this.msg}`

    }
  }
}
</script>

<style scoped>
.ipt-green{
  border-color: green;
  outline: none;
  border-radius: 4px;
  height: 30px;
  widows: 150px;
}
/* for capitalize or uppercase it's better if you choose to do it with css instead of JS */
/* .msg-show{
 text-transform: capitalize;
} */
</style>
