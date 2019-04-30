<template>
   <div class="book_wraper w960">
        
             <el-row>
                 <el-col :span="6" class="book_category">
                       <el-card class="book_category_card">
                            <div slot="header">
                              热门
                            </div>
                            <ul>
                                <li  class="hot_book_item" v-for="(book,index) in hotlist" :key="index">
                                     <p  @click="jumptodetail(book.href)">
                                         {{book.title}}
                                     </p>
                                </li>
                            </ul>
                        </el-card>
                 </el-col>
                 <el-col :span="18" class="book_list_wraper">
                         <el-card class="booklist_card"
                           v-loading="loading"
                            element-loading-text="😤拼命加载🤩"
                            element-loading-spinner="el-icon-loading"
                            element-loading-background="rgba(0, 0, 0, 0.8)"
                         >
                             <div slot="header">
                                 图书列表
                                 </div>
                                   <ul class="book_urls">
                                       <li class="bookitem" v-for="(book,index) in booklist" :key="index">
                                            <div class="book_img" @click="jumptodetail(book.href)">
                                                  <img :src="book.bookurl" width="100%" alt="">
                                            </div>
                                            <p class="book_name">
                                                {{book.title}}
                                            </p>
                                       </li> 
                                   </ul>
                                     <el-pagination
                                        v-if="!loading"
                                        class="mapages"
                                        small
                                        layout="prev, pager, next"
                                        :total="90"
                                        @current-change='change'
                                        >
                                    </el-pagination>
                         </el-card>
                 </el-col>
             </el-row>
        
   </div>
</template>
<script>
    export default
    {
        name:'book',
        data(){
            return{
                booklist:[],
                pn:1,
                loading:false,
                hotlist:[]

            }
        },
        methods:{
           async getbooklist(pn){
               this.loading = true
              let cont = await this.$axios.get('/book/type',{pn:pn})
              if(cont.code == 200){
                  this.booklist = cont.data
                  this.loading =false
                  if(pn == 1){
                      this.hotlist = cont.data
                  }
              }
            },
            change(e){
               this.getbooklist(e)
            },
             jumptodetail(href){
                 this.$store.commit('CHANGEBOOKURL',href)
                 this.$router.push('/index/bookdetail')
                 
             }
        },
        created(){
            this.getbooklist(this.pn)
            
        }
    }
</script>

<style scoped lang='scss'>
.book_wraper{
    margin: 0 auto;
    margin-top: 20px;
}
.book_category_card{
    background-color: rgb(138, 132, 132);
    border: none;
    color: #fff;
}
.booklist_card{
    background-color: rgb(131, 125, 125);
    border: none;
    color: #fff;
}

.book_urls{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .bookitem{
        min-width: 40px;
        max-width: 119px;
        text-align: center;
      .book_img{
          width: 60%;
          display:block;
          margin: 0 auto;
          cursor: pointer;
          transition: transform .3s linear;
      }
      .book_name{
          padding: 10px;
          font: 10px '宋体'
      }
    }
}
.book_img:hover{
    transform: scale(1.1)
}
.el-pagination{
    background-color:#837d7d;
    border-radius: 4px;
    text-align: center;
    margin-top: 10px;
}
.hot_book_item{
    p{
        font: 14px '宋体';
        line-height: 40px;
        height: 40px;;
        cursor: pointer;
        border-bottom: 1px solid rgba(63, 62, 62, 0.3);
        transition: font .2s linear;
        display: -webkit-box;
        -webkit-line-clamp:1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    };
    p:hover{
        font-size: 15px;
    }
}
</style>
