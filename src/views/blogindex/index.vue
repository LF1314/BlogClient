<template>
<div class="index_wraper">
      <div class="index_header">
             <Header></Header>
      </div>
     <div class="router_wraper">
         <router-view></router-view>
     </div>
</div>
    
</template>
<script>
   import Header from '../../components/Header.vue'

    export default
    {
        name:"blogindex",
        components:{
            Header
        },
     
    }
</script>
<style scoped lang='scss'>
//轮播图css
.index_header{
    position: fixed;
    top:0;
    width: 100%;
    left: 0;
    background-color: rgb(75, 65, 65);
    z-index: 1000;
}
.index_wraper{
    position: absolute;
    top: 0px;
    width: 100%;
    padding-top: 70px;
    z-index: inherit;
    bottom: 0;
    background-image: url('../../../static/img/bg.jpg');
    background-size: 100%;
    overflow-y:scroll;
    background-attachment: fixed;
    
}
</style>
