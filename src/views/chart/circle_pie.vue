<template>
    <v-chart ref="echart" class="chart" :options="settings" :autoresize="true" />
</template>

<script>
 import Echart from 'vue-echarts'
 import 'echarts/lib/chart/pie'
 import 'echarts/lib/component/tooltip'
 import 'echarts/lib/component/legend'
 import untils from '../../until/charts'

    export default {
        components:{
        'v-chart':Echart
        },
        props:untils.props,
        data(){
         return {
           settings:null
         }
        },
        mounted(){
            this.settings = this.options
            this.$refs.echart.refresh()
        },
        methods:{
         
        }
    }
</script>

<style lang="stylus" scoped>
.chart
  width 100%
  height 100%
</style>