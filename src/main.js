import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 这个第三包引入即可，它会自动根据页面宽度设置网页基准字体大小
import 'amfe-flexible'
import 'postcss-pxtorem'

import {
  NavBar,
  Button,
  Field

} from 'vant'
Vue.use(NavBar).use(Button).use(Field)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
