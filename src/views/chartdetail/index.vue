<template>
    <div class="chartdetail_wraper">
          <div class="detail_inner">
                <!-- chartCompoonent -->
            <div class="component_wrap" v-if="loade">
              <component :is="chartItem.type" :options='chartItem.options' :dataset='chartItem.dataset'/>
            </div>
            <div class="component_config">
              <el-tabs type="border-card">
                <el-tab-pane label="基本配置">基本配置</el-tab-pane>
                <el-tab-pane label="数据">数据</el-tab-pane>
                <el-tab-pane label="互动">互动</el-tab-pane>
              </el-tabs>
            </div>
          </div>
    </div>
</template>

<script>
  import {cloneDeep} from 'lodash'
  import Vue from 'vue'
    export default {
        data(){
            return{
                chartItem:null,
                loade:false
            }
        },
        mounted(){
            let newChart = cloneDeep(this.$store.state.nowChart)
            Vue.component(newChart.type,()=>import(`@views/chart/${this.$store.state.nowChart.type}.vue`))
            this.chartItem = newChart
            this.loade = true
            
        }
    }
</script>

<style lang="stylus" scoped>
.chartdetail_wraper
  width 100%;
  height 100%
  .detail_inner
    display flex
    justify-content space-between
    padding 20px
    .component_wrap
      width 57%
      height 90vh
      background-color #666
    .component_config
      width 40%
      height 90vh
</style>