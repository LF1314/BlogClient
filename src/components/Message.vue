<template>
    <div class="message_wraepr">
           <scroller 
            :on-refresh="refresh"
            class="scroller"
            ref="scroll"
            >
             <ul ref="scollui">
                 <li class="messae_item" v-for="(mes ,index) in meslist" :key="index">
                       <div class="clearfix">
                            <div class="author_img" v-if="mes.from" 
                            :class="userinfo._id == mes.from._id ? self : other">
                                       <div class="wraeprs">
                                            <img :src="mes.from.avatar" width="100%" alt="">
                                            <span>
                                                {{mes.from.username}} 
                                            </span>
                                       </div>
                                       <div class="content clearfix">
                                            <div class="jiatou">

                                            </div>
                                            <div class="mes_content">
                                                   {{mes.content}}
                                            </div>
                                       </div>
                            </div>
                       </div>
                 </li>
             </ul>
            </scroller>
    </div>
</template>
<script>
//  import Scroller from 'vue-scroller'
    export default
    {
        name:"messages",
        props:{
           to:{
               type:String
           },
           message:{
               type:Object
           }
        },
       watch:{
          message(val){
              if(val){
              this.meslist.push(val)
            //   console.log(this.meslist)
                   let he =this.$refs.scollui.clientHeight+100  
                  setTimeout(() => {
                        this.$refs.scroll.scrollTo(0,he,false)
                    }, 10);  
              }  
          }
       },
       mounted() {
                 let he =this.$refs.scollui.clientHeight+100  
                  setTimeout(() => {
                        this.$refs.scroll.scrollTo(0,he,false)
                    }, 10);  
       },
        data(){
            return{
               pn:1,
               meslist:[],
               self:"sell",
               other:'other',
               len:0,
               userinfo:{},
               timers:null
            }
        },
        methods:{
            //获取信息列表
           async  getmeslist(){
              let chatlist =await  this.$axios.get('/chat',{to:this.to,pn:this.pn})
            //   console.log(chatlist)
              this.meslist = chatlist.data
              this.len = this.meslist.length
            }
            ,
            refresh(){        
            }
        },
        created(){
            this.timers = setInterval(()=>{
                this.getmeslist()
                let he =this.$refs.scollui.clientHeight+100  
                setTimeout(() => {
                this.$refs.scroll.scrollTo(0,he,false)
            }, 10);
            },1000)
            if(!this.$store.state.userinfo){
                 this.userinfo.id = null
            }else{
                this.userinfo = this.$store.state.userinfo
            }
        },
        beforeDestroy() {
            clearInterval(this.timers)
        }
  
    }
</script>

<style scoped lang='scss'>
.message_wraepr{
    width: 100%;
    height: 100%;
    position: relative; 
    padding-bottom: 50px;

}
._v-container{
 position: relative;
}

.messae_item{
 padding: 20px;
 .author_img{
    font: 14px '宋体';
   img{
     width: 50px;
     height: 50px;
     overflow: hidden;
     border-radius: 50%;
     vertical-align: middle;
   }
 }   
}

.other{
    .content{
        position: relative;
         margin-left: 50px;  
         .jiatou{
             border-left:20px solid transparent;
              border-right:-5px solid transparent;
              border-bottom:15px solid transparent;
              border-top: 15px solid #fff;
              width: 0;
         }
         .mes_content{
             position: absolute;
             top: 0;
             left: 20px;
             display: block;
             background-color: #fff;
             padding: 10px;
             border-top-right-radius: 6px;
             border-bottom-left-radius: 6px;
             border-bottom-right-radius: 6px;;
         }
    }
  }


.sell{
    float: right;;
    width: 100%;
    img{
       float: right;;
       vertical-align: middle;
    }
    span{
        float: right;;
        display:block;
        margin-top: 10px;
    }
    .content{
        margin-right: 50px;
        position: relative;
        width: 100%;
         .jiatou{
             border-left:-5px solid transparent;
              border-right:20px solid transparent;
              border-bottom:15px solid transparent;
              border-top: 15px solid rgb(26, 29, 243);
              width: 0;
              position: absolute;
              right: 50px;
              top: 0;
         }
          .mes_content{
             position: absolute;
             top: 0;
             right: 70px;
             display: block;
             background-color: rgb(26, 29, 243);
             color: #fff;
             padding: 10px;
             border-top-left-radius: 6px;
             border-bottom-left-radius: 6px;
             border-bottom-right-radius: 6px;;
         }
    }
}
.wraeprs{
    overflow: hidden;
}
</style>
