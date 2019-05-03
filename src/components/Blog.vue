<template>
      <div>
           <ul>
                 <li v-for="item in items" :key="item.id"> {{ item.title | snippet }}</li>
           </ul>
      </div>
</template>

<script>
import axios from 'axios'

export default {
      name: 'blog',
      data(){
            return{
                  items: []
            }
      },
      methods: {
           
      },
     created(){
           axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                 console.log(response.data)
                 this.items = response.data
           })
           .catch(error => {
                 console.log(error)
           })
     }
}
</script>
