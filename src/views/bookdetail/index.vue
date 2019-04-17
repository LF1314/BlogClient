//这里是书籍详情页

<template>
    <div class="book_detail_wraper w960">
         <el-row>
             <el-col :span="5" class="mulu_wraper"
                            v-loading="loading"
                            element-loading-text="🧐拼命加载中"
                            element-loading-spinner="el-icon-loading"
                            element-loading-background="rgba(0, 0, 0, 0.8)"
             
             >
                    <div class="book_mulu">
                           <el-button 
                           type='text' 
                           class="backbtn"
                           @click="back"
                           >返回</el-button>
                           <ul>
                               <li class="cat_itme" 
                               v-for="(category,index) in category" 
                               :key="index"
                               :class="category.con == cont ? 'active':''"
                               @click="getcontent(category.con)"
                               >
                                   <p>
                                       {{category.title}}
                                   </p>                                
                               </li>
                           </ul>
                     </div>
             </el-col>
             <el-col :span="19" class="content_wraper"
                            v-loading="loading2"
                            element-loading-text="🧐拼命加载中"
                            element-loading-spinner="el-icon-loading"
                            element-loading-background="rgba(0, 0, 0, 0.8)"
             
             >
                      <div class="book_content">
                                    <vue-markdown
                                     :source='content'
                                    ></vue-markdown>
                      </div>
             </el-col>
         </el-row>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'

    export default
    {
        name:"bookdetail",
        data(){
            return{
                category:'',
                cont:'',
                loading:false,
                content:"",
                loading2:false
            }
        },
        components:{
              VueMarkdown
        },
        methods:{
            //获取书籍目录
          async getcategory(){
              this.loading = true
                if(this.$store.state.bookurl){
                    console.log(this.$store.state.bookurl)
                    let category =await this.$axios.get('/book/category',{href:this.$store.state.bookurl})
                   if(category.code ==200){
                       this.category = category.data
                       this.cont = this.category[0].con
                       this.getcontent(this.cont)
                       this.loading = false
                   }
                   
                }else{
                    this.loading = false
                }
               
            },
    async getcontent(con){
           this.loading2 = true
           this.cont = con
           let url =  this.$store.state.bookurl +'/'+ con
           
           let data =await  this.$axios.get('/book/content',{href:url})
           if(data.code == 200){
               try {
                let str= data.data.trim()
                str =await new String(str,"utf-8")
                this.content = str
                this.loading2 =false
               } catch (error) {
                  
                   this.loading2 =false
               }
              
           }else{
               this.loading2 =false
           }
            },
            back(){
                this.$router.push('/index/book')
            }
        },
        created(){
            this.getcategory()
        }
    }
</script>
<style scoped lang='scss'>
  .mulu_wraper{
      box-shadow: 2px 2px 3px rgba($color: #000000, $alpha: 1.0);
      padding-left: 20px;
      box-sizing: border-box;   
  }
   .book_detail_wraper{
       margin: 0 auto;
       min-height: 200px;
       border-radius: 20px;
       padding: 30px;
       color: #fff;
       font: 14px '宋体';
       background-color: rgb(97, 93, 93);
   }
   .book_mulu{
       .cat_itme{
           p{
               line-height: 40px;
               height: 40px;
               font-size: 14px;
               cursor: pointer;;
               transition: font .2s linear;

           }
           p:hover{
               font-size: 16px;
               color: rgb(188, 253, 7);
           }
       }
   }
   .active{
               font-size: 16px;
               color: rgb(188, 253, 7);
             }
.book_content{
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    line-height: 1.5;
    color: #fff;
    border-radius: 20px;
    overflow: hidden;
}
.backbtn{
    font-size: 17px;
    color: #fff;
}
.backbtn:hover{
    color: rgb(9, 255, 0);
}
</style>
