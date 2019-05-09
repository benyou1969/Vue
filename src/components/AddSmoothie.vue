<template>
      <div class="container add-smoothie">
            <h2 class="center-align purple-text">Add new Smoothie</h2>
            <form @submit.prevent="AddSmoothie">
                  <div class="field title">
                        <label for="title">Smoothie title:</label>
                        <input type="text" name="title" v-model="title">
                  </div>
                  
                  <div class="field add-ingredient" v-for="(ing, index) in ingredients" :key="index">
                        <label for="ingredient">Add an Ingredient</label>
                        <input type="text" name="ingredient" v-model="ingredients[index]">
                        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
                  </div>
                  <div class="field add-ingredient">
                        <label for="ingredient">Add an Ingredient: {{ another }}</label>
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
import slugify from 'slugify'

export default {
    name: 'AddSmoothie',
    data(){
          return {
                title: null,
                another: null,
                ingredients: [],
                feedback: null,
                slug: null
          }
    },
    methods: {
          addIng(){
                if(this.another){
                      this.ingredients.push(this.another)
                      this.another = null
                      this.feedback = null
                }else{
                      this.feedback = 'You must enter a value to add ingredients'
                }
          },
          AddSmoothie(){
                if(this.title != null && this.another != null){
                        this.feedback = null
                        // create a slug
                        this.slug = slugify(this.title, {
                              replacement: '-',
                              remove: /[$#@!$%ˆ&*:.>?<()-]/g,
                              lower: true
                        })
                        console.log(this.slug)
                        db.collection('smoothies').add({
                              title: this.title,
                              slug: this.slug,
                              ingredients: this.ingredients,
                        })
                        .then(() => {
                              this.$router.push({name: 'Index'})
                        })
                        .catch(error => {
                              console.log(error)
                        })
                }else{
                    this.feedback = 'You must enter a value to add ingredients'
                }
          },
          
          deleteIng(ing){
                this.ingredients = this.ingredients.filter(ingredient => {
                      return ingredient != ing
                })
          }
    } 
}
</script>

<style>
.add-smoothie{
      margin-top: 60px;
      padding: 20px;
      max-width: 500px;
}
.add-smoothie h2{
      font-size: 2em;
}
.add-smoothie .field{
      margin: 20px auto;
      position: relative;
}

.add-smoothie .field .delete{
      position: absolute;
      right: 0;
      bottom: 16px;
      color: #aaa;
      cursor: pointer;
}
</style>
