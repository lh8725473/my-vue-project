//引用公共组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui';

//引用自定义组件
import App from './App'
import router from './router'

//引用第三方css
import 'mint-ui/lib/style.css'

//引用各种第三方组件
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)

//http跨域配置
Vue.http.headers.common['X-Requested-With'] = 'xmlhttprequest'
Vue.http.options.xhr = {credentials: true}

//debug模式
Vue.config.debug = true

//项目启动
router.start(App, 'app')

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
