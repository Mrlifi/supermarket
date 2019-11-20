<template>
    <div>
        <div class="search">
            <Search/>
        </div>
        <div class="nav">
            <Nav/>
        </div>
    </div>
</template>
<script>
import Search from './search'
import Nav from './nav/homenav'
export default {
    name:'index',
    components:{
        Search,
        Nav
    }
}
</script>
<style scoped>
    
</style>