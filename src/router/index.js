import { createRouter, createWebHistory  } from 'vue-router'
import home from "../views/home"
import categories from "../views/categories";
import shopCart from "../views/shopCart";
import user from "../views/user";

const routes = [

  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: categories
  },
  {
    path: '/shopCart',
    name: 'ShopCart',
    component: shopCart
  },
  {
    path: '/user',
    name: 'User',
    component: user
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
