<template>
    <div>
        <div class="nav-item">
            <ul>
                <li v-for="(item,index) in nav" :key="index">
                    <a href="#">{{item}}</a>
                </li>
            </ul>
        </div>
        <div class="nav-body">
          <!-- 上边导航栏 -->
            <div class="nav-top">
              <div class="toplistl" v-html="navlistt"></div>
              <div class="toplists" v-for="(item,index) in navlistts" :key="index" :class="{active:changstyle==index}" @click="change(index)">{{item}}</div>
            </div>
            <!-- 侧边导航 -->
            <div class="nav-side">
               <div class="navlist1" v-for="(items,index) in thinglist.yueqi" :key="index">
                 <div class="thinglist1">{{items.title}}</div>
                 <div class="thinglist2" v-for="(item,subin) in items.tags1" :key="subin" :class="{active2:changstyle2==subin}" @click="change1(subin)">{{item}}</div>
               </div>
               
        </div>
          <div class="sidefu" v-if="divhidden">
                <div class="futop" v-for="(item,index) in panelData2.navTags" :key="index">{{item}}</div> 
                <div class="fubot">
                  <ul>
                <li v-for="(items, index) in panelData2.classNav" :key="index">
                <span class="detail-item-title">{{items.title}}
              </span><br>
                 <a href="" v-for="(item, subIndex) in items.tags" :key="subIndex">{{item}}</a>
              
      
          </li>
        </ul>   
                </div>
                 
            </div>
  
        </div>
    </div>
</template>
<script>
export default {
    name:'homenav',
    data(){
        return {
          divhidden:false,
            changstyle:'',
            changstyle2:'',
            changstyle3:'',
            panel1:'false',
            panel2:'false',
            nav:['秒杀','优惠券','闪购','拍卖','音乐专场','乐器店','全球购','金融'],
            navlistt:'所有商品分类',
            navlistts:['聚划算','真想购','乐器超市','音乐节','门票抢购'],
            navlist1:['乐器超市','演唱会门票'],
            thinglist:{
              yueqi:[{
                title:'乐器大全',
                tags1:['膜鸣乐器','气鸣乐器','弦鸣乐器','体鸣乐器','电鸣乐器']
               }],
               
             },
            
               
                panelData2:[

                 timing:{
                  navTags:['唇振体鸣','嗓振体鸣','边棱体鸣','吹口体鸣','单簧体鸣','双簧体鸣'],
                classNav:[
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },

                ]
              },   

                qiming:{
                  navTags:['唇振qi鸣','嗓振qiming','边棱体鸣','吹口体鸣','单簧体鸣','双簧体鸣'],
                classNav:[
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },
                    {
                        title:'唇振气鸣',
                        tags:['牛角','铜角','刚洞','海螺','鹿笛','长号','......']
                    },

                ]
              },      

            ],
                
            

        }
    },
    mounted(){
      this.change(0);
    },
    methods:{
      change(index){
        this.changstyle=index;
      },
      change1(subin){
        this.changstyle2=subin;
        
    },
    }
}
</script>
<style>
   .nav-item {
       width:600px;
       height: 36px;
       margin:0 auto;
   } 
   .nav-item ul {
       list-style:none;
       margin-left: 5px;
   }
   .nav-item li {
       float: left;
       font-size: 16px;
       font-weight:bold;
       margin-left: 28px;
   }
   .nav-item a {
       text-decoration: none;
       color:black;
   }
   .nav-item a:hover {
       color:red;
   }
   .nav-body {
       width: 1200px;
       height:475px;
       margin: 0 auto;
       position:relative;
      
   }
   .nav-top {
    height:50px;
    width:1200px;
    margin:0 auto;
    background-color:#ffffcc;
 
   }
   .toplists {
    float:left;
    width:70px;
    text-align:center;
    line-height:50px;
    color:#000;
    font-size:16px;
    cursor:pointer;
   }
   .toplists:hover {
    color:red;
   }
   .toplistl{
    float:left;
    width:240px;
    height:50px;
    background-color:#ffcccc;
    font-size:20px;
    line-height:50px;
    text-align:left;
    text-indent:10px;
   }
 .nav-side .ivu-menu-item-group{
  background-color:#ccffff;
 } 
.active {
  border-bottom:1px solid #ccc;
  color:red;
}
.sidefu {
  position:absolute;
  top:50px;
  left:200px;
  width:500px;
  height:425px;
  background-color:yellow;
  z-index:999;

}
.futop {
  float:left;
  width:80px;
  text-align:left;
  font-size:16px;
  margin-top:10px;
  text-align:center;
  cursor:pointer;

}
.fubot {
  clear:left;
  padding-top:10px;
  box-sizing:border-box;
  font-size:16px;
  padding-left:10px;
}
.fubot li {
  list-style:none;
}
.fubot li a{
   padding:5px;
   box-sizing:border-box;
}
.nav-side {
  width:240px;
  height:425px;
  background-color:#ccffff;
}
.thinglist1 {
  font-size:14px;
  text-indent:5px;
  padding:6px;
  box-sizing:border-box;
  cursor:pointer;

}
.thinglist2 {
  font-size:18px;
  text-indent:20px;
  padding:6px;
  box-sizing:border-box;
  cursor:pointer;
  
}
.active2 {
  background-color:#ccc;
  color:white;
  border-right:1px solid #ffcccc;
}
.active3 {
  background-color:#ccc;
  color:white;
  border-right:1px solid #ffcccc;
}
</style>