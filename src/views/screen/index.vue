<template>
<!--图表库页面 -->
    <div class="screen_wraper"> 
          <el-tabs tab-position="left" style="height: 200px;">
               
                <el-tab-pane label="饼图">


                </el-tab-pane>
                <el-tab-pane label="折线图">折线图</el-tab-pane>
                <el-tab-pane label="和弦图">和弦图</el-tab-pane>
                <el-tab-pane label="水形图">定时任务补偿</el-tab-pane>
            </el-tabs>
    </div>
</template>

<script>
import chartlist from '../../assets/chartlist'
import untils from '../../until/charts'
    export default {
        data(){
            return{
              screenList:null
            }
        },
        mounted(){
         this.screenList = untils.disEchart(chartlist)
         console.log(this.screenList)
        } 
    }
</script>

<style lang="scss" scoped>

</style>