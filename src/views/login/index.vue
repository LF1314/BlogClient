//博客登陆界面
<template>
    <div class="login_wraper">
         <el-card class="login_card">
             <div class="login_tile">
                 <i>login</i>
             </div>
             <el-form
                label-position="left" 
             >
                     <el-form-item 
                    >
                       <input type="text" v-model="userdata.username" class="myinputdd" placeholder="username...">
                    </el-form-item>
                     <el-form-item
                     >
                        <input type="password" v-model="userdata.password" class="myinputdd" placeholder="password...">
                    </el-form-item>
                       <el-form-item>
                        <el-button class="btnsoo" @click="handlelogin"  >
                            <i>login_in</i>
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <span>没有账号？</span>
                        <el-button type='text' @click="getsingup">
                             去注册
                        </el-button>
                    </el-form-item>
             </el-form>
         </el-card>
    </div>
</template>
<script>

    export default
    {
        name:'login',
        data(){
            return{
             userdata:{
                 username:'',
                 password:""
             }
            }
        },
       mounted(){
           window.addEventListener('keyup',(e)=>{
               if(e.keyCode ==13){
                   this.handlelogin()
               }
           })
       },
        methods:{
            getsingup()
            {
                this.$router.push('/index/singup')
            },
            handlelogin(){
                if(this.userdata.username){
                    if(this.userdata.password.length<4){
                        this.$message.info('密码不对！！')
                    }else{
                        this.$axios.post('/user/login',this.userdata).then(res=>{
                            if(res.code == 200){
                                this.$message.success(res.msg)
                                this.$store.commit('CHANGEUSERINFO',res.data)
                                //登陆成功后建立socket.io链接
                                
                                setTimeout(()=>{
                                    this.$router.push('/index/home')
                                },600)
                            }else{
                                this.$message.error(res.msg)
                            }
                        })
                    }
                }else{
                    this.$message.info('用户名不能为空')
                }
            }
        },
        beforeDestroy(){
            window.removeEventListener('keyup')
        }
    }
</script>

<style scoped lang='scss'>
.login_card{
   
      margin-top: 30px;
      background-color: #231536;
      border: none;
      color: rgb(148, 128, 128);
      padding:10px 30px 10px;
      .login_tile{
          font:25px '宋体';
          text-align: center;
          padding-bottom: 10px;
      }
}
.login_wraper{
    width: 400px;
    margin: 0 auto;
}
.myinputdd{
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
.btnsoo{
    width: 290px;
    box-sizing: border-box;
    background-color: #332547;
    font-size: 16px;
    border: none;
}
</style>
