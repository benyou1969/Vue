<template>
  <div class="likes">
    <h2>Likes</h2>
    <div v-for="(item, index) in items" :key="index">
          <span v-if="item.type == 0">{{ item.name +", " +item.time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Likes",
  props: ['items'],
  data() {
    return {
    };
  }
};
</script>

<style>
</style>
