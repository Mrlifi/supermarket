import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', // 首页
      name: 'Index',
      component: Index
    },
   
  ]
});
