<template>
    <div class="wraper">
        <div class="inner_wraper">
                        <div class="navheader">
                            <ul>
                                <li class="li_item">
                                    智能AI
                                </li>
                            </ul>
                        </div>

                        <div class="content">
                             <component :is="componentId"></component>
                        </div>
        </div> 

    </div>
</template>

<script>

 import jqrchart from './components/Aimess'
export default {
  data(){
      return{
         componentId:'jqrchart'
      }
  },
  components:{
      jqrchart
  }

};
</script>

<style scoped lang='stylus'>
.wraper
    min-height 100vh
    .inner_wraper
        width 90%
        margin 0 auto
        min-height 100vh
        display flex
        justify-content space-around
        .navheader
            font-weight bold
            font-size 18px
            margin-top 20px
            width 20%
            // border 1px solid #ddd
            .li_item
              height 30px
              line-height 30px   
              text-align center  
              color #e5d5d2
        .content
            width 75%
            // border 1px solid #000

</style>