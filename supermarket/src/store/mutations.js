export default {
	setlist(state,seckills){
		state.seckills.goodsList=seckills[0];
		state.seckills.deadline=seckills[1];
	},
	reducetime(state){
		state.seckills.deadline.seconds--;
		if(state.seckills.deadline.seconds===-1){
			state.seckills.deadline.seconds=59;
			state.seckills.deadline.minute--;
			if(state.seckills.deadline.minute===-1){
				state.seckills.deadline.minute=59;
				state.seckills.deadline.hour--;
			}
		}
	},
}