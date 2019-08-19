
import circle_pie from './options/circle_pie'
import chart_word1 from './options/chart_word1'
export default [

    {
        name: "圆形饼图",
        author: 'admin',
        type: 'circle_pie',
        group: 'pie',
        options: circle_pie,
        chart_cover: 'gradual_change_pie.png',
        dataset: {
            demo:[]
        },
        vsersion: '1.0.0'

    },
    {
        name:"词云图",
        author:'admin',
        type:"chart_word1",
        group:'chartword',
        options: chart_word1,
        chart_cover:'echart_basic_hotword.png',
        dataset:{
            demo:[
                {
					name: " 流畅",
					value: 5
				},
				{
					name: " 系统",
					value: 5
				},
				{
					name: " 非常",
					value: 5
				},
				{
					name: " 满意",
					value: 5
				},
				{
					name: " 购物",
					value: 5
				},
				{
					name: " 玩游戏",
					value: 5
				},
				{
					name: " 信号",
					value: 5
				},
				{
					name: " 不了",
					value: 5
				},
				{
					name: " 别人",
					value: 5
				},
				{
					name: " 死机",
					value: 5
				},
				{
					name: " 耗电",
					value: 5
				},
				{
					name: " 一直",
					value: 5
				},
				{
					name: " 像素",
					value: 5
				},
				{
					name: " 第一次",
					value: 5
				},
				{
					name: " 广告",
					value: 5
				},
				{
					name: " 买个",
					value: 5
				},
				{
					name: " 黑屏",
					value: 5
				},
				{
					name: " 为什么",
					value: 4
				},
				{
					name: " 猴王",
					value: 4
				},
				{
					name: " 视频",
					value: 4
				},
				{
					name: " 体验",
					value: 4
				},
				{
					name: " 好评",
					value: 4
				},
				{
					name: " 闪屏",
					value: 4
				},
				{
					name: " 价格",
					value: 4
				},
				{
					name: " 饥饿",
					value: 4
				},
				{
					name: " 营销",
					value: 4
				}
            ]
        },
        vsersion:'1.0.0'

    }
]