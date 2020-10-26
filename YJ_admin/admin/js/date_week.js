//   判断是否是闰年
function is_leap(year) {
  return year % 100 == 0 ? (res = year % 400 == 0 ? 1 : 0) : (res = year % 4 == 0 ? 1 : 0)
}
//  指定12个得数组
m_days = new Array(31, 28 + is_leap(ynow), 31, 30, 31, 31, 30, 31, 30, 31, 30, 31)
//   计算每一月得开始第一天为星期几
n1str = new Date(2008, 3, 1)
firstday = n1str.getDay() // 返回星期得下标
//
