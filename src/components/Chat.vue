<template>
      <div class="container chat">
            <h2 class="center-align teal-text">Chat</h2>
            <div class="card">
                  <div class="card-content">
                        <ul class="messages">
                              <li>
                                    <span class="teal-text">name</span>
                                    <span class="grey-text md-darken-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo tempore quibusdam dolor voluptates ipsum modi, quisquam nisi nostrum voluptatem veniam, quaerat odio incidunt delectus consequatur porro, quam repellat aliquid?</span>
                                    <span class="dark-text time">10:20pm</span>
                              </li>
                        </ul>
                  </div>
                  <div class="card-action">
                        <NewMessage :name="name" />
                  </div>
            </div>
      </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
export default {
      name: 'Chat',
      props: ['name'],
      components:{
            NewMessage
      },
      data(){
            return{

            }
      }
}
</script>

<style>
.chat h2{
      font-size: 2.6em;
}
.chat span{
      font-size: 1.4em;
}
.chat .time {
      display: block;
      font-size: 1.2em;
}
</style>
