<template>
      <div class="container chat">
            <h2 class="center-align teal-text">Chat</h2>
            <div class="card">
                  <div class="card-content">
                        <ul class="messages">
                              <li>
                              <li v-for="message in messages" :key="message.id">
                                    <span class="teal-text">{{ message.name }}</span>
                                    <span class="grey-text md-darken-3">{{ message.content }}</span>
                                    <span class="dark-text time">{{ message.timestamp }}</span>
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
import db from "@/firebase/init"

export default {
      name: 'Chat',
      props: ['name'],
      components:{
            NewMessage
      },
      data(){
            return{
                  messages: []
            }
      },
      created(){
            let ref = db.collection('messages').orderBy('timestamp')

            ref.onSnapshot(snapshot => {
                  snapshot.docChanges().forEach(change => {
                        if (change.type == 'added'){
                              let doc = change.doc
                                    // console.log(change.doc.data.name)
                              this.messages.push({
                                    id: doc.id,
                                    name: doc.data().name,
                                    content: doc.data().content,
                                    timestamp: doc.data().timestamp
                              })
                        }
                  })
            })
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
