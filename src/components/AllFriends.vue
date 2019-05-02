<template>
      <div id="all-friends">
            <h2>All friends</h2>
            <div v-for="(friend, index) in friends" :key="index">
                  <span  @click="unfriend(friend.name)">{{ index }}{{ friend.name }}</span>
            </div>
      </div>
</template>

<script>
export default {
      name: 'AllFriends',
      props: ['friends'],
      data() {
            return{
            }       
      },
      methods: {
            unfriend(name) {
                  this.$emit('delete', {name: name}) // first parameter u can call whatever you want :)
                  // the second parameter it's and object and it's has the same name (name"paramater": name"data properties") u can type it like that (name) => E6
            }
      }
}
</script>

<style>

</style>
