<template>
       <div class="edit-smoothie container" v-if="smoothie">
            <h2 >Edit a smoothie {{ smoothie.title }}</h2>
            <form>

            </form>
      </div>
</template>

<script>
import db from '@/firebase/init'
export default {
      name: 'EditSmoothie',
      data(){
            return{
                  smoothie: null,
            }
      },
      created(){
            let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug )
            ref.get().then(snapshot => {
                  snapshot.forEach(doc => {
                        this.smoothie = doc.data()
                        this.smoothie.id = doc.id
                        console.log(doc.data())
                  })
            })
           
      }
}
</script>

<style>

</style>
