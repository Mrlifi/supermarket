import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
    seckills:{
    	deadline:{
    		hours:0,
    		minute:0,
    		seconds:0
    	},
    	goodsList:[]
    }
	},
	mutations,
	getters,
	actions
})
export default store