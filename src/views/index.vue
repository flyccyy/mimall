<template>
  <div>index</div>
</template>

<script>
import storage from '@/storage'
export default {
  mounted(){
    storage.setItem('chi',{
      name:'aa'
    },'food')
    // storage.getItem('userAge','user')
  }
}
</script>

<style>

</style>