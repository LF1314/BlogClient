import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/index',
      name:'index',
      component:()=>import('@views/blogindex'),
      redirect:'/index/home',
      children:[
        {
          path:'home',
          name:'home',
          meta:'首页',
          component:()=>import("@views/home")
        },
        {
          path:'write',
          name:'write',
          meta:'写博客',
          component:()=>import('@views/writeblog')
        },
        {
          path:'login',
          name:'login',
          meta:'登陆',
          component:()=>import('@views/login')
        },
        {
          path:'singup',
          name:'singup',
          meta:'注册',
          component:()=>import('@views/singup')
        }
      ]
    }

  ]
})
