// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
import VueScroller from 'vue-scroller'
import $axios from '../src/until/axios' 
import store from '../vuex/store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.use(VueScroller)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = $axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
