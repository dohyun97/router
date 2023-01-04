<template>
  <h4>Postings</h4>
  <ul v-for="post in Postings" :key="post">
    <li>
      <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
import { Postings } from "../Postings.js";
export default {
  name: "Posts",
  setup(props) {
    // console.log("Postings", Postings)
    return {
        Postings,
    };
  },
};
</script>
