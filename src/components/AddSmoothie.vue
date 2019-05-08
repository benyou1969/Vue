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
                  </div>
                  <div class="field add-ingredient">
                        <label for="ingredient">Add an Ingredient</label>
                        <input type="text" name="add-ingredient"  @keydown.enter.prevent="addIng" v-model="another">
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
          AddSmoothie(){
                if(this.title){
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
          addIng(){
                if(this.another){
                      this.ingredients.push(this.another)
                      this.another = null
                      this.feedback = null
                      console.log(this.ingredients)
                }else{
                      this.feedback = 'You must enter a value to add ingredients'
                }
          },
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
}
.add-smoothie .field .delete{
      cursor: pointer;
      color: red;
}
</style>
