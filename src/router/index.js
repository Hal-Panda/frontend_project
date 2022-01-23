import { createRouter, createWebHistory  } from 'vue-router'
import store from '../store'
const home = () => import("../views/home")
const categories = () => import("../views/categories")
const shopCart = () => import("../views/shopCart")
const user = () => import("../views/user")
const showGood =() =>import("../views/Good/showGood")

// import categories from "../views/categories";
// import shopCart from "../views/shopCart";
// import user from "../views/user";
// import login from "../views/login";

const routes = [

  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: categories,
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
  {
    path: '/showGood/:id',
    name: 'showGood',
    component: showGood
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: login,
  //   beforeEnter: (to, from, next) => {
  //     store.commit('turnBR', from.fullPath);
  //     next()
  //   },
  //   children:[
  //     {
  //       path: "test1",
  //       component: test1,
  //     },
  //     {
  //       path: "test2",
  //       component: test2,
  //     }
  //   ]
  // },

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

// router.beforeEach((to,from,next) => {
//   alert(to.path)
//   alert(from.path)
//   next()
// })

export default router
