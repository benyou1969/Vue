<template>
  <div>
    <p>{{ word }}</p>
    <ul> 
          <li v-for="(item,index) in items" :key="index" @click="reverseArr">{{ item }}</li>
    </ul>
  </div>
</template>

<script>

export default {
      name: 'blog',
      data(){
            return{
                  word: 'food',
                  items: [
                        23,32,54,76,87
                  ]
            }
      },
      filters: {
            
      },
      methods: {
            reverseArr() {
                   return this.items = this.items.reverse();
            }
      },
}
</script>
