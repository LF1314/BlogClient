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
    },
    {
        name:"词云图",
        group:'chartword',
        charts:[]
    },
    {
        name:"水形图",
        group:'waterchart',
        charts:[]
    }
]
const  echartFun ={
    
    disEchart(chartlist){
        echartCategory.map(item=>item.charts=[])
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
                case 'chartword':
                    echartCategory[3].charts.push(element)
                    break;
                default:
                    break;
            } 
        });
        return echartCategory
     
    },
    props:['id', 'options', 'dataset', 'position', 'size', 'actions']
}

module.exports = echartFun