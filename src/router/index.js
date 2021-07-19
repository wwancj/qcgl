import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Car from '../views/car.vue'
import my from '../views/my.vue'
Vue.use(VueRouter);

const routes = [
  {path:'/',
  redirect:'Home'
},
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children:[
      {path:'/car',component:Car},
      
    ]
    // redirect:'/Home'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path:'/my',
    component: my,
  }
];

const router = new VueRouter({
  routes,

});

export default router;
