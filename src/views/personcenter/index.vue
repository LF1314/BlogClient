//个人中心页面
<template>
    <div class="person_center_wraper w960">
         <el-card class="person_card" v-if="$store.state.userinfo">
              <el-row>
                  <el-col :span="4">
                                 <div class="person_message">
                                       <img :src="$store.state.userinfo.avatar" alt="">
                                       <p><i>{{$store.state.userinfo.username}}</i></p>
                                 </div>
                               <div class="tarbar_wraper">
                                    <div class="baritem">
                                        个人信息
                                    </div>
                                    <div class="baritem">
                                        粉丝列表
                                    </div>
                                    <div class="baritem">
                                        关注列表
                                    </div>  
                                     <div class="baritem">
                                       我的博文
                                    </div> 
                                </div>
                  </el-col>
                  <el-col :span="16" class="message_wraper">
                               
                  </el-col>
                  <el-col :span="4" class="bozhu_wraper">

                  </el-col>
              </el-row>
        
         </el-card>
    </div>
</template>
<script>
    export default
    {
        name:"personcneter"
    }
</script>

<style scoped lang='scss'>
.person_center_wraper{
    margin: 0 auto;
    margin-top: 20px;

}
.person_message{
    img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
}
.person_card{
    background-color: rgb(119, 114, 114);
    color: #DDd;
    font: 14px '宋体';
    border: none;
}
.tarbar_wraper{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .baritem{
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid rgb(131, 127, 127);
        cursor: pointer;
    }
}
.message_wraper{
    border: 1px solid #333;
    padding: 20px;
    box-sizing: border-box;
}
</style>
