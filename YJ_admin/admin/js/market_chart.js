// 性别占比
var gender_chart = echarts.init(document.getElementById('gender_chart'))
gender_chart_option = {
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'shadow',
    // },
  },
  legend: {
    itemWidth: 10,
    itemHeight: 10,
    right: 20,
    data: [
      {
        name: '年投标数',
        icon: 'circle',
      },
      {
        name: '年中标数',
        icon: 'circle',
      },
    ],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true,
  },

  xAxis: {
    type: 'category',
    boundaryGap: [0, 0.01],
    data: ['2016', '2017', '2018', '2019', '2020'],
  },
  yAxis: {
    type: 'value',
    nameLocation: 'center',
    nameTextStyle: {
      fontWeight: 'normal',

      fontSize: 14,
    },
    left: 'center',
  },
  // toolbox: {
  //   show: true,
  //   feature: {
  //     mark: {
  //       show: true,
  //     },
  //     dataView: {
  //       show: true,
  //       readOnly: false,
  //     },
  //     magicType: {
  //       show: true,
  //       type: ['pie', 'funnel'],
  //       option: {
  //         funnel: {
  //           x: '25%',
  //           width: '50%',
  //           funnelAlign: 'center',
  //           max: 1548,
  //         },
  //       },
  //     },
  //     restore: {
  //       show: true,
  //     },
  //     saveAsImage: {
  //       show: true,
  //     },
  //   },
  // },
  series: [
    {
      name: '年投标数',
      type: 'bar',
      data: [325, 2438, 3100, 1294, 1401],
      itemStyle: {
        barBorderRadius: 10, // 统一设置四个角的圆角大小
        normal: {
          barBorderRadius: 10, // 统一设置四个角的圆角大小
          color: '#03dffc',
          lineStyle: {
            color: '#f7cb4a',
          },
        },
      },
    },
    {
      name: '年中标数',
      type: 'bar',
      data: [625, 2338, 3100, 1194, 1341],
      itemStyle: {
        barBorderRadius: 10, // 统一设置四个角的圆角大小
        normal: {
          barBorderRadius: 10, // 统一设置四个角的圆角大小
          color: '#2c6ce1',

          lineStyle: {
            color: '#58cb97',
          },
        },
      },
    },
  ],
  barMaxWidth: 20, //最大宽度
}
gender_chart.setOption(gender_chart_option)

//  工程共公司投标
var age_chart = echarts.init(document.getElementById('age_chart'))
age_chart_option = {
  legend: {
    data: ['中标', '投标'],
    right: 20,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'category',
    data: ['第一工程公司', '第二工程', '第三工程', '第四工程公司', '第五工程公司', '第六工程公司', '第七工程公司'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true,
  },
  yAxis: {
    type: 'value',
    nameLocation: 'center',
    nameTextStyle: {
      fontWeight: 'normal',
      fontSize: 14,
    },
    left: 'center',
  },
  series: [
    {
      data: [80, 1000, 80, 1000, 80, 80, 80, 0, 80, 8, 80, 80],
      name: '中标',
      type: 'line',
      // smooth: true,  //  食肉线条圆润
      symbolSize: 10,
      itemStyle: {
        normal: {
          color: '#ffb668',

          lineStyle: {
            color: '#ffb668',
          },
        },
      },
    },
    {
      data: [780, 5000, 80, 80, 50, 80, 900, 0, 850, 8, 80, 20],
      name: '投标',
      type: 'line',
      symbolSize: 10,
      itemStyle: {
        normal: {
          width: 5,
          color: '#1e5eff',
          lineStyle: {
            color: '#1e5eff',
          },
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
