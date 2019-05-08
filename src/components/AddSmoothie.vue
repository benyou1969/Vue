<template>
      <div class="container add-smoothie">
            <h2 class="center-align purple-text">Add new Smoothie</h2>
            <form @submit.prevent="AddSmoothie">
                  <div class="field title">
                        <label for="title">Smoothie title:</label>
                        <input type="text" name="title" v-model="title">
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
export default {
    name: 'AddSmoothie',
    data(){
          return {
                title: null,
                another: null,
                ingredients: [],
                feedback: null
          }
    },
    methods: {
          AddSmoothie(){
                if(this.title && this.ingredients){
                console.log(this.title, this.ingredients)
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
}
</style>
