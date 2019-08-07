let echartCategory=[
    {
        name:"饼图",
        group:'pie',
        charts:[]
    },
    {
        name:"柱状图",
        group:'bar',
        charts:[]
    },
    {
        name:'折线图',
        group:"line",
        charts:[]
    }
]
const  echartFun ={

    disEchart(chartlist){
        chartlist.forEach(element => {
            switch (element.group) {
                case 'pie':
                     echartCategory[0].charts.push(element)
                    break;
                case 'bar':
                    echartCategory[1].charts.push(element)
                    break;
                case 'line':
                    echartCategory[2].charts.push(element)
                    break;
                default:
                    break;
            } 
        });
        return echartCategory
     
    }
}

module.exports = echartFun