<template>
      <div>
           <p> {{ lorum | FirstLetterUpperCase  | Backwards}}</p>
           <p>{{ word | Backwards }}</p>
      </div>
</template>

<script>

export default {
      name: 'blog',
      data(){
            return{
                  word: 'food',
                  lorum: 'lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor fuga sit adipisci vero quisquam perferendis qui nihil nesciunt fugiat quis rerum animi eos ex praesentium eligendi cum sint neque.'
            }
      },
      filters: {
            // 'Locally'
            FirstLetterUpperCase: function(value) {
                 if(!value) return ''
                 value = value.toString();
                 return value.charAt(0).toUpperCase() + value.slice(1)
           },
        
           Backwards: function(str) {
                 return str.split("").reverse().join("")
           }
      },
      methods: {
           
      },
}
</script>
