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
            <span class="count-down-num count-down-hour">{{ seckillsHours  }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-minute">{{ seckillsMinutes  }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-seconds">{{ seckillsSeconds  }}</span>
            <span class="count-down-text">后结束抢购</span>
          </div>
			</div>
			<div class="seckill-content">
          <div class="seckill-item" v-for="(item, index) in seckills.goodsList" :key="index">
            <div class="seckill-item-img">
              <router-link to="/goodsList"><img :src="item.img"></router-link>
            </div>
            <div class="seckill-item-info">
              <p>{{item.intro}}</p>
              <p>
                <span class="seckill-price text-danger"><Icon type="social-yen"></Icon>{{item.price}}</span>
                <span class="seckill-old-price"><s>{{item.realPrice}}</s></span>
              </p>
            </div>
          </div>
        </div>
	</div>
			
		</div>
	</div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
	export default {
        components:{},
        name:'contentad',
        data(){
        	return{
              seckilllist: ['限时秒杀','总有你想不到的低价'], 
              setIntervalObj:null,   
        	}
        },
        created() {
        	this.seckillsChange();
        },
        mounted(){
             const witch=this;
             this.setIntervalObj=setInterval(()=>{
             	witch.timereduce();
             },1000)
        },
        methods: {
            seckillsChange(){
            	this.$store.dispatch('loadSeckillsInfo')
            },
            timereduce(){
            	this.$store.commit('reducetime')
            },
        },
        computed:{
        	...mapState(['seckills']),
        	...mapGetters(['seckillsHours','seckillsMinutes','seckillsSeconds'])
        },
        destroyed(){
        	clearInterval(this.setIntervalObj);
        }
      
	}
</script>
<style scoped>
	.ad {
		height: 350px;
		border:1px solid #ccc;
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
	.seckill-title ul {
		box-sizing:border-box;
	}
	.seckill-title li {
		float:left;
		color: white;
		height: 50px;
	}
	.seckill-title li:first-child {
		font-size: 25px;
		line-height: 50px;
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

.seckill-content {
  width: 91%;
  height: 280px;
  margin:0 auto;
}
.seckill-item {
  width: 200px;
  height: 250px;
  margin-top: 15px;
  margin-left: 15px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
  float: left;
}
.seckill-item-img {
  width: 160px;
  height: 160px;
  margin: 0px auto;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.seckill-item-img img {
  width: 130px;
  height: 130px;
  margin-left: 15px;
  margin-top: 15px;
  transition: margin-top 0.3s;
}
.seckill-item-img:hover img {
  margin-top: 6px;
  transition: margin-top 0.3s;
}
.seckill-item-info {
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  color: #009688;
}
.seckill-item-info i:first-child {
  font-size: 14px;
}
.seckill-price {
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
</style>