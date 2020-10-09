export default {
  // saveUserName(context,username) {
  //   context.commit('saveUserName',username)
  // },
  saveCartCount(context,cartCount) {
    context.commit('saveCartCount',cartCount)
  },
  setUserInfo(context,userInfo){
    window.sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
    context.commit('setUserInfo',userInfo)
  }
}