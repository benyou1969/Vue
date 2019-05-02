<template>
  <div id="app">
    <img src="./assets/logo.png">
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <!--  props in nested component -->
    <OnlineFriends :friends="friends"/>
  </div>
</template>

<script>
import AllFriends from "./components/AllFriends";
import OnlineFriends from "./components/OnlineFriends";

export default {
  name: "App",
  components: {
    AllFriends,
    OnlineFriends
  },
  data() {
    return {
      friends: [
        { name: "mario", online: true },
        { name: "jeffrey", online: false },
        { name: "Mark", online: false },
        { name: "Deo", online: true },
        { name: "John", online: false }
      ]
    };
  },
  methods: {
    deleteFriend(payload) {
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
