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
                        <input type="text" name="add-ingredient" id="">
                  </div>
                  <div class="field center-align">
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
          }
    },
    methods: {
          AddSmoothie(){
                console.log(this.title)
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
