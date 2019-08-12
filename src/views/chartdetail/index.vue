<template>
    <div class="chartdetail_wraper">
          <div class="detail_inner">
                <!-- chartCompoonent -->
            <div class="component_wrap" v-if="loade">
              <component :is="chartItem.type" :options='chartItem.options' :dataset='chartItem.dataset'/>
            </div>
            <div class="component_config">

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
  border 1px solid #fff
  .component_wrap
    width 60%
    height 90vh
</style>