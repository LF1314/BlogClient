<template>
    <div class="hot_blog_list">
         <ul >
             <li class="hot_blog_item" v-for="(blog,index) in hotBlogList" :key="index">
                  <div class="blog_corver">
                      <img :src="blog.corver" alt="" width="100%">
                       <div class="jintou">

                       </div>
                       <div class="blogs_detail">
                            <div v-if="blog.author" class="autho_img">
                                <img :src="blog.author.avatar" width="100%;" alt="">
                            </div>
                            <div v-if="blog.author" class="author_message">
                                  <p>{{blog.author.username}}</p>
                                  <p>
                                      <span>
                                        粉丝：{{blog.author.fans.length}}
                                      </span>
                                      |
                                      <span>
                                          博文：{{blog.author.blogs.length}}
                                      </span>
                                  </p>
                            </div>
                       </div>
                  </div>
                  <p class="blog_title">
                      {{blog.title}}
                  </p> 
             </li>
         </ul>
    </div>
</template>
<script>
    export default
    {
        name:'hotBlogList',
        data(){
            return{
              hotBlogList:[]
            }
        },
        methods:{
           async getHotBlog(){
             let data =  await this.$axios.get('/blog/hot')
            //  console.log(data.data)
             this.hotBlogList = data.data
            }
        }
        ,
        created() {
            this.getHotBlog()
        },

    }
</script>

<style scoped lang='scss'>
.hot_blog_list{
    margin-top: 20px;
    box-shadow: 2px 2px 3px rgba($color: #411527, $alpha: 1.0);
    padding-bottom: 60px;
  .hot_blog_item{
      height: 50px;
      line-height: 50px;
      padding: 10px 0 10px;
      font-size: 0;
      .blog_corver:hover div{
                    opacity: 1;
                }
      .blog_corver{
          height: 50px;
          width: 50px;
          display: inline-block;
          position: relative;
          cursor: pointer;
          img{
              vertical-align:middle;  
              border-radius: 15px;;; 
          }
         .blogs_detail{
          position: absolute;
          top: 0px;
          left: 60px;
          height:100px;
          width: 100px; 
          border-radius: 10px;
          background-color: #fff;
          transition: all .3s linear;
          opacity: 0;  
          .autho_img{
              height:40px;
              width: 40px;
              border-radius: 50%;
              overflow: hidden;;;
              margin: 0 auto;
          } 
          .author_message{
              p{
                  font: 10px '微软雅黑';
                  color:#666;
                  line-height: 2.0;
                  text-align: center;
              }
             
          }
      }
      .jintou{
          position: absolute;
          left: 46px;
          top: 20px;
          width: 0;
          height: 0;
          border:6px solid  transparent;
          border-right:9px solid #fff;
          transition: all .3s linear;
          opacity: 0;
      }
      }
      .blog_title{
          display: inline-block;
          font-size: 13px;
          vertical-align: top;
          overflow: hidden;
          padding: 0 5px 0;
          box-sizing: border-box;
      }
     
  }
}


</style>
