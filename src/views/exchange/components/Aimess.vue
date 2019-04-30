 //这里是智能机器人

 <template>
      <div class="chat_roome_wraper">
           <div class="bg">
           </div>
                <div class="chat_roome_card">
                       <el-row class="chat_wrapersss">
                           <el-col  class="message_content">
                                 <div class="message_inner">
                                        <div class="message_content_header">
                                              <div>
                                                  博客机器人
                                              </div>
                                              <div class="fenxaing_img">
                                                  <img src="../../../../static/img/fenxiang.png" alt="">
                                                  <img src="../../../../static/img/fenmenu.png" alt="">
                                              </div>
                                        </div>
                                        <div class="message_content_body">
                                               <melist :to="mes" :message='messages'></melist>
                                        </div>
                                        <div class="message_contnet_footer" v-if="$store.state.userinfo">
                                             <div class="footer_input">
                                                    <el-input v-model="fordata.content" placeholder="代码敲了吗😭,来一起玩耍吧😁" @keyup.native="senmeasage">

                                                    </el-input>
                                             </div>
                                             <div class="footer_send" @click="addchats">
                                                   <img src="../../../../static/img/send.png" alt="">
                                             </div>
                                        </div>
                                        <div v-else class="message_contnet_footer">
                                             <p>
                                                你还没登录勒🙃，
                                               <el-button @click="jumtologin"> 去登陆</el-button>
                                               和AI一起玩耍吧🤨
                                             </p>
                                        </div>
                                 </div>
                           </el-col>
                       </el-row>
                </div>
       
      </div>
 </template>
 <script>
  import melist from '../../../components/Aimessage'
  import io  from 'socket.io-client'

     export default
     {
         name:"chatroom",
         data(){
           return{
               mes:'word',
               obj:{},
               fordata:{
                   to:'',
                   content:''
               },
                 messages:[]
           }
         },
         components:{
               melist
         },
         methods:{
             jumtologin(){
                 this.$router.push('/index/login')
             },
            senmeasage(e){
            //  console.log(e)
             if(e.keyCode == 13){
                 this.addchats()
             }
            },
           async addchats(){
                this.fordata.to='word'
                 if(this.fordata.content){
                   let data= await this.$axios.post('/chartAi',this.fordata)
                   let aichart = {status:0,text:''}
                   aichart.text = data.data.text

                   let use = {status:1,text:this.fordata.content}
                   this.messages.push(use)
                   this.messages.push(aichart)    
                     this.fordata.content =''
                     if(data.code!=200){
                          this.$message.error('server error')
                      }  
                 }else{
                     this.$message.info('内容不可以为空')
                 }
             }
         }
         ,
         created(){
        //  this.socket = io.connect('http://localhost:8060')
     
         }
         
     }
 </script>

<style scoped lang='scss'>
 .chat_roome_wraper{
     margin: 0 auto;
     margin-top: 20px;
 }
 .person_message{
      display: flex;

     .author_img{
         width: 70px;
         flex: 0 0 70px;
         height: 450px;
         padding: 10px;
         box-sizing: border-box;
         overflow: hidden;
         border-top-left-radius: 6px;
         border-bottom-left-radius: 6px;
         box-shadow: 2px 0 2px rgba($color: #000000, $alpha: 1.0);
         background-color: rgb(57, 98, 160);
         img{
         border-radius: 50%;
          }
       
      }
     .chat_group {
        padding-top: 20px;
        background-color:rgba($color: rgb(148, 171, 221), $alpha: .5);
        flex: 1;
         span{
         font: 20px '宋体';
         color: rgb(209, 203, 203);
          }
        .serach_wraper{
         width: 90%;
         margin: 0 auto;  
         height: 35px; 
         input{
             height: 100%;
             width: 80%;
             display: inline-block;
             outline: none;
             border: none;
             border-radius: 20px;
             font-size: 13px;
             padding-left: 20px;
         }   
       }
      }
       }

 .bg{
     background-image: url('../../../../static/img/chatbg.jpg');
     background-size: cover;
     height: 450px;
     border: none;
     filter: blur(10px);
     overflow: hidden; 
     border-radius: 10px;
 }
 .chat_roome_card{
     position: absolute;
     top: 85px;
     width:67%;
     margin: 0 auto;
     border-radius: 10px;
     height: 450px;
     .person_message{  
     }
 }
 .message_content{
     height: 600px;
     border-top-right-radius: 6px;
     border-bottom-right-radius: 6px;
     background-color: rgba($color: rgb(218, 207, 207), $alpha: .5);
     overflow: hidden;
     .message_inner{
         height: 100%;
         width: 100%;
         display: flex;
         flex-direction:column;
         .message_content_header{
             width: 100%;
             padding:0 20px;
             box-sizing: border-box;
             flex: 0 0 59px;
             font:22px '宋体';
             line-height: 59px; 
             border-bottom: 1px solid rgba($color: #837d7d, $alpha: .4);
             display: flex;
             justify-content: space-between;
             .fenxaing_img{
                 img{
                     vertical-align: middle;
                 }
             }
         }
         .message_content_body{
           flex: 1;
           width: 100%;
           overflow: hidden;
         }
         .message_contnet_footer{
            flex: 0 0 60px;
            line-height: 60px;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            padding: 0 10px;
            background-color: #a8ace7;
            p{
                text-align: center;
                width: 100%;
                font: 14px '宋体';
                line-height: 60px;
            }
            img{
                vertical-align: middle;
                width: 32px;
                height: 32px;;
            }
            .footer_menu{
                 flex: 0 0 90px;  
            }
            .footer_input{
                flex: 1;
            }
            .footer_send{
                flex: 0 0 60px;
                padding-left: 10px;
                box-sizing: border-box;
                cursor: pointer;
            }
         }

     }
 }
 </style>
 