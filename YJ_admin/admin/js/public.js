// 导航菜单的间隔像素
var menuCell = 1

layui.use('element', function () {
  var element = layui.element
  var $ = layui.jquery

  data = [
    {
      name: '文档',
      url: 'pages/wendang.html',
      icon: 'layui-icon-snowflake',
      childMenus: null,
    },
    {
      name: '官方页面',
      url: 'www.sys.com',
      icon: 'layui-icon-snowflake',
      childMenus: [
        {
          name: '页面1',
          url: 'https://www.layui.com/admin/std/dist/views/home/homepage2.html',
          icon: 'layui-icon-snowflake',
          childMenus: null,
        },
        {
          name: '页面2',
          url: 'https://www.layui.com/admin/std/dist/views/home/homepage2.html',
          icon: 'layui-icon-snowflake',
          childMenus: null,
        },
      ],
    },
    {
      name: '一级导航',
      url: 'www.manager.com',
      icon: 'layui-icon-snowflake',
      childMenus: [
        {
          name: '二级导航',
          url: 'pages/table.html',
          icon: 'layui-icon-snowflake',
          childMenus: [
            {
              name: '三级导航',
              url: 'pages/table.html',
              icon: 'layui-icon-snowflake',
              childMenus: [
                {
                  name: '4页面',
                  url: 'pages/table.html',
                  icon: 'layui-icon-snowflake',
                  childMenus: [
                    {
                      name: '5页面',
                      url: 'pages/table.html',
                      icon: 'layui-icon-snowflake',
                      childMenus: null,
                    },
                  ],
                },
              ],
            },
            {
              name: 'table页面',
              url: 'pages/table.html',
              icon: 'layui-icon-snowflake',
              childMenus: null,
            },
          ],
        },
      ],
    },
    {
      name: '一级导航',
      url: 'www.manager.com',
      icon: 'layui-icon-snowflake',
      childMenus: [
        {
          name: '二级导航',
          url: 'pages/table.html',
          icon: 'layui-icon-snowflake',
          childMenus: [
            {
              name: '三级导航',
              url: 'pages/table.html',
              icon: 'layui-icon-snowflake',
              childMenus: [
                {
                  name: '4页面',
                  url: 'pages/table.html',
                  icon: 'layui-icon-snowflake',
                  childMenus: [
                    {
                      name: '5页面',
                      url: 'pages/table.html',
                      icon: 'layui-icon-snowflake',
                      childMenus: null,
                    },
                  ],
                },
              ],
            },
            {
              name: 'table页面',
              url: 'pages/table.html',
              icon: 'layui-icon-snowflake',
              childMenus: null,
            },
          ],
        },
      ],
    },
    {
      name: '一级导航',
      url: 'www.manager.com',
      icon: 'layui-icon-snowflake',
      childMenus: [
        {
          name: '二级导航',
          url: 'pages/table.html',
          icon: 'layui-icon-snowflake',
          childMenus: [
            {
              name: '三级导航',
              url: 'pages/table.html',
              icon: 'layui-icon-snowflake',
              childMenus: [
                {
                  name: '4页面',
                  url: 'pages/table.html',
                  icon: 'layui-icon-snowflake',
                  childMenus: [
                    {
                      name: '5页面',
                      url: 'pages/table.html',
                      icon: 'www.baidu.com',
                      childMenus: null,
                    },
                  ],
                },
              ],
            },
            {
              name: 'table页面',
              url: 'http://www.layui.com',
              icon: 'layui-icon-snowflake',
              childMenus: null,
            },
          ],
        },
      ],
    },
  ]
  console.log('data: ' + data)
  //      data = JSON.parse(data);
  var liStr = ''
  // 遍历生成主菜单
  for (var i = 0; i < data.length; i++) {
    //console.log("--> "+JSON.stringify(data[i]));
    // 判断是否存在子菜单
    if (data[i].childMenus != null && data[i].childMenus.length > 0) {
      console.log('--> ' + JSON.stringify(data[i].childMenus))
      liStr +=
        '<li class="layui-nav-item"><a class="" href="javascript:;"><i class=\'layui-icon ' +
        data[i].icon +
        "'></i> " +
        data[i].name +
        '</a>\n' +
        '<dl class="layui-nav-child">\n'
      // 遍历获取子菜单
      for (var k = 0; k < data[i].childMenus.length; k++) {
        liStr += getChildMenu(data[i].childMenus[k], 0)
      }
      liStr += '</dl></li>'
    } else {
      liStr +=
        '<li class="layui-nav-item"><a class="" href="javascript:;" data-url="' +
        data[i].url +
        '"><i class=\'layui-icon ' +
        data[i].icon +
        "'></i> " +
        data[i].name +
        '</a></li>'
    }
  }
  console.log('>>>> ' + liStr)
  $('#menu').html('<ul class="layui-nav layui-nav-tree"  lay-filter="test">\n' + liStr + '</ul>')
  element.init()

  // 页面切换
  $(document).on('click', '#menu a', function () {
    var thisPage = $(this).attr('data-url')
    if (typeof thisPage != 'undefined') {
      if ($('.layui-body iframe').attr('src') == thisPage) return
      $('.layui-body iframe').attr('src', thisPage)

      $('#dy_ifrem').attr('src', thisPage)
    }
  })
})

// 递归生成子菜单
function getChildMenu(subMenu, num) {
  console.log('num: ' + num)
  num++
  var subStr = ''
  if (subMenu.childMenus != null && subMenu.childMenus.length > 0) {
    subStr +=
      '<dd><ul><li class="layui-nav-item" ><a style="text-indent: ' +
      num * menuCell +
      'em" class="" href="javascript:;"><i class=\'layui-icon ' +
      subMenu.icon +
      "'></i> " +
      subMenu.name +
      '</a>' +
      '<dl class="layui-nav-child">\n'
    for (var j = 0; j < subMenu.childMenus.length; j++) {
      subStr += getChildMenu(subMenu.childMenus[j], num)
    }
    subStr += '</dl></li></ul></dd>'
  } else {
    subStr +=
      '<dd><a style="text-indent:' +
      num * menuCell +
      'em" href="javascript:;" data-url="' +
      subMenu.url +
      '"><i class=\'layui-icon ' +
      subMenu.icon +
      "'></i> " +
      subMenu.name +
      '</a></dd>'
  }
  return subStr
}
