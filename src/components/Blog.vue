<template>
  <div>
    <input type="text" v-model="searchTerm">
    <ul> 
          <li v-for="item in filteredPost" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
      name: 'blog',
      data(){
            return{
                  searchTerm: '',
                  items: []
            }
      },
      created(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                  this.items = response.data
            })
            .catch(err => {
                  console.log(err)
            })
      },
      computed: {
            filteredPost() {
                  return this.items.filter(parameter => {
                        return parameter.title.match(this.searchTerm)
                  })
            }
      },
}
</script>
