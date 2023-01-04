import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'
import List from '../views/List.vue'

const routes = [
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    children: [{
      path: ':id',
      name: 'post',
      component: Post,
      children: [{
        path:':content',
        name: 'list',
        component: List,
      }]
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
