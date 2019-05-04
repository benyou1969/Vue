<template>
      <div class="view-profile">
            <h2>Profile</h2>
            {{ userID }}
      </div>
</template>

<script>
export default {
      name: 'Profile',
      data(){
            return {
                  userID: this.$route.params.user_id
            }
      }
}
</script>
