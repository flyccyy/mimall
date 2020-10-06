<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import navHeader from '@/components/NavHeader.vue'
import navFooter from '@/components/NavFooter.vue'
export default {
  name:'home',
  components:{
    navHeader,
    navFooter
  }
}
</script>

<style>
</style>