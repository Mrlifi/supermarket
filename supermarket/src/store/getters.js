const compare=porperty=>{
	return function (a,b){
		var value1=a[porperty];
		var value2=a[porperty];
		return value1-value2;
	}
}
export default {
	orderGoodslist(state){
		return state.goodsList.sort(compare(state,orderBy))
	},
	seckillsHours(state){
		return state.seckills.deadline.hours<10?'0'+state.seckills.deadline.hours:state.seckills.deadline.hours;
	},
	seckillsMinutes(state){
		return state.seckills.deadline.minute<10?'0'+state.seckills.deadline.minute:state.seckills.deadline.minute;
	},
	seckillsSeconds(state){
		return state.seckills.deadline.seconds<10?'0'+state.seckills.deadline.seconds:state.seckills.deadline.seconds;
	}
}