<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import jsonp from 'jsonp'
import axios from 'axios'
export default {
  mounted(){
    let url = "https://www.imooc.com/search/hotwords"
    // let url = "https://www.imooc.com/activity/servicetime"
    // jsonp(url,(err,data)=>{
    //   console.log(err,data);
    // })
    axios({
      url,
      method:'post'
    }).then(()=>{

    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
