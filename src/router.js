import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Test from './components/Test'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/hello': {
    component: Hello
  },
  '/test': {
    component: Test
  }
})

router.redirect({
  // 重定向任意未匹配路径到 /home
  '*': '/hello'
})

export default router
