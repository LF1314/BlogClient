//个人信息
<template>
    <div class="info_wrpaer">
         <div class="info_inner">
               <div class="btns">
                       <el-button type="danger">
                           修改个人信息
                        </el-button> 
               </div>
               <div class="userinfo">
                     <el-form>
                         <el-form-item
                         label="头像"
                         >
                           <img class="mying" :src="userinfo.avatar" alt="">   
                         </el-form-item>
                         <el-form-item
                         label="用户名">
                            {{userinfo.username}}
                         </el-form-item>
                
                     </el-form>
               </div>
         </div>
    </div>
</template>

<script>
export default
{
    name:"info",
    data(){
        return{
            userinfo:{}
        }
    },
    created() {
        if(this.$store.state.userinfo){
            this.userinfo=this.$store.state.userinfo
        }  
    },
}
    
</script>

<style scoped lang='scss'>
.btns{
    text-align: right;;
}
 .userinfo{
     font: 15px '宋体';
     color: #ddd;
     margin-top: 20px;
 }
 .mying{
     width: 100px;
     height: 100px;
     border-radius: 50%;
 }
</style>

















