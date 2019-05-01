<template>
  <div class="hello">
  in CDN:(content delivery network) it was a a data property which was an object
  a data() in cli:(Command Line Interface) becomes a function 
  Why it becomes an function?, well, basicly it's here to protect our data 
  imagin we create a component which it might used in many pages and renders a comments or share button...  so we try to insurence the instance has her own data which it might be diffrent from the others.
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
     title: 'Testing is there anybody there!!'
    };
  },
  methods: {

  }
};
</script>

<style scoped>
h1{
  font-size: 1.3rem;
  text-align: center;
}
</style>
