<template>
       <div class="edit-smoothie container" v-if="smoothie">
            <h2 >Edit a smoothie {{ smoothie.title }}</h2>
             <form @submit.prevent="EditSmoothie">
                  <div class="field title">
                        <label for="title">Smoothie title:</label>
                        <input type="text" name="title" v-model="smoothie.title">
                  </div>
                  
                  <div class="field add-ingredient" v-for="(ing, index) in smoothie.ingredients" :key="index">
                        <label for="ingredient">Add an Ingredient</label>
                        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
                        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
                  </div>
                  <div class="field add-ingredient">
                        <label for="ingredient">Update an Ingredient: {{ another }}</label>
                        <input type="text" name="another"  @keydown.enter.prevent="addIng" v-model="another">
                  </div>
                  <div class="field center-align">
                        <p v-if="feedback" class="red-text">{{ feedback }}</p>
                        <button class="btn purple">Add Smoothie</button>
                  </div>
            </form>
      </div>
</template>

<script>
import db from '@/firebase/init'
export default {
      name: 'EditSmoothie',
      data(){
            return{
                  smoothie: null,
                  another:null,
                  feedback: null,
            }
      },
      created(){
            let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug )
            ref.get().then(snapshot => {
                  snapshot.forEach(doc => {
                        this.smoothie = doc.data()
                        this.smoothie.id = doc.id
                        console.log(doc.data())
                  })
            })   
      },
      methods: {
            EditSmoothie() {
                  console.log(this.smoothie.title, this.smoothie.ingredients)
            },
            deleteIng(ing){
                this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
                      return ingredient != ing
                })
          },
           addIng(){
                if(this.another){
                      this.ingredients.push(this.another)
                      this.another = null
                      this.feedback = null
                }else{
                      this.feedback = 'You must enter a value to add ingredients'
                }
          },
      }
}
</script>

<style>
.edit-smoothie{
      margin-top: 60px;
      padding: 20px;
      max-width: 500px;
}
.edit-smoothie h2{
      font-size: 2em;
}
.edit-smoothie .field{
      margin: 20px auto;
      position: relative;
}

.edit-smoothie .field .delete{
      position: absolute;
      right: 0;
      bottom: 16px;
      color: #aaa;
      cursor: pointer;
}
</style>
