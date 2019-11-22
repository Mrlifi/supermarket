import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
  
    
   
    seckills: { // 秒杀
      deadline: {
        hours: 0,
        minute: 0,
        seconds: 0
      },
      goodsList: []
    },
    computer: {}, // 电脑专栏
    eat: {}, // 爱吃专栏
    asItems: [], // 广告
    goodsList: [], // 商品列表
    shoppingCart: [], // 购物车
    newShoppingCart: [], // 刚加入的购物车，作为展示
    recommend: [] // 推荐购买
  },
  getters,
  actions,
  mutations
});
