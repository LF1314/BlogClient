//阅读文章列表
<template>
    <div class="read_blog_wrpaer w960">
        <el-card class="read_blog_card" 
            v-loading="loading"
            element-loading-text="🙃拼命加载中😵"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)">
                <div slot="header">
                     博文详情
                </div>
                <el-row>
                    <el-col :span="4" class="author_wraper"> 
                            <div class="auth_message" v-if="article.author">
                                  <h4>作者</h4>
                                  <div class="authorimg">
                                     <img :src="article.author.avatar" width="100%" alt="作者">
                                  </div>
                                  <div class="authdetail">
                                      <p>{{article.author.username}}</p>
                                      <p>粉丝：{{article.author.follows.length}}</p>
                                      <p>关注：{{article.author.fans.length}}</p>
                                      <p>博文：{{article.author.blogs.length}}</p>
                                  </div>
                                  <div>
                                      <el-button class="followbtn" @click="addfollows">
                                          +关注
                                      </el-button>
                                  </div>

                            </div>
                    </el-col>
                    <el-col :span="18" class="article_message">
                            <div class="blog_messages">
                                     <div>
                                         {{article.title}} 
                                     </div>
                                     <div class="article_rhfu">
                                               <div class="new_bog_footer">
                                                <div class="article_messae">
                                                    <span>
                                                        {{article.creatime}}
                                                    </span>
                                                    <span>
                                                     
                                                        浏览({{article.looknum}})
                                                    </span>
                                                    <span>
                                                       
                                                        回复({{article.readnum}})
                                                    </span>
                                                </div>
                                               
                                               </div>
                                     </div>
                                     <div class="blog_corver">
                                            <img :src="article.corver" width="100%" alt="">
                                     </div>

                                     <div class="blog_content" v-html="article.content">

                                     </div>
                            </div>

                    </el-col>
                </el-row>
                
        </el-card>
        <el-card class="comment_card"
            v-loading="loading2"
            element-loading-text="🙃拼命加载中😵"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
        
        >
                  <div slot="header">
                        评论
                  </div>
                  <div class="add_comments" v-if="$store.state.userinfo">
                        <div class="who_add">
                            <div class="author_img">
                                 <img :src="$store.state.userinfo.avatar" width="100%" alt="">
                            </div>
                            <div class="comments_input">
                                 <el-input v-model="comment.content" class="com_input" placeholder="输入评论😋..."></el-input>
                            </div>
                        </div>
                        <div class="add_button">
                               <p>
                                   ENTER && BUTTON 🧐
                                   <el-button :loading="logd" @click="addcomments">
                                       添加评论
                                   </el-button>
                               </p>
                        </div>
                  </div>
                  <div class="comments_list_wraper">
                        <ul>
                            <li class="comment_item" v-for="(com , index) in commentlist" :key="index">
                                <div class="zuthor_message" v-if="com.author">
                                      <div class="auth_img">
                                           <img :src="com.author.avatar" alt="">
                                           <span>{{com.author.username}}</span>
                                      </div>
                                      <div class="coment_conteent">
                                            {{com.content}}
                                      </div>
                                      <div class="comment_other">
                                                  <span>
                                                        {{com.creatime}}
                                                    </span>
                                                    <span>
                                                     
                                                        浏览({{com.readnum}})
                                                    </span>
                                                    <span>
                                                        回复({{com.ansernum}})
                                                  </span>
                                      </div>
                                </div>
                            </li>
                        </ul>
                  </div>
        </el-card>
    </div>
</template>
<script>
  import funcs from '../../until/funcs.js'
    export default
    {
        name:'readblog',
        data(){
            return{
             article:{},
             loading:false,
             loading2:false,
             logd:false,
             comment:{
                    creatime:'',
                    content:'',
                    linuxtime:'',
                    author:'',
                    blog:''
             }
             ,
             commentlist:[]
            }
        },
        methods:{
            getblog(){
              this.loading =true
              let id =this.$route.query.id
              this.$axios.get('/blog/detail',{id:id}).then(res=>{
                //   console.log(res)
                  this.article = res.data
                  this.loading =false
              })
            },
            addfollows(){
                if(this.$store.state.userinfo){
                    
                }else{
                    this.$message.info('您老还没登陆😜')
                }
            },
            addcomments(){
                this.logd =true
                let date = +new Date()
                this.comment.linuxtime = date
                this.comment.creatime = funcs.changedata(date)
                this.comment.author = this.$store.state.userinfo.id
                this.comment.blog = this.article._id
                if(this.comment.content){
                    this.$axios.post('/comment/add',this.comment).then(res=>{
                        if(res.code == 200)
                        {
                            this.logd = false
                            this.$message.success({message:res.msg})
                            this.comment.content = ''
                            this.commentlist = [res.data,...this.commentlist]
                        }else if(res.code == 403){
                            this.$message.error(res.msg)
                            this.$store.commit('CHANGEUSERINFO',null)
                        }
                        else{
                            this.logd = false
                            this.$message.error('添加失败')
                        }
                    })
                }else{
                    this.$message.info('评论内容不能为🈳')
                    this.logd = false
                }
            },
            getcommeents(){
                this.loading2 =true
                this.$axios.get('/comment',{id:this.$route.query.id}).then(res=>{
                    console.log(res)
                   if(res.code ===200){
                         this.commentlist = res.data
                    this.loading2 = false
                   }else{
                       this.loading2 = false
                   }
                })
            }
        },
        created(){
            this.getblog()
            this.getcommeents()

        }
    }
</script>

<style scoped lang='scss'>
//品论列表
.comment_card{
        margin-top: 20px;
        background-color: rgb(124, 119, 119);
        color:#ddd;
        border: none;
        //添加评论
        .add_comments{
          padding: 10px;
          border-radius: 6px;
          box-shadow: 1px 2px 2px rgba($color: #585858, $alpha: 1.0);
          
          .who_add{
              display: flex;
              justify-content: space-between;
              .author_img{
                  width: 60px;
                  height: 60px;
                  line-height: 60px;
                  border-radius: 50%;
                  overflow: hidden;
                  img{
                      vertical-align: middle;
                  }
              }
              .comments_input{
                  flex: 1;
                  margin-left: 10px;
                  .com_input{
                      display: block;
                      margin-top: 10px;
                  }
            
              }
          }  
          .add_button{
              height: 40px;
              padding-top: 20px;
              text-align: right;;
          }
        }
        //评论列表
       .comments_list_wraper{
           padding: 20px;
         .comment_item{
             margin-top: 16px;
             .zuthor_message{
                 font: 15px '宋体';
                 .auth_img{
                     img{
                         vertical-align: middle;
                         height: 60px;
                         width: 60px;
                         border-radius: 6px;
                         margin-right: 20px;;
                     }
                 }
                 .coment_conteent{
                     margin-top: 10px;
                     margin-left: 80px;
                 }
                 .comment_other{
                     margin: 10px 0 0 80px;
                     text-align: right;
                 }
             }
         }
       }

}



//博文信息
.author_wraper{
    box-shadow: 2px 2px 4px rgba($color: #363836, $alpha: 1.0);
    padding: 10px;
    box-sizing: border-box;
}
.read_blog_wrpaer{
    margin: 0 auto;
    .read_blog_card{
        margin-top: 20px;
        background-color: rgb(124, 119, 119);
        color:#ddd;
        border: none;
       
    }
}
.auth_message{
  h4{
      font:16px '宋体';
      padding:10px;
  }
  .authorimg{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      transition: all 20s ;
      box-shadow: 2px 2px 2px rgba($color: #424242, $alpha: 1.0) 
  }
  .authorimg:hover{
      transform: rotateZ(10000deg)
  }
  .authdetail{
      margin-top: 10px;
      p{
          font: 15px '宋体';
          line-height: 2.0;
          color: #333;
      }
  }
}
.article_message{
    padding-left: 60px;
  .article_rhfu{
      margin-top: 20px;
    .article_messae{
    font: 13px '宋体'
      }
  }
  .blog_corver{
      height: 300px;
      margin-top: 10px;
      overflow: hidden;
      border-radius: 10px;
      text-align: center;;
  }
  .blog_content{
      margin-top: 20px;
      font: 15px '宋体';
      line-height: 1.5;
  }
}
.followbtn{
    width: 100%;
    display: block;
    box-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 1.0);
    border: none;
    background-color: rgb(160, 145, 145);
    color: #ddd;
    margin-top: 5px;
}
</style>





















