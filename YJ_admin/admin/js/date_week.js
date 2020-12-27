//  获取当前年月日'
var curTime = new Date(),
  curYear = curTime.getFullYear(),
  curMonth = curTime.getMonth(),
  curDate = curTime.getDate()
var clickDate = []
//  赋值默认当月的显示
$('.tody').html(curDate)
$('.today_span').html(curYear + '-' + (curMonth * 1 + 1))

//  指定12个得数组
var MonthArry = [31, 28 + is_leap(curMonth), 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]

//   判断是否是闰年
function is_leap(year) {
  return year % 100 == 0 ? (res = year % 400 == 0 ? 1 : 0) : (res = year % 4 == 0 ? 1 : 0)
}
function showDate(year, month, today) {
  var thisTime = new Date(year, month, 1) //获取每个月的第一天
  var firstday = thisTime.getDay() //当月第一天星期几
  var tr_str = Math.ceil((MonthArry[month] + firstday) / 7) //表格所需要行数
  var dateArr = []
  for (i = 0; i < tr_str; i++) {
    for (k = 0; k < 7; k++) {
      var idx = i * 7 + k //表格单元的自然序号
      var date_str = idx - firstday + 1 //计算日期
      date_str <= 0 || date_str > MonthArry[month] ? (date_str = ' ') : (date_str = idx - firstday + 1)

      dateArr.push({
        year: year,
        month: month,
        tdody: date_str,
        noli: calendar.solar2lunar(year, month, date_str),
        shark: 0,
      })
    }
  }
  console.log(dateArr)
  rederDate(dateArr)
}
showDate(curYear, curMonth, curDate)
//  显示日历
function rederDate(dateArr) {
  day_item.innerHTML = ''
  var str = ''
  for (i = 0; i < dateArr.length; i++) {
    var shark = dateArr[i].shark == 1 ? `<div class="dayshark">.</div>` : ''
    var tody = dateArr[i].tdody == curDate && dateArr[i].month == curMonth ? 'today' : ''
    var nullDom = dateArr[i].tdody == ' ' ? 'nullDom' : ''
    str += `   
     <div class="day_list" date="${dateArr[i].year}-${dateArr[i].month * 1 + 1}-${dateArr[i].tdody}" noli="${
      dateArr[i].noli.IMonthCn
    }${dateArr[i].noli.IDayCn}"
    nolicons="${dateArr[i].noli.gzYear}年${dateArr[i].noli.gzMonth}月${dateArr[i].noli.gzDay}日"
    
    >
        <div class="day_center ${tody}  ${nullDom}">
          <div class="dayone">${dateArr[i].tdody}</div>
          <div class="daytwo">${dateArr[i].noli.IDayCn}</div>
         ${shark}
        </div>
      </div>`
  }
  // console.log(str)
  day_item.innerHTML = str
  $('.day_list').click(function () {
    $('.day_list').find('.day_center ').removeClass('today')
    $(this).find('.day_center ').addClass('today')
    var arr = $(this).attr('date').split('-')
    var year = arr[0]
    var month = arr[1]
    var today = arr[2]
    //  发送请求数渲染右边
    $('.tody').html(today)
    clickDate = $(this).attr('date').split('-')
    // console.log(clickDate)
  })
  $('.day_list').hover(function () {
    var y = $(this).attr('date')
    var noli = $(this).attr('noli')
    var nolicons = $(this).attr('nolicons')
    var tips = `
    <div class="tips">
    <p>${y}</p>
    <p>${noli}</p>
    <p>${nolicons}</p>
  </div>`
    var that = $(this)
    layui.use('layer', function () {
      var layer = layui.layer
      layer.tips(tips, that, {
        tips: [2, '#2c6ce1'],
      })
    })
  })
}
//重渲染日历
function reszeDate(year, month, tody) {
  //  接受传入的年月日
  is_leap(year) ? (MonthArry[1] = 29) : (MonthArry[1] = 28)

  showDate(year, month, tody)
}
//  点击左右切换
$('.icon_left').click(function () {
  var year = $('.today_span').html().substring(0, 4)
  var month = $('.today_span').html().substring(5)
  var tody = $('.tody').html()
  month--
  if (month < 1) {
    month = 12
    // console.log(year)
    year -= 1
  }
  // console.log(year)
  $('.tody').html(curDate)
  $('.today_span').html(year + '-' + month)
  //重渲染日历
  reszeDate(year, month - 1, tody)
})
$('.icon_right').click(function () {
  var year = $('.today_span').html().substring(0, 4)
  var month = $('.today_span').html().substring(5)
  var tody = $('.tody').html()
  month++
  if (month > 12) {
    month = 1
    // console.log(year)
    year = year * 1 + 1
  }
  // console.log(year)
  $('.tody').html(curDate)
  $('.today_span').html(year + '-' + month)
  //重渲染日历
  reszeDate(year, month - 1, tody)
})
//  点击今天
$('.current').click(function () {
  showDate(curYear, curMonth, curDate)
  //  赋值默认当月的显示
  $('.tody').html(curDate)
  $('.today_span').html(curYear + '-' + (curMonth * 1 + 1))
})
console.log('-------------', curYear, curMonth, curDate)

console.log(calendar.solar2lunar(curYear, 12, 15))

layui.use('layer', function () {
  var layer = layui.layer
  layer.tips('默认就是向右的', '#id或者.class')
})
