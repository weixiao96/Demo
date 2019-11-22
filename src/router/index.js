import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Details from '@/components/Details'
import login from '@/components/login'
import login2 from '@/components/login2'
import register from '@/components/register'
import register2 from '@/components/register2'
import Authentication from '@/components/Authentication'
import news from '@/components/news'
import Gender from '@/components/Gender'
import find from '@/components/find'
import dynamic from '@/components/dynamic'
Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    {
      path: '/',
      name: '/login',
      component: login
    },{
      path: '/Details',
      name: '/Details',
      component: Details
    },{
      path: '/login2',
      name: '/login2',
      component: login2
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/register2',
      name: 'register2',
      component: register2
    },{
      path: '/Authentication',
      name: 'Authentication',
      component: Authentication
    },{
      path: '/news',
      name: 'news',
      component: news
    },{
      path: '/Gender',
      name: 'Gender',
      component: Gender
    },{
      path: '/index',
      name: 'index',
      component: index
    },{
      path: '/find',
      name: 'find',
      component: find
    },{
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    }

  ]
})
