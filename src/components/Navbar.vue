<template>
      <div>
            <ul>
                  <li><router-link :to="{name: 'Home'}">Home</router-link></li>
                  <li><router-link :to="{name: 'About'}">About</router-link></li>
                  <li><router-link :to="{name: 'Contact'}">Contact us</router-link></li>
            </ul>
      </div>
</template>

<script>
export default {
      name: 'Navbar',
      data() {
            return {
                  
            }
      }
}
</script>

<style >

li{
      list-style: none;
      display: inline-block;
      padding: 5px 10px; 
}
li a{
      color: #41b882;
}
.router-link-exact-active{
      color:black;
}
a:link {
  text-decoration: none;
}

a:active {
  color: blue;
}
a:hover {
  text-decoration: underline;
}
</style>
