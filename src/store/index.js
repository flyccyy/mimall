import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  userInfo:JSON.parse(window.sessionStorage.getItem('userInfo')),
  cartCount:0
}
// const state = {
//   username:'',
//   cartCount:0
// }
export default new Vuex.Store({
  state,
  mutations,
  actions,
})
