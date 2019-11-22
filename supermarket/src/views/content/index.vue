<template>
	<div class="contentbox">
		<div class="ad">
			<ad/>
		</div>
	</div>
</template>
<script>
import ad from './contentad/contentad.vue'
	export default{
		name:'index',
		components:{
			ad,
		},
		data(){
			return{}
		},
	}
</script>
<style>
.contentbox {
	width: 1200px;
	margin:10px auto;
}
</style>