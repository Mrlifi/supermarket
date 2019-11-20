<template>
  <div id="app">
    <Header/>
    <router-view/>
    <!-- 部分路由不应该包含这个Footer -->
    <Footer/>
  </div>
</template>

<script>
import Header from './views/header/header'
import Footer from './views/footer/footer'
export default {
  name: 'App',
  data () {
    return {
     
    };
  },
  components: {
    Header,
    Footer,
  }
};
</script>
<style>
  @import './assets/css/base.css'
</style>
