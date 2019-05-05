<template>
      <div>
            <ul>
                  <li><router-link :to="{name: 'Home'}">Home</router-link></li>
                  <li><router-link :to="{name: 'About'}">About</router-link></li>
                  <li><router-link :to="{name: 'Contact'}">Contact us</router-link></li>
            </ul>
            <h2>Profile users</h2>
            <ul>
                  <li v-for="(id, index) in userIds" :key="index">
                        <!-- <router-link :to="'/users/'+ id">{{ id }}</router-link> -->
                        <router-link :to="{name: 'Profile', params: {user_id: id }}">
                              <span>Profile{{ id }}</span>
                        </router-link>
                  </li>
            </ul>
            <h2>Navigation control</h2>
            <ul>
                  <li>
                        <button @click="goBack">Go Back</button>
                  </li>

                  <li>
                        <button @click="goHome">Redirect to Home</button>
                  </li>
                  <li>
                        <button @click="goForward">Go Forward</button>
                  </li>
            </ul>
      </div>
</template>

<script>
export default {
      name: 'Navbar',
      data() {
            return {
                  userIds: ["1","3","7","99"]
            }
      },
      methods: {
            goHome() {
                  // now we type this.$router not this.$route
                  // the diffrence between them is
                  // this.$route = singler refers to just the single route
                  // this.$router = refers to the entire router history  
                  this.$router.push({name: 'Home'})
            },
            goBack() {
                  this.$router.go(-1)
            },
            goForward(){
                  this.$router.go(+1)
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
