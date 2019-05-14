<template>
      <div class="contianer chat">
            <h2>Chat, {{ this.name }}</h2>
      </div>
</template>

<script>
export default {
      name: 'Chat',
      props: ['name'],
      data(){
            return{

            }
      }
}
</script>
