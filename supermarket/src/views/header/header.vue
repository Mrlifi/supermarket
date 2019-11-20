<template>
    <div class="box">
        <div class="nav">
            <ul class="location">
                <li>
                     <Dropdown placement="bottom-start">
                    <a href="#">
                        <Icon type="ios-location" class="icon"></Icon> {{city}}
                    </a>
                    <DropdownMenu slot="list">
                        <div class="city">
                            <p v-for="(item,index) in cityArr" :key="index">
                                <span class="city-item" v-for="(item1,index) in item" :key="index" @click="changeCity(item1)">{{item1}}</span>
                            </p>
                        </div>
                    </DropdownMenu>
                </Dropdown>
                </li>
               
            </ul>
            <ul class="detail">
                <li class="first">
                    你好，请<a href="#">登录<Icon type="person"></Icon></a> | 
                    <span class="text-color-red"><a href="#">免费注册<Icon type="person-add"></Icon></a></span>

                </li>
                <li><a href="#">网站首页</a></li>
                <li><a href="#">意见反馈</a></li>
                <li><a href="#">乐家首页</a></li>
            </ul>
        </div>
        
        
    </div>
</template>
<script>
export default {
    data(){
      return {
          city:'兰州',
          cityArr:[
               ['北京', '上海', '天津', '重庆', '广州'],
               ['深圳', '河南', '辽宁', '吉林', '江苏'],
               ['江西', '四川', '海南', '贵州', '云南'],
               ['西藏', '陕西', '甘肃', '青海', '珠海']
          ]
          

      }
    },
    methods:{
      changeCity(city){
          this.city=city;
      }
    },
}
</script>
<style scoped>
    .box {
        width:100%;
        height: 35px;
        background: #ffffcc;
    }
    .nav {
        margin:0 auto;
        width:90%;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
    }
    .nav ul {
        list-style:none;
    }
    .nav li {
        float:left;
        font-size:16px;
        line-height: 35px;
        font-weight: bold;      
    }
    .nav a {
        text-decoration: none;
        color:rgb(29, 28, 28);
        padding-left: 15px;

        cursor: pointer;
    }
    .nav a:hover {
        color:red;
    }
    .location {
        color:rgb(29, 28, 28);
    }
    .icon {
        color:red;
    }
    .city {
        padding: 10px 15px;
    }
    .city-item {
        padding:5px;
        cursor: pointer;
        font-weight: bold;
    }
    .city-item:hover {
        color:red;
    }
    .first a:first-child{
        padding-left: 3px;
    }
    .detail li:nth-child(2) a{
        margin-left:10px;
        padding:0 5px;
        border-left:1px solid black;
        text-align: center;
    }
    .detail li:nth-child(3) a{
        padding:0 5px;
        border-left:1px solid black;
        text-align: center;

    }
    .detail li:nth-child(4) a{
         padding:0 5px;
         border-left:1px solid black;
        text-align: center;
    }
</style>