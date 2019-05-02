<template>
  <div class="likes">
    <h2>DisLikes</h2>
    <div v-for="(item, index) in items" :key="index">
      <span v-if="item.type == 1">{{ item.name +", " +item.time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisLikes",
  props: ['items'],
  
  data() {
    return {
      
    };
  }
};
</script>

<style>
</style>
