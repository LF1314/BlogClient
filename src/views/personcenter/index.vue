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
                               <div class="tarbar_wraper ">
                                    <div class="baritem active">
                                        个人信息
                                    </div>
                                    <div class="baritem">
                                        粉丝列表
                                    </div>
                                    <div class="baritem">
                                        关注列表
                                    </div>  
                                     <div class="baritem" >
                                       我的博文
                                    </div> 
                                </div>
                  </el-col>
                  <el-col :span="16" class="message_wraper">
                           <component :is="componentId"></component>    
                  </el-col>
                  <el-col :span="4" class="bozhu_wraper">
                  </el-col>
              </el-row>
        
         </el-card>
    </div>
</template>
<script>
  import fans from '../../components/Fans.vue'
  import follow from '../../components/Follow.vue'
  import info from '../../components/Info.vue'
  import myarticle from '../../components/MyArticle.vue'
    export default
    {
        name:"personcneter",
    components:{
        fans,
        follow,
        info,
        myarticle

    },
    data(){
        return{
            componentId:'info'
        }
    }
    ,
    methods:{
        changecom(){
            let arr = ['info','fans','follow','myarticle']
            let docs = Array.from(document.querySelectorAll('.baritem'))
            for(let i= 0; i < arr.length;i++){
              docs[i].addEventListener('click',()=>{
                  for(let j =0;j < arr.length;j++){
                     docs[j].classList.remove('active')
                  }
                  this.componentId=arr[i]
                  docs[i].classList.add('active')
              })
            }
        }
    },
    created(){
      this.$nextTick(()=>{
          this.changecom()
      })
    }
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
    margin-top: 20px;
    .baritem{
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid rgb(131, 127, 127);
        cursor: pointer;
    }
}
.message_wraper{
    padding: 20px;
    box-sizing: border-box;
    // background-color: rgb(150, 141, 141);
    border-radius: 10px;
    margin-left: 20px;
    height: 100%;
    min-height: 380px;;
    border: 1px solid rgb(133, 130, 130);
    box-shadow: 2px 2px 3px rgba(0, 0, 0,.5)
}
.active{
    background-color: rgb(158, 146, 146);
    border-radius: 10px;
    color: #333;
}
</style>
