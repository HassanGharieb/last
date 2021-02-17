<template>
  <div class="blog">
    <div v-for="post in posts" :key="post.id">
      <h2>  {{post.id}}</h2>
      <h2>  {{post.employee_name}} </h2>
      <h2>  {{post.employee_salary}} </h2>
      <h2>  {{post.employee_age}} </h2>
     </div>

  </div>

</template>
<script>
import axios from 'axios'
export default {
    name: "blog",
    data:function(){
      return{
      posts:[]

      }  
    },
   created(){
       axios.get('http://dummy.restapiexample.com/api/v1/employee/1')
       .then(res=>{
          
           this.posts=res.data
       })
       .catch(error=>{
           console.log(error)
       })
   }

}
</script>