<template>
      <div>
           <p> {{ lorum | FirstLetterUpperCase }}</p>
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
           Backwards: function (value) {
            //     there are Four method to reverse a sting (link: https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb)
                  if(!value) return ''
                  value = value.toString()
            //    step one: use split method to turn a new array
                  value = value.split("")
            //    step two: Use the reverse() method to reverse the new array
                  value = value.reverse(value)
            //     step three: Use Join to Joing all Elements of array into string
                  value = value.join("");
            //    Step four Return the reversed string
                  return value
           }
      },
      methods: {
           
      },
}
</script>
