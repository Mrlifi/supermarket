<template>
	<div class="adbox">
		<div class="ad">
			<div class="adheader">
				<div class="seckill-icon">
					<img src="../../../../static/img/index/clock.png" alt="">
				</div>
				
				<ul class="seckill-title">
					<li v-for="(item,index) in seckilllist" :key="index">{{item}}</li>
				</ul>
				 <div class="count-down">
            <span class="count-down-text">当前场次</span>
            <span class="count-down-num count-down-hour">{{ seckillsHours }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-minute">{{ seckillsMinutes }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-seconds">{{ seckillsSeconds }}</span>
            <span class="count-down-text">后结束抢购</span>
          </div>
			</div>
			
		</div>
	</div>
</template>
<script>
    import store from '../../../vuex/store';
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
	export default {
        components:{},
        name:'contentad',
        data(){
        	return{
              seckilllist: ['限时秒杀','总有你想不到的低价'], 
              // setIntervalObj:null,   
        	}
        },
      
	}
</script>
<style scoped>
	.ad {
		height: 200px;
		background-color:yellow;
	}
	.adheader {
		width: 100%;
		height:50px;
		background-color:#e01222;
	}
	.seckill-icon {
		float:left;
	}
	.seckill-title {
		float: left;

	}
	.seckill-title li {
		float:left;
		color: white;
	}
	.seckill-title li:first-child {
		font-size: 25px;
		line-height: 50px;
		box-sizing:border-box;
		margin:0 5px 0 20px;
	}
	.seckill-title li:last-child {
		font-size:14px;
		padding:18px 0;
		box-sizing:border-box;
	}
	.adheader img{
		width: 35px;
        height: 35px;
        margin-top: 6px;
        margin-left: 15px;
        animation-name: shake-clock;
        animation-duration: 0.3s;
        animation-iteration-count: infinite; /*设置无线循环*/
	}
	 @keyframes shake-clock {
       0% {
        transform: rotate(-10deg);
         }
       50% {
        transform: rotate(10deg);
        }
       100% {
        transform: rotate(-10deg);
       }
}
.count-down {
  height: 100%;
  margin-right: 30px;
  line-height: 50px;
  float: right;
}
.count-down-text {
  color: #fff;
}
.count-down-num {
  padding: 3px;
  border-radius: 5px;
  background-color: #440106;
  font-size: 26px;
  font-weight: bold;
  color: #f90013;
}
.count-down-point {
  font-size: 26px;
  font-weight: bold;
  color: #440106;
}

</style>