<template>
    <div class="searchbox">
        <div class="container">
            <i-input v-model="sreachData" size="large" class="sreach" placeholder="输入你想查找的商品">
                <Button slot="append" icon="ios-search"></Button>
            </i-input>         
            <Tag v-for="(item,index) in promotionTags" :key="index" >{{item}}</Tag>
        </div>
    </div>
</template>
<script>
export default {
    name:'Search',
    data(){
        return {
            sreachData:'',
            promotionTags:['买2免1','领200神券','199减100','吉他5折抢','充100送20'],
        }
    },
}
</script>
<style scoped>
    .container {
        padding-top:15px;
        margin:0px auto;
        margin-bottom:15px;
        width: 460px;
    }
    .sreach {
        margin:15px 0px;
    }
</style>