//个人博客头部导航栏
<template>
     <div class="header_wraper">
            <div class="header_inner w960">
                 <div class="logo">
                      <i>myblog</i>
                 </div>
                 <div class="Heaader_navbar">
                         <el-tooltip class="item" effect="dark" content="home" placement="bottom">
                            <router-link to="/index/home">首页</router-link>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="aboutme" placement="bottom">
                            <router-link to="/index/about">博文</router-link>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="life" placement="bottom">
                            <router-link to="/index/life">慢生活</router-link>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="langue" placement="bottom">
                            <router-link to="/index/langue">随言碎语</router-link>
                        </el-tooltip>
                         <el-tooltip class="item" effect="dark" content="message" placement="bottom">
                            <router-link to="/index/liuyan">留言</router-link>
                        </el-tooltip>
                         <el-tooltip class="item" effect="dark" content="blog" placement="bottom">
                            <el-button class="btss" @click="gowrite">写博文</el-button>
                        </el-tooltip>
                 </div>
            </div>
            <div class="haveuser" v-if="$store.state.userinfo">
                      <el-dropdown>
                            
                            <span class="el-dropdown-link">
                                <img :src="$store.state.userinfo.avatar" class="avaimg" alt="">
                               <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" class="xiala">
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item @click.native="loginout">退出登陆</el-dropdown-item>
                            </el-dropdown-menu>
                 </el-dropdown>
            </div>
     </div>
</template>
<script>
    export default
    {
        name:'Header',
        methods:{
            gowrite(){
                if(this.$store.state.userinfo){
                    this.$router.push('/index/write')
                }else{
                    if(this.$route.name == 'login'){
                        this.$message.info('登陆才阔以写😚')
                    }else{
                          this.$message.info('未登录不能写博文哦！先去登陆吧😋')
                        setTimeout(() => {
                            this.$router.push('/index/login')
                        }, 2000); 
                    }
                     
                }
            },
            //退出登录
            loginout(){
                   this.$axios.get('/user/logout').then(res=>{
                       if(res.code == 200)
                       {
                           this.$message.info(res.msg)
                           this.$store.commit('CHANGEUSERINFO',null)
                       }
                   })
            }
        }
    }
</script>
<style scoped lang ='scss'>
.logo{
    font-size: 25px;
    color: #b8b3b3;
}
 .header_wraper{
     position: relative;
     height: 60px;
     line-height: 60px;
     box-shadow: 0 3px 4px rgba($color: #d0fc6a, $alpha: .6);
     color: #524040;
     /* background-color:#fff; */
 }
 .haveuser{
     position: absolute;
     right: 10px;
     top: 0;
     
 }
 .header_inner{
     display: flex;
     text-align: center;
     margin: 0 auto;
     justify-content: space-between;
 }
 .Heaader_navbar{
     a{
         color: rgb(156, 129, 129);
     }
     .item{
         margin: 0 10px;
     }
     .router-link-exact-active {
         color: rgb(160, 138, 138);
     }
     .router-link-active{
         font-weight: 500;
         color: #ecf011;
     }
 }
 .btss{
     background-color: #090422;
     border: none;
     color: #9c8181;
 }
 .avaimg{
     height: 45px;
     width: 45px;
     border-radius: 50%;
     vertical-align: middle;
 }
 .el-dropdown-link{
     display: block;
 }
 .xiala{
     background-color: rgb(53, 17, 17);
     border: none;
     color: #fff;
 }
</style>
