//博客登陆界面
<template>
    <div class="login_wraper">
        <el-card class="log_card">
            <div class="login_title">
                  <i>logon</i>
            </div>
            <div>
                <el-form
                label-position="left" 
                label-width="60px"
                class="el-froms"
                
                >
                    <el-form-item
                     label='头像'
                    >
                            <el-upload
                                class="avatar-uploader"
                                action="https://upload-z1.qiniup.com"
                                :data="obj"
                                :on-success="handleAvatarSuccess"
                            >
                                <img v-if="userdata.avatar" :src="userdata.avatar" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                    </el-form-item>
                    <el-form-item
                     label='用户名'
                    >
                       <input type="text" class="myinput" v-model="userdata.username" placeholder="username...">
                    </el-form-item>
                     <el-form-item
                     label='密码'
                     >
                        <input type="password" v-model="userdata.password" class="myinput" placeholder="password...">
                    </el-form-item>

                    <el-form-item>
                        <el-button class="btns" @click="handlesingup">
                            注册
                        </el-button>
                    </el-form-item>

                </el-form>
            </div>
        </el-card>

    </div>
</template>
<script>
import axios from 'axios'
import funcs from '../../until/funcs.js'
    export default
    {
        name:'singup',
        data(){
            return{
                 token: "",
                    obj: {
                        token: ""
                    },
                userdata:{
                    username:'',
                    password:'',
                    avatar:'',
                    creatime:''
                }
            }
        },
        methods:{
         getToken() {
          axios.get("http://upload.yaojunrong.com/getToken").then(res => {
        this.obj.token = res.data.data;
      });
    },
      handleAvatarSuccess(file) {
      this.userdata.avatar = file.url;
                   },
        handlesingup(){
              if(this.userdata.username)
              {
                 if(this.userdata.password.length<4){
                     this.$message.info('密码长度不够啊')
                 }else{
              let date = +new Date()
              this.userdata.creatime = funcs.changedata(date)
              this.$axios.post('/user/add',this.userdata).then(res=>{
                  if(res.code ===200){
                      this.$message.success({message:res.msg})
                      this.$router.push('/index/login')
                  }else{
                      this.$message.error(res.msg)
                  }
              })
                 }
              }else{
                  this.$message.error('用户名不阔以为空！')
              }
                   }
        },
        created(){
            this.getToken()
        }
    }
</script>

<style scoped lang='scss'>
  .login_wraper{
      color: #fff;
      width: 500px;
      margin: 20px auto;
      background-color: rgb(138, 111, 111);
  }
  .log_card{
      margin-top: 30px;
      background-color: #231536;
      border: none;
      color: rgb(148, 128, 128);
      padding: 30px;
  }
  .login_title{
      font:24px '宋体';
      text-align: center;;
  }

  .avatar-uploader .el-upload:hover {
     width: 78px;
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
   border-radius: 6px;
    border: 1px dashed #a79a9a;
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .avatar {
    width: 78px;
    height: 78px;
    display: block;
  }
.myinput{
       background-color: #332547;
       outline: none;
       border-radius: 6px;
       display: inline-block;
       height: 36px;
       color: #fff;
       border: none;
       width: 280px;
       padding-left: 10px; 
}
input::-webkit-input-placeholder{ color:rgb(194, 154, 154)}
.btns{
    width: 280px;
    box-sizing: border-box;
    background-color: #332547;
    border: none;
}
</style>
