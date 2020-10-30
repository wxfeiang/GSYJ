var gender_chart = echarts.init(document.getElementById('gender_chart'))
gender_chart_option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },

  legend: {
    left: 'center', //图例距离左的距离
    bottom: '10',
  },

  calculable: true,
  series: [
    {
      name: '合同管理',
      type: 'pie',
      radius: ['10%', '45%'],
      center: ['50%', '50%'],
      roseType: 'area',
      data: [
        {
          value: 100,
          name: '劳务合同',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#488cf7' },
                { offset: 1, color: '#447dd8' },
              ],
              false
            ),
          },
        },
        {
          value: 50,
          name: '材料合同',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#38cafb' },
                { offset: 1, color: '#38cafc' },
              ],
              false
            ),
          },
        },
        {
          value: 15,
          name: '分包合同',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#49a2e5' },
                { offset: 1, color: '#4caff9' },
              ],
              false
            ),
          },
        },
        {
          value: 30,
          name: '机械合同',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#44baab' },
                { offset: 1, color: '#4adfcb' },
              ],
              false
            ),
          },
        },
        {
          value: 77,
          name: '其他合同',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#0c60c3' },
                { offset: 1, color: '#056ce5' },
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
  // title: {
  //   // text: '(人)',
  //   textStyle: {
  //     fontSize: 14,
  //     color: '  #666 ',
  //     fontWeight: 'normal',
  //   },
  //   padding: [20, 0, 0, 15],
  // },
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
        relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + '元'
      }
      return relVal
    },
  },
  grid: {
    left: '4%',
    right: '4%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '第一工程公司',
        '第二工程公司',
        '第三工程公司',
        '第四工程公司',
        '第五工程公司',
        '第六工程公司',
        '第七工程公司',
        '第八工程公司',
        '第十工程公司',
        '第一安装公司',
        '第二安装公司',
        '新疆公司',
        '阜外公司',
        '无锡公司',
      ],
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
        formatter: function (value) {
          return value.split('').join('\n')
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      formatter: '{value} (元)', //  单位
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
      name: '公司产值',
      type: 'bar',
      barWidth: '20',
      data: [400, 52, 200, 33, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
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
})
