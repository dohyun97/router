<template>
    <h2>List</h2>
    <ol>
    <li v-for="list in post.list" :key="list">
      {{list}}
    </li>
  </ol>
    
   
  </template>
  
  <script>
  import { computed } from 'vue'
  import { Postings } from "../Postings.js";
  import { useRoute } from 'vue-router'
  export default {
    name: "List",
    setup(props) {
      const currentRoute = useRoute();
          
      const post = computed(() => Postings.find(x => 
        x.content === currentRoute.params.content
    ))
      
    
      console.log("post", post)
      
      return {
        currentRoute,
        post
      };
    },
  };
  </script>
  