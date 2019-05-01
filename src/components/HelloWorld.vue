<template>
  <div class="hello">
    <div>
      <h2>Color: Basic v-for</h2>
      <!-- The index is the position of the item in the array -->
      <ul>
        <li v-for="(color, index) in colors">{{ index }}. {{ color }}</li>
      </ul>
      <hr>
      <h2>Users: Loop objects (Multi arrays)</h2>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name +' => '+ user.gender }}</li>
      </ul>
      <p>Only actives user</p>
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
          v-if="user.active"
        >{{ user.name +' => '+ user.gender }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      colors: ["red", "white", "black"], // string
      users: [
        { id: 1, name: "Benyou", gender: "male", active: true }, // Object
        { id: 2, name: "Hannah", gender: "female", active: false },
        { id: 3, name: "Sarah", gender: "female", active: true },
        { id: 4, name: "Mark", gender: "male", active: false }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
li {
  list-style: none;
  font-style: inherit;
  font-size: 1.3rem;
}
</style>
