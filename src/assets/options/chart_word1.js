export default{
       // 词语图
       tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0.7)',
        padding: 10,
        textStyle:{
        	color: '#fff',
            fontSize: 18
            
        },
    },
    //随机色系组
    colorArr: ['#74ed4f', '#24ffe0', '#10c0a8', '#45b2ff', '#4d24ff',
            '#2545e9', '#3091ff', '#567aff',
          '#7fddec', '#ffd235', '#ebff63', '#f98334', '#fac100'],
    series: [
        {
        type: "wordCloud",
        gridSize:6,
        shape:'diamond',
        sizeRange: [12, 50],
        rotationRange:[-90,90],
        textStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            },
            normal:{
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
            }
        }
    }
    ]
}