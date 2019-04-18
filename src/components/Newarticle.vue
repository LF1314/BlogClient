//最新文章列表

<template>
     <div class="new_article_list">
           <el-card class="new_article_card">
               <div slot="header">
                     最新博文
               </div>
               <ul>
                   <li class="newblog_list_item" v-for="(art ,index) in article" :key="index">
                        <p class="new_blog_title">
                            {{art.title}}
                        </p>
                         <div class="new_blog_body">
                             <div class="imgdiv">
                                  <img width="100%" :src="art.corver" alt="">
                             </div>
                             <div class="blog_content_sulv">
                               {{art.contentext}}
                             </div>
                         </div>  
                        <div class="new_bog_footer">
                             <div class="article_messae">
                                 <span>
                                     <img src="../../static/img/titme.png" alt="">
                                    {{art.creatime}}
                                 </span>
                                 <span>
                                     <img src="../../static/img/yuedu.png" alt="">
                                     浏览({{art.looknum}})
                                 </span>
                                 <span>
                                     <img src="../../static/img/huifu.png" alt="">
                                     回复({{art.readnum}})
                                 </span>
                             </div>
                             <div class="go_read" @click="jumptodetail(art._id)">
                                 <span>》》》阅读原文</span>
                             </div>
                         </div>
                   </li>
               </ul>
          </el-card>   
     </div>
</template>

<script>
   export default
   {
       name:'newarticle_list',
       data(){
           return{
               article:[]
           }
       },
       methods:{
           gethotarticle(){
               this.$axios.get('/blog/new').then(res=>{
                //    console.log(res)
                   this.article = res.data
               })
           },
              jumptodetail(id){
           this.$router.push(`/index/blogdetail?id=${id}`)
       }
       },
       created(){
           this.gethotarticle()
       },
    
   }
    
</script>

<style scoped lang='scss'>
.new_article_list{
    width: 100%;
    margin-top: 20px;
}
.new_article_card{
       background-color: rgb(77, 61, 61);
       border: none;
       color: #ddd;
      .newblog_list_item{
         margin-top: 20px;
        .new_blog_title{
            font: 15px "宋体";
            color: rgb(180, 179, 179);
        }
          .new_blog_body{
              display: flex;
              margin-top: 10px;
              justify-content: space-between;
              .imgdiv{
                  width: 200px;
                  flex: 0 0 180px;
                  height: 120px;
                  display: inline-block;
                  margin-right: 20px;
                  border-radius: 6px;
                  overflow: hidden;
              }
              .blog_content_sulv{
                  line-height:2.0;
                  font-size: 13px;
                  color: #999;
                  display: -webkit-box;
                  -webkit-line-clamp:3;
                  -webkit-box-orient: vertical;
                   overflow: hidden;
                   height: 80px;
              }
          
          }
              .new_bog_footer{
                //   margin-left: 200px;
                  display: flex;
                  justify-content: space-between;
                  span{
                      img{
                          vertical-align: middle;
                      }
                      font: 12px '宋体';
                      color: #ddd;
                  }
                  .go_read{
                      cursor: pointer;
                      min-width: 100px;
                      max-height: 20px;
                      padding: 5px;
                      background-color: rgb(85, 38, 38);
                      border-radius: 5px;
                  }
                  
              }
      }
   }
   .go_read:hover{
     box-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 1.0);
     span{
         color: #fff;
     }
   }
</style>






















