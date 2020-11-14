//  学历统计图xueli_chart
var xueli_chart = echarts.init(document.getElementById('xueli_chart'))
var salvProName = ['全日制本科', '全日制大专', '成人本科', '高中', '全日制硕士', '在职硕士', '中专', '博士', '初中']
var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67]
var salvProMax = [] //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
  salvProMax.push(salvProValue[0])
}
xueli_chart_option = {
  grid: {
    left: '2%',
    right: '2%',
    bottom: '2%',
    top: '2%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
    formatter: function (params) {
      return params[0].name + ' : ' + params[0].value
    },
  },
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#666666',
          fontSize: 12,
          width: '20%',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: salvProName,
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#666666',
          fontSize: 12,
        },
      },
      data: salvProValue,
    },
  ],
  series: [
    {
      name: '值',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          barBorderRadius: 10,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#3094ff',
            },
            {
              offset: 0.5,
              color: '#7340ff',
            },
            {
              offset: 1,
              color: '#cf179c',
            },
          ]),
        },
      },
      barWidth: 10,
      data: salvProValue,
    },
    {
      name: '背景',
      type: 'bar',
      barWidth: 10,
      barGap: '-100%',
      data: salvProMax,
      itemStyle: {
        normal: {
          color: '#ccc',
          barBorderRadius: 30,
        },
      },
    },
  ],
}
xueli_chart.setOption(xueli_chart_option)
// 性别占比
var gender_chart = echarts.init(document.getElementById('gender_chart'))
gender_chart_option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
    backgroundColor: '#2c6ce1',
  },
  legend: {
    orient: 'visualMap',
    top: 20,
    right: 10,
    itemWidth: 15,
    itemHeight: 15,
    data: [
      {
        name: '男性',
        icon: 'circle',
      },
      {
        name: '女性',
        icon: 'circle',
      },
    ],
  },
  series: [
    {
      name: '性别结构',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },

      data: [
        {
          value: 200,
          name: '男性',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#13c1ff' },
                { offset: 0.4, color: '#14beff' },
                { offset: 0.8, color: '#269dff' },
                { offset: 1, color: '#3680ff' },
              ],
              false
            ),
          },
        },
        {
          value: 200,
          name: '女性',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#f772d1' },
                { offset: 0.4, color: '#df72e2' },
                { offset: 0.8, color: '#d272eb' },
                { offset: 1, color: '#ca72f0' },
              ],
              false
            ),
          },
        },
      ],
    },
  ],
}
gender_chart.setOption(gender_chart_option)

// 性别占比
var age_chart = echarts.init(document.getElementById('age_chart'))
age_chart_option = {
  title: {
    text: '(人)',
    textStyle: {
      fontSize: 14,
      color: '  #666 ',
      fontWeight: 'normal',
    },
    padding: [20, 0, 0, 15],
  },
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: '', // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: function (params) {
      var relVal = params[0].name
      for (var i = 0, l = params.length; i < l; i++) {
        relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + '人'
      }
      return relVal
    },
  },
  grid: {
    left: '4%',
    right: '4%',
    bottom: '10%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['20-30', '30-40', '40-50', '50-60'],
      axisTick: {
        alignWithLabel: true,
      },

      axisLine: {
        lineStyle: {
          type: 'solid',
          color: '#d9d9d9', //左边线的颜色
          width: '2', //坐标线的宽度
        },
      },
      axisLabel: {
        textStyle: {
          //改变刻度字体样式
          color: '#666',
          fontSize: 14,
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      formatter: '{value} (人)',
      axisLabel: {
        textStyle: {
          //改变刻度字体样式
          color: '#666',
        },
      },
      axisLine: {
        show: false, //y轴线消失
      },
      axisTick: {
        show: false, //y轴坐标点消失
      },
    },
  ],
  series: [
    {
      name: '年龄',
      type: 'bar',
      barWidth: '20',
      data: [400, 52, 200, 334],
      itemStyle: {
        //柱形图圆角，鼠标移上去效果
        emphasis: {
          barBorderRadius: [10, 10, 10, 10],
        },

        normal: {
          //柱形图圆角，初始化效果
          barBorderRadius: [10, 10, 10, 10],
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            0,
            [
              {
                offset: 0,
                color: '#7e88f3', // 100% 处的颜色
              },
              {
                offset: 0.3,
                color: '#7e98f3', // 60% 处的颜色
              },
              {
                offset: 0.8,

                color: '#7eaaf3', // 60% 处的颜色
              },
              {
                offset: 1,

                color: '#7ac1f3 ', // 0% 处的颜色
              },
            ],
            false
          ),
        },
      },
    },
  ],
}

age_chart.setOption(age_chart_option)

$(window).resize(function () {
  gender_chart.resize()
  age_chart.resize()
  xueli_chart.resize()
})
