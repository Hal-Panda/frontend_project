import { createRouter, createWebHistory  } from 'vue-router'
import store from '../store'
const home = () => import("../views/home")
const categories = () => import("../views/categories")
const shopCart = () => import("../views/shopCart")
const user = () => import("../views/user")
const showGood =() =>import("../views/Good/showGood")
const login = () => import("../views/login/loginShow")
const showSearchByTitle =()=>import("../views/searchGoods/showSearchByTitle")
const showSearchByClassify =()=>import("../views/searchGoods/showSearchByClassify")
const SCG_right = () =>import("../views/Categories/SCG_right")
const commitOrder = () =>import("../views/order/commitOrder")
const payOrder = () => import( "../views/order/payOrder")
const paySuccess = () =>import("../views/order/paySuccess")
const myOrder = () =>import("../views/order/myOrder")
const orderDetail = () =>import("../views/order/orderDetail")
const userBaseInfo = () =>import("../views/User/userBaseInfo")
const changePsw = () => import("../views/User/changePsw")
const accoutChangePsw = () => import("../views/User/changePsw/accoutChangePsw")
const packetChangePsw = () => import("../views/User/changePsw/packetChangePsw")
const packetShow = () => import("../views/User/packetShow")
const setter = () => import("../views/User/setter")

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
      children:[
        {
          path: "right/:id",
          component: SCG_right,
        },
      ]
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
    name: 'ShowGood',
    component: showGood
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/showSearchByTitle',
    name: 'showSearchByTitle',
    component: showSearchByTitle
  },
  {
    path: '/showSearchByClassify',
    name: 'showSearchByClassify',
    component: showSearchByClassify,
  },
  {
    path: '/commitOrder',
    name: 'CommitOrder',
    component: commitOrder,
  },
  {
    path: '/payOrder',
    name: 'PayOrder',
    component:payOrder,
  },
  {
    path: '/paySuccess',
    name: 'PaySuccess',
    component: paySuccess,
  },
  {
    path: '/myOrder',
    name: 'MyOrder',
    component: myOrder,
  },
  {
    path: '/orderDetail',
    name: 'OrderDetail',
    component:orderDetail,
  },
  {
    path: '/userBaseInfo',
    name: 'UserBaseInfo',
    component:userBaseInfo,
  },
  {
    path: '/changePsw',
    name: 'ChangePsw',
    component:changePsw,
  },
  {
    path: '/accoutChangePsw',
    name: 'AccoutChangePsw',
    component:accoutChangePsw,
  },
  {
    path: '/packetChangePsw',
    name: 'PacketChangePsw',
    component:packetChangePsw,
  },
  {
    path: '/packetShow',
    name: 'PacketShow',
    component:packetShow,
  },
  {
    path: '/setter',
    name: 'Setter',
    component:setter,
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
