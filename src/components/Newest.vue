
//特别推荐，，热门文章
<template>
    <div class="blog_list_wraepr">
         <el-card class="pecial_card">
              <div slot="header">
                    特别推荐
              </div>
              <ul>
                  <li class="special_article_item">
                       <img src="../../static/img/life.jpg" width='100%' alt="">
                       <p class="article_title">
                           生活有度，人生添寿
                       </p>
                       <p class="article_contetn">
                              生活的意义在于美好，在于向往目标的力量。
                              应当使征途的每一瞬间都具有崇高的目的。苏联高尔基伟人的生平昭示我们，
                              我们也能使自己的生命令人崇敬；当我们告别人生的时候，在时间的沙滩上留下自己的脚印
                       </p>

                       <p class="read_ariticle">+阅读原文</p>
                  </li>
                  <li class="special_article_item">
                      <img src="../../static/img/life1.jpg" width='100%' alt="">
                       <p class="article_title">
                           生活的主要悲剧，就是停止斗争
                       </p>
                        <p class="article_contetn">
                              生活的意义在于美好，在于向往目标的力量。
                              应当使征途的每一瞬间都具有崇高的目的。苏联高尔基伟人的生平昭示我们，
                              我们也能使自己的生命令人崇敬；当我们告别人生的时候，在时间的沙滩上留下自己的脚印
                       </p>
                        <p class="read_ariticle">+阅读原文</p>
                  </li>
                  <li class="special_article_item">
                      <img src="../../static/img/life2.jpg" width='100%'  alt="">
                       <p class="article_title">
                          生活于愿望之中而没有希望
                       </p>
                        <p class="article_contetn">
                              生活的意义在于美好，在于向往目标的力量。
                              应当使征途的每一瞬间都具有崇高的目的。苏联高尔基伟人的生平昭示我们，
                              我们也能使自己的生命令人崇敬；当我们告别人生的时候，在时间的沙滩上留下自己的脚印
                       </p>
                        <p class="read_ariticle">+阅读原文</p>
                  </li>
                  <li class="special_article_item">
                      <img src="../../static/img/life3.jpg" width='100%' alt="">
                       <p class="article_title">
                           生活有度，人生添寿
                       </p>
                        <p class="article_contetn">
                              生活的意义在于美好，在于向往目标的力量。
                              应当使征途的每一瞬间都具有崇高的目的。苏联高尔基伟人的生平昭示我们，
                              我们也能使自己的生命令人崇敬；当我们告别人生的时候，在时间的沙滩上留下自己的脚印
                       </p>
                        <p class="read_ariticle">+阅读原文</p>
                  </li>
                  <li class="special_article_item">
                      <img src="../../static/img/life4.jpg" width='100%' alt="">
                       <p class="article_title">
                           生活之树是常青的
                       </p>
                        <p class="article_contetn">
                             生活的意义在于美好，在于向往目标的力量。
                              应当使征途的每一瞬间都具有崇高的目的。苏联高尔基伟人的生平昭示我们，
                              我们也能使自己的生命令人崇敬；当我们告别人生的时候，在时间的沙滩上留下自己的脚印
                       </p>
                        <p class="read_ariticle">+阅读原文</p>
                  </li>
                  <li class="special_article_item">
                      <img src="../../static/img/life5.jpg" width='100%' alt="">
                       <p class="article_title">
                          爱他人，并为他人所爱
                       </p>
                        <p class="article_contetn">
                              生活的意义在于美好，在于向往目标的力量。
                              应当使征途的每一瞬间都具有崇高的目的。苏联高尔基伟人的生平昭示我们，
                              我们也能使自己的生命令人崇敬；当我们告别人生的时候，在时间的沙滩上留下自己的脚印
                       </p>
                        <p class="read_ariticle">+阅读原文</p>
                  </li>
                  

              </ul>
         </el-card>
    </div>
</template>
<script>
    export default
    {
        name:"special"
    }
</script>


<style scoped lang ='scss'>
   .blog_list_wraepr{
       width: 700px;
       .pecial_card{
           background-color: rgb(59, 57, 57);
           border: none;
           color: #ddd;
           ul{
               display: flex;
               justify-content: space-around;
               flex-wrap:wrap;
           }
           ul li:nth-of-type(-n+3){
                box-shadow: 0 2px 2px rgba($color: #80780e, $alpha: 1.0);
           }
           li{
               list-style: none;
           }
           .special_article_item{
              margin-top: 10px;
              width: 32%;
              box-shadow: 0px -2px 2px rgba($color: #80780e, $alpha: 1.0);
              height: 320px;
              overflow: hidden;
              padding: 20px;
              box-sizing: border-box;
              img{
                  width: 100%;
                  height: 120px;;
                  border-radius: 6px;
              }
              .article_title{
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 14px;
                  margin-top: 5px;
              }
              .article_contetn{
                  display: -webkit-box;
                  -webkit-line-clamp:4;
                  -webkit-box-orient: vertical;
                   overflow: hidden;
                   font-size: 12px;
                   color: #888;
                   line-height: 2.0;
                   margin-top: 14px;
              }
              .read_ariticle{
                  font-size: 14px;
                  color: rgb(173, 172, 172);
                  display: inline-block;
                  padding: 5px;
                  border-radius: 5px;
                  margin-top: 14px;
                  cursor: pointer;
                  background-color: rgb(105, 76, 76);
                  box-shadow: 2px 2px 2px rgba($color: #252525, $alpha: 1.0)
              }
           }
       }

   }
   .boxshow_bottom{
       box-shadow: 0 2px 2px rgba($color: #80780e, $alpha: 1.0);
   }
</style>
