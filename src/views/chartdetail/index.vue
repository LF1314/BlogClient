<template>
    <div class="chartdetail_wraper">
          <div class="detail_inner">
                <!-- chartCompoonent -->
            <div class="component_wrap" v-if="loade">
              <component :is="chartItem.type" :options='chartItem.options' :dataset='chartItem.dataset'/>
            </div>
            <div class="component_config">
              <el-tabs type="border-card">
                <el-tab-pane label="基本配置">
                      <div class="basic_option">
                            <h3>基本配置</h3>
                            <div class="code_wraper" v-if="loade">
                                <codemirror
                                 :options='basicode'
                                 :value='basicoption'
                                ></codemirror>
                            </div>
                      </div>
                </el-tab-pane>
                <el-tab-pane label="数据">数据</el-tab-pane>
                <el-tab-pane label="互动">互动</el-tab-pane>
              </el-tabs>
            </div>
          </div>
    </div>
</template>

<script>
  import {cloneDeep} from 'lodash'
  import {codemirror} from 'vue-codemirror'
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/theme/base16-dark.css'
  import Vue from 'vue'
    export default {
        data(){
            return{
                chartItem:null,
                loade:false,
                basicode:{
                  tabSize: 4,
                  	mode: {
                      name: 'javascript',
                      json: false
                    }
                  ,
                   theme: 'base16-dark',
                  lineNumbers: true,
                  line: true,
                },
                basicoption:''
            }
        },
        components:{
          codemirror
        },
        mounted(){
            let newChart = cloneDeep(this.$store.state.nowChart)
            Vue.component(newChart.type,()=>import(`@views/chart/${this.$store.state.nowChart.type}.vue`))
            this.chartItem = newChart
            this.loade = true
            this.basicoption = JSON.stringify(this.chartItem.options,null,1)
            
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