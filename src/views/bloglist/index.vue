<template>
    <div class="bloglist_wraper w960">
      <el-card class="bloglist_card">
          <div slot="header" class="headerss">
                 <div class="list_header">
                     博文
                 </div>
                 <div class="serch_input">
                     <el-input placeholder="请输入要查询的博文名字"> </el-input>
                 </div>
          </div>
          <el-row>
              <el-col :span='5'>
                    <div class="list_header">
                        热门文章
                    </div>
                    <hot-blog></hot-blog>
              </el-col>
              <el-col :span='16'
                v-loading="loading"
                element-loading-text="拼命加载中..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
              
              
              >
                         <div class="list_header">
                             文章列表
                         </div>
                         <div class="blog_list">
                               <ul>
                                   <li
                                    class="blog_list_item"
                                    v-for="(blog,index) in blogList" 
                                    :key="index"
                                    >
                                    <div class="blog_img">
                                          <img :src="blog.corver" alt="" width="100%">
                                    </div>
                                    <div class="blog_detail" v-if="blog.author">
                                           <p class="blog_title">{{blog.title}}</p>
                                            <p class="blog_other">
                                                <span class="blog_type">
                                                    前端开发
                                                </span>
                                                <span class="loook">
                                                    {{blog.looknum}}
                                                </span>
                                                <img src="../../../static/img/yuedu.png" alt="">

                                                <span class="loook"
                                                 v-for="(cat,index) in blog.category" :key="index"
                                                >
                                                {{cat}}
                                                </span>
                                                <span class="loook fr">
                                                        {{blog.creatime}}                  
                                                </span>
                                            </p>
                                    </div>
                                   
                                   </li>
                               </ul>
                         </div>
              </el-col>
              <el-col :span='3' class="type_epares">
                    <div class="list_header">
                        分类
                    </div>
                    <blog-type></blog-type>
              </el-col>
          </el-row>
      </el-card>
    </div>
</template>
<script>
  import hotBlog from '../../components/Hotblog.vue'
  import blogType from '../../components/Category.vue'
    export default
    {
        name:"bloglist",
        components:{
            hotBlog,
            blogType
        },
        data(){
            return{
                type:'0',
                pn:'1',
                blogList:[],
                loading:false
            }
        },
        methods:{
          async getblogs(type,pn){
            this.loading = true
            let data = await this.$axios.get('/blog/type',{type,pn})
            if(data.code == 200){
              this.blogList = data.data
              this.loading = false
            }else{
                this.loading =false
            }
            
           
            }
        },
        created() {
            this.getblogs(this.type,this.pn)
        },
    }
</script>
<style scoped lang='scss'>
.list_header{
    text-align: center;
    font-family: '微软雅黑'
}
.bloglist_wraper{
    margin: 20px auto;
}
.bloglist_card{
    font:15px '宋体';
    color: #fff;
    background-color: rgb(83, 80, 80);
    border: none;
}
.headerss{
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;;
    justify-content: space-between;
    .serch_input{
        width: 260px;
        .el-input{
            color: #333;
        }
    }
}
.blog_list{
    background-color: rgb(126, 109, 109);
    border-radius: 20px;
    margin-top: 20px;
    .blog_list_item{
        font-size: 0;
        margin-top: 20px;
        padding: 10px;
        box-sizing: border-box;
        .blog_img{
            display: inline-block;
            width: 60px;
            height: 60px;
            border-radius: 10px;
            overflow: hidden;
            img{
                vertical-align: middle;
            }
        }
        .blog_detail{
             height: 100%;
            display: inline-block;
            vertical-align: top;
            margin-left: 20px;
            padding-bottom: 10px;
            box-sizing: border-box;
            width: 500px;
            border-bottom: 1px dashed #666;
            .blog_title{
                font: 16px '宋体';
                transition: all .2s linear;
                cursor: pointer;
            }
            .blog_title:hover{
                color:rgb(215, 243, 114);
                font-size: 17px;
            }
            .blog_other{
                margin-top: 10px;
                    height: 30px;
                    line-height: 30px;
                .blog_type{
                    display: inline-block;
                    width: 100px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 13px;
                    text-align: center;
                    border-radius: 10px;
                    margin-right: 20px;
                    background-color: rgb(131, 126, 126);
                  
                }
                  img{
                        vertical-align:top;
                        line-height: 30px;
                        margin-top: 8px;
                    }
            }
        }
    }
}
.loook{
    font-size: 12px;
    display: inline-block;
    margin: 0 10px;
}
</style>























