<template>
      <div class="navbar navbar-fixed">
            <nav class="nav-extended purple darken-1">
                 <div class="nav-content">
                        <router-link :to="{ name: 'Index' }">
                              <span class="nav-title">Smoothies</span> 
                        </router-link>
                        <a href="" class="btn-large  btn-floating halfway-fab pink">
                              <router-link :to="{ name: 'AddSmoothie' }">
                                <i class="material-icons">add</i>
                              </router-link>
                        </a>
                 </div>
            </nav>
      </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
          return {

          }
    }  
}
</script>

<style>
.navbar{
      margin-bottom: 50px;
}
 .navbar nav{
       padding: 0 20px;
 }
</style>
