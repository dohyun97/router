<template>
    <h2>Post</h2>
    <router-link :to="`/posts/${post.id}/${post.content}`">{{ post.content }}</router-link>
   <router-view />
  </template>
  
  <script>
  import { computed } from 'vue'
  import { Postings } from "../Postings.js";
  import { useRoute } from 'vue-router'
  export default {
    name: "Post",
    setup(props) {
      const currentRoute = useRoute();
      const post = computed(() => Postings.find(x => 
        x.id == parseInt(currentRoute.params.id, 10)
    ))
      
    
    //   console.log("post", post)
      
      return {
        currentRoute,
        post
      };
    },
  };
  </script>
  