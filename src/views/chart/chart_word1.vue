<template>
    <v-chart ref="echart" class="chart" :options="settings" :autoresize="true" />
</template>

<script>
 import Echart from 'vue-echarts'
 import 'echarts-wordcloud'
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
            
                this.settings.series[0].data = this.dataset.demo
                this.settings.series[0].textStyle.normal.color = () => {
                            let len = this.settings.colorArr.length - 1
                    return this.settings.colorArr[Math.round(Math.random() * len)] 
                }
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