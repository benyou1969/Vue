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
import db from '@/firebase/init'
export default {
      name:'Index',
      data(){
            return{
                  smoothies: []
            }
      },
      methods:{
           deleteSmoothie(id){
                 this.smoothies = this.smoothies.filter(smoothie => {
                       alert('confirm')
                       return smoothie.id != id
                 })
           }
      },
      created(){
            // fetch data from firestore
            db.collection('smoothies').get()
            .then(snapshot => {
                  snapshot.forEach(doc => {
                  //      console.log(doc.data(), doc.id) 
                  let smoothie = doc.data()
                  smoothie.id = doc.id
                  this.smoothies.push(smoothie)
                  });
            })
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
