<template>
<!--图表库页面 -->
    <div class="screen_wraper"> 
          <el-tabs tab-position="left" style="height:100%"> 
                <el-tab-pane v-for="(item,index) in screenList" :key="index" :label="item.name">
                 <div class="chart_waper" v-if="item.charts.length">
                     <div class="chartItem" v-for="(chartItem,ind) in item.charts"
                     :key="ind+item.charts.length"
                    
                     >
                        <el-card :body-style="{ padding: '0px' }">
                         <img class="chart_img" :src="imgbase + chartItem.chart_cover" alt="">
                          <div style="padding: 14px;">
                            <span>{{chartItem.name}}</span>
                            <div class="bottom clearfix">
                              <time class="time">{{chartItem.author}}</time>
                              <el-button type="text" class="button"  @click="gotoChartDetail(chartItem)" >详情</el-button>
                            </div>
                          </div>
                        </el-card>
                     </div>
                 </div>    
                </el-tab-pane>
            </el-tabs>
    </div>
</template>

<script>
import chartlist from '../../assets/chartlist'
import untils from '../../until/charts'
    export default {
        data(){
            return{
              screenList:null,
              imgbase:'/static/img/'
            }
        },
        mounted(){
         this.screenList = untils.disEchart(chartlist)
        //  console.log(this.screenList)
        } ,
        methods:{
            gotoChartDetail(item){
              this.$router.push('/index/chartdetail')
              this.$store.commit('CHANGECHART',item)

            }
        },
        beforeDestroy(){
            this.screenList = null
        }
    }
</script>

<style lang="stylus" scoped>
.chart_waper
  width 100%
  height 100%
  display flex
  flex-wrap wrap
  justify-content space-between
  .chartItem
    flex 0 0 30%
    .chart_title
      font-size 18px;
      font-weight normal 
      text-align center
      font-family '宋体'
    .chart_author
      font-size 14px
      color #333
      text-align center
    .chart_img
      width 80%
      text-align center
      display block
      margin 0 auto 
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>