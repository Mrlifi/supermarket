<template>
    <div>
        <footer class="footerbox">
            <div class="clearfix"></div>
            <div class="icon-row">
                <div class="footer-icon">
                    <h5 class="footer-icon-child"></h5>
                    <span class="footer-icon-text">品类齐全，轻松购物</span>
                </div>
                <div class="footer-icon">
                    <h5 class="footer-icon-child footer-icon-child-2"></h5>
                    <span class="footer-icon-text">多仓直发，极速配送</span>
                </div>
                 <div class="footer-icon">
                    <h5 class="footer-icon-child footer-icon-child-3"></h5>
                    <span class="footer-icon-text">正品行货，精致服务</span>
                </div>
                <div class="footer-icon">
                    <h5 class="footer-icon-child footer-icon-child-4"></h5>
                    <span class="footer-icon-text">天天低价，畅选无忧</span>

                </div>
            </div>
            <div class="service-intro">
                <div class="service-type">
                    <div class="service-type-info" v-for="(guide,index) in guideArr" :key="index">
                        <ul>
                            <li v-for="(item,index) in guide" :key="index">{{item}}</li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="friend-link">
                    <div class="friend-link-item">
                        <ul>
                            <li v-for="(item,index) in morelink" :key="index">
                                <span :class="[Itemlink,{'link-last-item':index===9}]">{{item}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="copyright">
                    <p>Copyright © 2018 by Gavin <a href="http://www.baidu.com"><Icon type="social-github"></Icon><span>相当棒</span></a></p>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            Itemlink:'link-item',
            guideArr: [
        [ '购物指南', '购物流程', '会员介绍', '生活旅行', '常见问题', '大家电', '联系客服' ],
        [ '配送方式', '上门自提', '211限时达', '配送服务查询', '收取标准', '海外配送' ],
        [ '支付方式', '货到付款', '在线支付', '分期付款', '邮局汇款', '公司转账' ],
        [ '售后服务', '售后政策', '价格保护', '退款说明', '返修/退换货', '取消订单' ]
      ],
      morelink: [
        '关于我们', '联系我们', '联系客服', '合作招商', '商家帮助', '营销中心', '销售联盟', '校园社区', '风险监测', '隐私政策'
      ]
        }
    }
}
</script>
<style scoped>
    .footerbox {
        width:100%;
        height:390px;
        margin-top:10px;
        background-color:#ffcccc;
    }
    .icon-row {
        margin:15px auto;
        padding-top: 8px;
        width:1000px;
        height:64px;
    }
    .footer-icon {
        margin-left: 17px;
        margin-right: 17px;
        float: left;
    }
    .footer-icon-child {
        margin-top:10px;
        overflow: hidden;
        position:absolute;
        width:36px;
        height: 42px;
        background-image: url("../../../static/img/footer/ico_service.png");
        text-indent:-999px;
    
    }
    .footer-icon-child-2 {
        background-position: 0 -43px;
    }
    .footer-icon-child-3 {
        background-position: 0 -86px;
    }
    .footer-icon-child-4 {
        background-position:0 -129px;
    }
    .footer-icon-text {
        margin-left:45px;
        color:black;
        font-size: 18px;
        font-weight: bold;
        line-height:64px;
    }
    .service-intro {
        width:100%;
        border-top:1px solid #b2dfdb;
    }
    .service-type {
        margin:15px auto;
        height:200px;
        width:800px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .service-type-info {
        color:black;

    }
    .service-type-info ul {
        list-style:none;
    }
    .service-type-info li {
        font-size:14px;
        cursor:pointer;
        line-height: 26px;
    }
    .service-type-info li:first-child {
        font-size: 16px;
        line-height:28px;
        font-weight:bold;
    }
    .friend-link {
        display:flex;
        align-items:center;
        width:908px;
        height:30px;
        margin: 0 auto;
        color:black;
        border-top:1px solid #b2dfdb;
    }
    .friend-link-item{
        margin:0px auto;
    }
    .friend-link-item ul {
        list-style: none;
    }
    .friend-link-item li {
        padding:5px 0px;
        float:left;
    }
    .link-item {
        padding: 0px 8px;
        cursor:pointer;
        border-right:1px solid #ccc;

    }
    .link-last-item {
        border:none;
    }
    .copyright{
        width: 100%;
        color:black;
        line-height: 30px;
        text-align:center;

    }
    .copyright a {
        color:black;
        font-size:14px;
    }
</style>