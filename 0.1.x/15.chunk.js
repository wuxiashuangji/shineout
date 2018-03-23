webpackJsonp([15],{202:function(e,n,t){"use strict";var o=t(0),a=t.n(o),r=(t(1),t(7)),s=t.n(r),c=t(6),i=t(11);function m(e){var n=e.children,t=e.prefix,o=e.type,r=e.name,c=e.fontFamily,m=e.fontSize,f=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(e,["children","prefix","type","name","fontFamily","fontSize"]),l=s()(Object(i.h)("_",o),e.className,t+"-"+r),u=Object.assign({},{fontFamily:c,fontSize:m},e.style);return a.a.createElement("i",Object.assign({},f,{className:l,style:u}),n)}m.defaultProps=Object.assign({},c.a,{prefix:"icon",fontFamily:"iconfont",name:"",type:"default"});var f=m;n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iconfont",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"icon";if(e||console.warning('you may add a "url" to create a icon '),!Array.from(document.getElementsByTagName("link")).find(function(n){return n.getAttribute("href")===e})){var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",e),document.head.appendChild(o)}return function(e){return a.a.createElement(f,Object.assign({fontFamily:n,prefix:t},e))}}},424:function(e,n){e.exports="# Icon *图标*\n组件库没有内置图标集，而是提供了一个函数生成一个新的图标组件。可以在一个项目内创建多个不同名称的图标组件。\n\n<example />\n\n## API\n\n### Icon *function(url, fontFamily, prefix):ReactClass*\n函数，返回一个新的组件，一个项目内可以创建多个，但是 fontFamily 不能相同\n\n| 参数 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| url | string | 必填 | 图标css文件地址，使用远程地址，不需要引入到项目中 |\n| fontFamily | string | 'iconfont' | font-family 需要和引入的css文件内的font-family一致 |\n| prefix | string | 'icon' | 类名前缀 |\n\n### CreatedIcon *Icon函数创建的图标组件*\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | string | 无 | 图标 unicode 编码，和 name 二选一 |\n| name | string | '' | 图标类名（去除前缀的部分），值参照具体使用的图标库 |\n| fontSize | string | 无 | 图标大小，和 style.fontSize 相同 |\n| style | object | 无 | 扩展样式，可以用来设定特定的大小和颜色等 |\n| type | string | 'default' | 内置颜色，可选值为 \\['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger'] |"},425:function(e,n){e.exports=""},426:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(202),a=t(0),r=t.n(a),s=Object(o.a)("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa"),c={marginRight:20};n.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(s,{style:c,name:"home"}),r.a.createElement(s,{style:c,name:"info",type:"info"}),r.a.createElement(s,{style:c,name:"check",type:"success"}),r.a.createElement(s,{style:c,name:"close",type:"danger"}))}},427:function(e,n){e.exports='/**\n * cn - 使用 FontAwesome\n * en - Use FontAwesome\n */\nimport React, { Fragment } from \'react\'\nimport { Icon } from \'shineout\'\n\nconst url = \'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css\'\nconst FontAwesome = Icon(url, \'FontAwesome\', \'fa\')\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <Fragment>\n      <FontAwesome style={margin} name="home" />\n      <FontAwesome style={margin} name="info" type="info" />\n      <FontAwesome style={margin} name="check" type="success" />\n      <FontAwesome style={margin} name="close" type="danger" />\n    </Fragment>\n  )\n}\n'},428:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(202),a=t(0),r=t.n(a),s=Object(o.a)("//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css"),c={marginRight:20};n.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(s,{style:c},""),r.a.createElement(s,{style:c,name:"info",type:"info"}),r.a.createElement(s,{style:c,name:"right",type:"success"}),r.a.createElement(s,{style:c,name:"error",type:"danger"}))}},429:function(e,n){e.exports='/**\n * cn - 使用 Iconfont \\n 可以在 iconfont.cn 定制一个图标\n * en - Use Iconfont\n */\nimport React, { Fragment } from \'react\'\nimport { Icon } from \'shineout\'\n\nconst Iconfont = Icon(\'//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css\')\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <Fragment>\n      <Iconfont style={margin}>&#xe64e;</Iconfont>\n      <Iconfont style={margin} name="info" type="info" />\n      <Iconfont style={margin} name="right" type="success" />\n      <Iconfont style={margin} name="error" type="danger" />\n    </Fragment>\n  )\n}\n'},430:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(202),a=t(0),r=t.n(a),s=Object(o.a)("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa"),c={marginRight:20};n.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(s,{style:c,name:"home"}),r.a.createElement(s,{style:c,name:"home",type:"info",fontSize:18}),r.a.createElement(s,{style:c,name:"home",type:"success",fontSize:"24px"}),r.a.createElement(s,{style:{fontSize:30,color:"#f5222d"},name:"home"}))}},431:function(e,n){e.exports='/**\n * cn - 尺寸 \\n 提供了一个fontSize属性设置图标大小，效果和 style.fontSize 相同\n * en - Font Size\n */\nimport React, { Fragment } from \'react\'\nimport { Icon } from \'shineout\'\n\nconst url = \'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css\'\nconst FontAwesome = Icon(url, \'FontAwesome\', \'fa\')\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <Fragment>\n      <FontAwesome style={margin} name="home" />\n      <FontAwesome style={margin} name="home" type="info" fontSize={18} />\n      <FontAwesome style={margin} name="home" type="success" fontSize="24px" />\n      <FontAwesome style={{ fontSize: 30, color: \'#f5222d\' }} name="home" />\n    </Fragment>\n  )\n}\n'},512:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(30),s=t(29),c=t(16),i=t(424),m=t.n(i),f=t(425),l=t.n(f),u=Object(c.a)(m.a,l.a),y=[{title:Object(c.a)("使用 FontAwesome","Use FontAwesome"),component:t(426).default,rawText:t(427)},{title:Object(c.a)("使用 Iconfont \n 可以在 iconfont.cn 定制一个图标","Use Iconfont"),component:t(428).default,rawText:t(429)},{title:Object(c.a)("尺寸 \n 提供了一个fontSize属性设置图标大小，效果和 style.fontSize 相同","Font Size"),component:t(430).default,rawText:t(431)}];n.default=Object(r.a)(function(e){return a.a.createElement(s.b,Object.assign({},e,{codes:void 0,source:u,examples:y}))})}});