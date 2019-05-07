<template>
      <div class="index container">
            <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
                  <div class="card-content">
                  <i @click="deleteSmoothie(smoothie.id)" class="material-icons delete">delete</i>

                        <h2 class="purple-text">{{ smoothie.title }}</h2>
                        <ul class="ingredients">
                              <li class="ing" v-for="(ing, index) in smoothie.ingredients" :key="index">{{ ing }}</li>
                        </ul>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      name:'Index',
      data(){
            return{
                  smoothies: [
                        {title: 'Ninja Brew', slug: 'ninja-brew', ingredients: ['banans', 'coffee', 'milk'], id: '1'},
                        {title: 'Benyouuu Woalah', slug: 'benyouu-woalah', ingredients: ['apple', 'juice', 'strawberry'], id: '2'}
                  ]
            }
      },
      methods:{
           deleteSmoothie(id){
                 this.smoothies = this.smoothies.filter(smoothie => {
                       alert('confirm')
                       return smoothie.id != id
                 })
           }
      }
}
</script>

<style>
.index{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;
      margin-top: 60px;
}
.index .card .card-content .delete{
      position: absolute;
      top: 4px;
      right: 4px;
      cursor: pointer;
      /* float: right; */
      color: #aaa;
      font-size: 1.4em;
      
}
.index .card h2{
      font-size: 1.8em;
      text-align: center;
      margin-top: 0px;
}
.index .card .ingredients{
      list-style: none;
}
.index .card .ingredients .ing{
      border-radius: 10px;
      background-color: #eee;
      display: inline-block;
      margin-right: 10px;
      padding: 5px 5px;
      text-transform: capitalize;
}
</style>
