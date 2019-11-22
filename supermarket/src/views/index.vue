<template>
    <div>
        <div class="search">
            <Search/>
        </div>
        <div class="nav">
            <Nav/>
        </div>
        <div class="content">
            <Contents/>
        </div>
    </div>
</template>
<script>
import Search from './search'
import Nav from './nav/homenav'
import Contents from './content/index'
export default {
    name:'index',
    components:{
        Search,
        Nav,
        Contents,
    }
}
</script>
<style scoped>
    
</style>