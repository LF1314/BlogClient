import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router =  new Router({
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
          meta:{index:1},
          component:()=>import("@views/home")
        },
        {
          path:'write',
          name:'write',
          meta:{index:2},
          component:()=>import('@views/writeblog')
        },
        {
          path:'login',
          name:'login',
          meta:{index:3},
          component:()=>import('@views/login')
        },
        {
          path:'singup',
          name:'singup',
          meta:{index:4},
          component:()=>import('@views/singup')
        },
        {
          path:'blogdetail',
          name:'readblog',
          meta:{index:5},
          component:()=>import('@views/readblog')
        },
        {
          path:'center',
          name:'center',
          meta:'个人中心',
          component:()=>import('@views/personcenter')
        },
        {
          path:"chatroom",
          name:'chatroom',
          meta:"交友",
          component:()=>import('@views/chatroom')
        }
      ]
    }

  ]
})
router.beforeEach((to,from,next)=>{
  NProgress.start()
   next()
})

router.afterEach((to,from)=>{
  NProgress.done()
})

export default router
