<template>
      <nav>
            <ul>
                  <li v-for="navItem in navItems">{{ navItem }}</li>
            </ul>
      </nav>
</template>

<script>
export default {
 name:'Navbar',
 data() {
       return{
           navItems: ['Home', 'About', 'Help']
       }
 }
}
</script>

<style>
li{
      list-style: none;
      display: inline-block;
      margin-right: 30px;

}
nav{
      text-align: center;
      width: 100%;
      height: 50px;
      background-color: aquamarine;
}

</style>
