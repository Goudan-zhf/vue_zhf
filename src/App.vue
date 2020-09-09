<template>
  <div id="app">
      <router-link to="/User">用户页</router-link>
      <router-link to="/">首页</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
  import User from "./components/User";
  import First from "./components/First";
  export default {
    name: 'App',
    components:{
        'First':First
    },
  }
</script>

<style>

</style>
