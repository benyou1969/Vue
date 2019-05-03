<template>
      <div>
            <p @click="changeMsg">{{ msg }}</p>,
             {{ num }}
            <div>
                  <button @click="num++">+</button>
            </div>
      </div>
</template>

<script>
export default {
      name: 'blog',
      data(){
            return{
                  msg: 'Hello',
                  num: 0,
            }
      },
      methods: {
            changeMsg(){
                  this.msg = "Msg has been changed"
            }
      },
      beforeCreate(){
            alert('Hi this component is creating');
      },
      created(){
            alert('Hi this component has created');  
      },
      beforeUpdate(){
                 alert('Hi this component is trying to update');   
      },
      updated(){
                 alert('Hi this component has been updated');   
      }
}
</script>
