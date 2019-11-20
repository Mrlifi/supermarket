<template>
  <div class="main-carousel">
    <div class="container">
      <transition-group name="fade" tag="div" class="fade">
        <div class="fade-item" v-for="(item,index) in fadeItems" v-show="index === curIndex" :key="index">
          <a :href="item.link">
            <img :src="item.imgUrl" alt="" width="948px" height="418px">
          </a>
        </div>
      </transition-group>
      <div class="play-pre" @click="playPre">
        
        <span class="icon">＜</span>

      </div>
      <div class="play-next" @click="playNext">
        <span class="icon">＞</span>
      </div>
      <div class="play-dot">
        <span class="dot" v-for="n in 5" :class="{active: n === curIndex + 1}" :key="n" @click="change(n)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      curIndex: 0,
      timeId: '',
      fadeItems: [
        {imgUrl: '../../../static/img/goodsDetail/intro/1.jpg', link: 'https://item.mi.com/buyphone/redmi4x'},
        {imgUrl: '../../../static/img/goodsDetail/intro/2.jpg', link: 'https://item.mi.com/product/10000030.html'},
        {imgUrl: '../../../static/img/goodsDetail/intro/3.jpg', link: 'https://item.mi.com/product/10000029.html'},
        {imgUrl: '../../../static/img/goodsDetail/intro/4.jpg', link: 'https://www.mi.com/buytv/'},
        {imgUrl: '../../../static/img/goodsDetail/intro/5.jpg', link: 'https://www.mi.com/mibookair/'}
      ]
    }
  },
  mounted(){ //Vue2.0 替换了之前的ready，详见文档生命周期函数mounted
 		this.autoPlay()
  },
  methods: {
    playNext(){
      let lastIndex = this.fadeItems.length -1
      if(this.curIndex < lastIndex){
        this.curIndex += 1
      }else{
        this.curIndex = 0
      }
    },
    playPre(){
      let lastIndex = this.fadeItems.length - 1
      if(this.curIndex > 0){
        this.curIndex -= 1
      }else{
        this.curIndex = lastIndex
      }
    },
    autoPlay(){
      clearInterval(this.timeId)
      this.timeId = setInterval(()=>{
        this.playNext()
      }, 4000)
    },
    change(n){
      this.curIndex=n-1;
    }
  }
}
</script>

<style scoped>
  .main-carousel{
    position: absolute;
    left: 250px;
    top: 55px;
    width: 950px;
    background: #fff;
    height: 420px;
    z-index: 1;
}
 .container{
      position: relative;
      height: 420px;
  }
 .fade-item{
        position: absolute;
        left: 0;
        top: 0;
        width: 950px;
        height: 420px;
        z-index: 1;
        border: 1px solid #ccc;
      }
 .play-pre{
        position: absolute;
        left: 10px;
        top: 50%;
        margin-top: -35px;
        z-index: 2;
    }
        .icon{
           width: 41px;
          height: 69px;
          font-size: 20px;
          line-height: 69px;
          text-align: center;
          display: inline-block;
          cursor: pointer;
          background: rgba(0,0,0,0.5);
      }
          
       
      .play-next{
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -35px;
        z-index: 2;
    }
        .icon{
          width: 41px;
          height: 69px;
          font-size: 20px;
          line-height: 69px;
          text-align: center;
          display: inline-block;
          cursor: pointer;
          background: rgba(0,0,0,0.5);
      }
          
      
      .play-dot{
        position: absolute;
        z-index: 1;
        width: 100px;
        height: 20px;
        left:50%;
        margin-left: -50px;
        top: 390px;
        display: flex;
        justify-content: space-between;
    }
        .dot{
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
        }
        .active{
          border-color: rgba(0,0,0,0.5);
          background: rgba(255,255,255,0.5);
        }
      
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
 