import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import env from '@/env'
Vue.prototype.$axios = axios;

const mock = false;
if (mock) {
  require('./mock/api')
}

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  let res = response.data;
  //0是成功
  if (res.status == 0) {
    return res.data;
    //10是未登录
  } else if (res.status == 10) {
    router.push('/login')
  } else {
    //真正的报错
    alert(res.msg);
  }
  // return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.filter('priceFormat', function (val) {
  if (!val) return '0.00';
  return '￥' + val.toFixed(2) + '元';
})

// Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
