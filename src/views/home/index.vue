<template>
       <div class="swiper_wraper">
            <div class="weiper_inner w960">
                     <div class="lunbo">
                              <el-carousel height="270px">
                                    <el-carousel-item v-for="(item,index) in bannerlist" :key="index">
                                        <img :src="item.imgurl" alt="" class="imgss">
                                    </el-carousel-item>
                             </el-carousel>
                     </div>
                     
            </div>
            <div class="body_inner w960">                 
                       <div  class="article_wrepr">
                               <special></special>
                               <newarticle></newarticle>
                       </div>
                       <div  class="newblog_list">
                            <div class="blog_author">
                                <div class="blog_boss">
                                        <el-card class="mycard">
                                                <h2>我的卡片</h2>
                                                <p><span>网名：</span><span>慕圣</span></p>
                                                <p><span>职业：</span><span>web前端工程师</span></p>
                                                <p><span>phone：</span><span>null</span></p>
                                                <p><span>email：</span><span>xundw@qq.com</span></p>
                                                <div class="personmessae">
                                                        <ul>
                                                            <li class="per_item"></li>
                                                            <li class="per_item"></li>
                                                            <li class="per_item"></li>
                                                            <li class="per_item"></li>
                                                    
                                                        </ul>
                                                </div>
                                        </el-card>
                                    </div>
                            </div>

                            <div class='title_waraper'>
                                  最新发布
                            </div>
                            <ul>
                                <li class="blog_list_item" v-for="(blog,index) in blogList" :key="index">
                                     <p>
                                      {{blog.title}}
                                    </p>  
                                </li>
                            </ul>
                       </div>
              
            </div>
      </div>
</template>
<script>
import special from "../../components/Newest";
import newarticle from "../../components/Newarticle";
import blogAuthor from "../../components/Blogperson";
export default {
  name: "homeindex",
  data() {
    return {
      bannerlist: [],
      blogList: [],
      cliwidts: 0 //获取当前body的值
    };
  },
  components: {
    special,
    newarticle,
    blogAuthor
  },
  methods: {
    getbanner() {
      this.$axios.get("/banner").then(res => {
        this.bannerlist = res.data;
      });
    },
    async getNewBlog() {
      let data = await this.$axios.get("/blog/new");
      if (data.code == 200) {
        this.blogList = data.data;
      }
    }
  },
  created() {
    this.getbanner();
    this.getNewBlog();
   
  },
  mounted(){
    let cliwtids = document.body.clientWidth;
       if (cliwtids < 680) {
      $(".newblog_list").hide();
      $(".article_wrepr").css({ width: "100%" });
    } else {
      $(".newblog_list").show();
    }
  },
  watch: {}
};
window.onload = () => {
  let cliwtids = document.body.clientWidth;
  if (cliwtids < 680) {
    $(".newblog_list").hide();
    $(".article_wrepr").css({ width: "100%" });
  } else {
    $(".newblog_list").show();
  }
  window.onresize = () => {
    let cliwtids = document.body.clientWidth;
    if (cliwtids < 680) {
      $(".newblog_list").hide();
      $(".article_wrepr").css({ width: "100%" });
    } else {
      $(".newblog_list").show();
    }
  };
};
</script>

<style scoped lang ='scss'>
.body_inner {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .article_wrepr {
    margin-top: 30px;
    width: 100%;
  }
}
.swiper_wraper {
  padding: 30px;
  .weiper_inner {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
.lunbo {
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
}
.blog_boss {
  min-width: 25px;
  .mycard {
    height: 260px;
    background-color: #2a2a2a;
    border: none;
    h2 {
      font-size: 19px;
      color: #3f3e3c;
    }
    p {
      line-height: 35px;
      margin-top: 8px;
      font: 13px "宋体", "Arial Narrow", HELVETICA;
      color: #89919a;
    }
  }
}
.personmessae {
  margin-top: 40px;
  ul {
    display: flex;
    justify-content: space-around;
  }
  .per_item {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 1px rgba(0, 0, 0, 0.7);
    background-color: #3f3e3c;
  }
}
.newblog_list {
  margin-top: 30px;
  background-color: #2a2a2a;
  border-radius: 10px;
  font-family: "宋体";
  display: block;
  padding: 20px;
  box-sizing: border-box;
}
.title_waraper {
  text-align: center;
  border-bottom: 2px dashed #333;
  color: #ddd;
  padding-bottom: 10px;
}
.blog_list_item {
  margin-top: 10px;
  p {
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    font: 14px "宋体";
    transition: all 0.2s linear;
    color: #ddd;
  }
  p:hover {
    font-size: 15px;
    color: #ff0;
  }
}
.imgss {
  width: 100%;
  height: 100%;
}
</style>
