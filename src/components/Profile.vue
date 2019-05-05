<template>
      <div class="view-profile">
            <h2>Profile</h2>
            {{ userId }}
      </div>
</template>

<script>
export default {
      name: 'Profile',
      data(){
            return {
                  userId: this.$route.params.user_id
            }
      },
      methods:{
            updateId() {
              this.userId = this.$route.params.user_id   
            }
      },
      watch: {
            // I did in last commit when we went from one profile to another it changed this.$route parameter but unfortunately because vue js is recilying the component and it doesn't distroy it

            // the soultion for that is by creating a watch that will be watch this property route and when it change we can react by updating the userId

            // first step is create "watch" property and it's an object to watch certain things such as variables and object and when that variable or object changed then we can called a function to react

            $route: 'updateId'
      }
}
</script>
