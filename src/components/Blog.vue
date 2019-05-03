<template>
      <div>
           <!-- <p> {{ lorum | FirstLetterUpperCase  | Backwards}}</p> -->
           <p>{{ word | reverseString }}</p>
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
            // 2. Reverse a String With a Decrementing For Loop
            // link: https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
            reverseString: function(str) {
                  // Step one: create an empty string that will host the new created string
                  var newString = ""
                  // Step two: create a new for loop
                  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
                        last character of the string, "o"
                        As long as it is greater than or equals 0, the loop will go on
                        We decrement i after each iteration */
                  for (var i=str.length -1; i >=0; i--){
                        newString += str[i]
                  }
                  return newString; 

            }
      },
      methods: {
           
      },
}
</script>
