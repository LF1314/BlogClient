<template>
    <div class="message_wraepr">
           <scroller 
            :on-refresh="refresh"
            class="scroller"
            ref="scroll"
            >
             <ul ref="scollui">
                 <li class="messae_item" v-for="(mes ,index) in message" :key="index">
                       <div class="clearfix">
                            <div class="author_img"
                            :class="mes.status == 1 ? self : other">
                                       <div class="wraeprs">
                                            <img :src="userinfo.avatar" width="100%" alt="">
                                            <span v-if="mes.status==0 ? false : true">
                                                {{userinfo.username}} 
                                            </span>
                                            <span v-else>傻狍子</span>
                                       </div>
                                       <div class="content clearfix">
                                            <div class="jiatou">

                                            </div>
                                            <div class="mes_content">
                                                   {{mes.text}}
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
    export default
    {
        name:"messages",
        props:{
           to:{
               type:String
           },
           message:{
               type:Array
           }
        },
       watch:{
          message(){
              let he =this.$refs.scollui.clientHeight+100  
              setTimeout(() => {
                        this.$refs.scroll.scrollTo(0,he,false)
                    }, 10);  
          }
       },
       mounted(){
          let he =this.$refs.scollui.clientHeight+100  
              setTimeout(() => {
                        this.$refs.scroll.scrollTo(0,he,false)
                    }, 1000);  
       },
        data(){
            return{
               pn:1,
               meslist:[],
               self:"sell",
               other:'other',
               userinfo:{}
            }
        },
        methods:{
            refresh(){        
            }
        },
        created(){
            
            if(!this.$store.state.userinfo){
                 this.userinfo.id = null
            }else{
                this.userinfo = this.$store.state.userinfo
            }
        },
  
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
