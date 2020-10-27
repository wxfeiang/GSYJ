// 性别占比
var gender_chart = echarts.init(document.getElementById('gender_chart'))
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'visualMap',
    top: 20,
    right: 10,
    itemWidth: 10,
    itemHeight: 10,
    data: [
      {
        name: '男',
        icon: 'circle',
      },
      {
        name: '女',
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
          value: 835,
          name: '男',
        },
        {
          value: 310,
          name: '女',
        },
      ],
      color: ['#5182e4', '#9bcc66', '#37b27e', '#f7cb4a', '#f89351'],
    },
  ],
}
gender_chart.setOption(option)

$(window).resize(function () {
  gender_chart.resize()
})
