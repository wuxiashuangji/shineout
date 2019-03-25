(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[27],{214:function(e,t,n){"use strict";var c=n(29),u=n(0),s=n.n(u),p=n(220),m=n(72),d=n(25);t.a=function(i){return function(){var e=Object(u.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],n=Object(u.useState)([]),l=Object(c.a)(n,1)[0],o=Object(u.useCallback)(function(e){e.forEach(function(e){l.push(e)})},[]);Object(u.useEffect)(function(){var e=function(){var n=document.documentElement.scrollTop,e=l.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return s.a.createElement("div",{className:Object(d.f)("_")},s.a.createElement(i,{onHeadingSetted:o}),s.a.createElement(p.a,{className:Object(d.f)("sticky"),top:50},s.a.createElement("div",{className:Object(d.f)("nav")},l.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return s.a.createElement("a",{key:t,className:Object(d.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===m.a.location.search.indexOf("?example="))m.a.push("".concat(m.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},215:function(e,t,n){"use strict";var T=n(0),G=n.n(T),s=n(15),P=n(29),a=n(221),p=n.n(a),m=n(37),S=n(25),d=n(20),r=n(14),o=n.n(r),l=n(222),i=n.n(l),N=(n(223),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,l=Object(T.useRef)(null);return Object(T.useEffect)(function(){var e=l.current;i.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),G.a.createElement("pre",{ref:l,className:o()(n||"lang-jsx",Object(S.a)("pre"))},G.a.createElement("code",null,r))}),z=n(76),c=n(67),u=n(4),f=n(5),h=n(8),b=n(2),y=n(7),v=n(19),g=n(216),B=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(h.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(y.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(g.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(g.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:G.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(v.b),R=n(75),C=n(72),A=G.a.createElement("div",{className:Object(S.a)("placeholder")},G.a.createElement(c.a,null));function E(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,l=e.title,o=Object(T.useRef)(null),i=Object(T.useState)(!1),c=Object(P.a)(i,2),u=c[0],s=c[1],p=Object(T.useState)(),m=Object(P.a)(p,2),d=m[0],f=m[1],h=Object(T.useState)(),b=Object(P.a)(h,1)[0],y=function e(t,n,a){o.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(T.useEffect)(function(){if(o.current)if(u)o.current.style.height="".concat(d,"px");else{var e=d%15;0<e&&y(e,1,b),y((d-e)/15,15,b)}},[u]);var v=function(e){s(!u),b=e},g=function(e){return G.a.createElement("a",{href:"javascript:;",className:Object(S.a)("toggle"),onClick:v.bind(null,e)},G.a.createElement(R.a,{name:u?"code-close":"code"}))},E=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),I=C.a.location.search,w="?example=";if(0===I.indexOf(w)&&(I=I.replace(w,""),a.indexOf(I)<0))return null;var x=l.split("\n"),j=Object(z.a)(x),O=j[0],k=j.slice(1);return O&&(O=O.trim()),G.a.createElement(T.Fragment,null,O&&G.a.createElement("h3",{key:"0",id:n},O),G.a.createElement(B,{placeholder:A},G.a.createElement("div",{className:Object(S.a)("_",u&&"showcode")},G.a.createElement("div",{className:Object(S.a)("body")},Object(T.createElement)(t)),0<l.length&&G.a.createElement("div",{className:Object(S.a)("desc")},k.map(function(e,t){return G.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),g(!1)),G.a.createElement("div",{ref:o,className:Object(S.a)("code")},G.a.createElement(N,{onHighLight:function(e){f(e)},onClose:v,value:E}),g(!0)))))}E.defaultProps={rawText:""};var I=function(e){var t=e.children,n=Object(T.useState)(!1),a=Object(P.a)(n,2),r=a[0],l=a[1],o=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),i=r?"pre":"div";return G.a.createElement("div",{onClick:function(){l(!r)},className:Object(S.e)("console")},G.a.createElement(i,null,o))};I.defaultProps={children:[]};var w=I;function x(e){var t=e.children;return G.a.createElement("table",{className:"doc-api-table"},t)}x.defaultProps={};var j=x,O=/^<code name="([\w|-]+)" /,k=/^<example name="([\w|-]+)"/;function F(e){var t=e.onHeadingSetted,l=e.codes,o=e.examples,n=e.source,a=Object(T.useState)([]),r=Object(P.a)(a,1)[0],i=Object(T.useState)({}),c=Object(P.a)(i,1)[0];Object(T.useEffect)(function(){t&&t(r)},[]);var u=function(e){r.push(e)};return r=[],G.a.createElement(p.a,{className:Object(S.e)("_"),source:n,renderers:{code:N,heading:function(e){var t=e.level,n=e.children,a="".concat(t,"-").concat(n[0]),r="h".concat(t);if("object"==typeof n[0])return G.a.createElement(r,null,n);if(!c[a]){var l="heading-".concat(Object(m.b)());2!==t&&3!==t||u({id:l,level:t,children:n}),c[a]=G.a.createElement(r,{id:l},n)}return c[a]},html:function(e){if("<example />"===e.value)return function(){if(c.examples)return c.examples;if(!o)return G.a.createElement("div",null);var e=Object(d.b)("示例","Example"),t="heading-".concat(Object(m.b)());return u({id:t,level:2,children:[e]}),c.examples=[G.a.createElement("h2",{key:"h",id:t},e)].concat(Object(s.a)(o.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(P.a)(a,1)[0];return u({id:n,level:3,children:[r]}),G.a.createElement(E,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),c.examples}();var t=e.value.match(k);if(t)return function(t){var e="example-".concat(t);if(!c[e]){var n=(o||[]).find(function(e){return e.name===t});c[e]=n?G.a.createElement(E,n):null}return c[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return G.a.createElement("br",null);var n,a,r=e.value.match(O);return r?(n=r[1],(a=l[n])?[G.a.createElement(N,{key:"cb",value:a.text})].concat(Object(s.a)(a.log.map(function(e,t){return G.a.createElement(w,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:j,link:function(e){var t=e.href.indexOf(!1)?"_blank":void 0;return G.a.createElement("a",{href:e.href,target:t},e.children)}}})}F.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var D=n(74),V=n(214);n.d(t,"a",function(){return L});var H,W=((H=function(e){var t=Object(T.useState)(e.source),n=Object(P.a)(t,2),a=n[0],r=n[1];return Object(T.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?G.a.createElement(F,Object.assign({},e,{source:a})):G.a.createElement(D.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(T.memo)(H));t.b=W;function L(t){return Object(V.a)(function(e){return G.a.createElement(W,Object.assign({},e,{loader:t}))})}},216:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return p});var a=n(218),r=n(37),l=n(64),o={},i=null,c=!1,u=l.b.height;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>u){var n=Object(r.b)();return o[n]=e,n}return e.render(),null}function p(e){e&&delete o[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){c||(c=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>u||(delete o[e],a())}),c=!1),i=null},80)},a.a)},826:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(214),o=n(215),i=n(20),c=n(827),u=n.n(c),s=n(828),p=n.n(s),m=Object(i.b)(u.a,p.a),d=[{name:"1-base",title:Object(i.b)("基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex","Base \n Input usually needs to be used with other components, so the default width is 100% and the default display is block. \n If the style.width is set, the default display is inline-flex."),component:n(829).default,rawText:n(830)},{name:"2-size",title:Object(i.b)("大小 \n 提供了三种尺寸的输入框，small、default、large","Size \n There are three size of input, small, default, large."),component:n(831).default,rawText:n(832)},{name:"3-number",title:Object(i.b)("数字 \n type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数","Number \n When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property"),component:n(833).default,rawText:n(834)},{name:"4-number",title:Object(i.b)(" \n Input.Number 组件，可以通过鼠标和上下键辅助输入"," \n Input.Number component can be assisted by mouse and up and down keyboard."),component:n(835).default,rawText:n(836)},{name:"5-group",title:Object(i.b)("组合 \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。","Group \n The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color."),component:n(837).default,rawText:n(838)},{name:"6-tip",title:Object(i.b)("提示文字 \n 在 input 上设置的 tip 在 focus 时弹出","Tip \n The tip set on input pops up when it is focused."),component:n(839).default,rawText:n(840)},{name:"7-validate",title:Object(i.b)("校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。","Validate \n When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location. \n If the popover property is not set, no error message will pop up. \n If input is invalid, the message will not be hidden."),component:n(841).default,rawText:n(842)},{name:"8-disabled",title:Object(i.b)("禁用 \n 设置 disabled 属性禁用组件","Disabled \n Set the disabled property to disable the component."),component:n(843).default,rawText:n(844)},{name:"9-password",title:Object(i.b)("密码 \n Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。","Password \n Input.Password is a mock input of type 'password', used for disable Chrome autofill."),component:n(845).default,rawText:n(846)}];t.default=Object(l.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:m,examples:d}))})},827:function(e,t){e.exports="# Input *输入框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| onEnterPress | function(value) | | 回车键回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string \\| ReactElement | | 提示信息 |\n| trim | bool | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| type | string | | 同原生 input 标签的 type |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n\n### Input.Number\n\n基本 API 和上表相同，特定的 API 如下：\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| max | number | 无 | 最大值 |\n| min | number | 无 | 最小值 |\n| step | number | 1 | 改变数字跨度，可为小数 |\n"},828:function(e,t){e.exports="# Input\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | | Default value |\n| delay | number | 400 | User input triggers the onChange and to check interval, unit: ms.|\n| name | string | none | The name of Form which access data |\n| onChange | function(d) | | The callback function when the value is changing |\n| onEnterPress | function(value) | | The callback function for enter key |\n| placeholder | string | | Same as the native input tag |\n| popover | string | | The position where the text pop up, options: \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | options: \\['large', 'default', 'small'] |\n| style | object | - | Container element style |\n| tip | string \\| ReactElement | | Prompt information |\n| trim | bool | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| type | string | | Same as the type of the native input tag |\n| value | string \\| number | | The defaultValue and value can be set at the same time and defaultValue will be overridden by value<br />In the Form, the value will be taken over by the form and the value will lose efficacy. |\n\n### Input.Number\n\nThe basic API is the same as the above table, and the specific API is as follows:\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| max | number | - | The maximum value |\n| min | number | - | The minimum value|\n| step | number | 1 | Change the digital span. It can be decimal. |\n"},829:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211);t.default=function(){return r.a.createElement(l.a,{placeholder:"input something"})}},830:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block\n *    -- 如果设置了 style.width，默认 display 为 inline-flex\n * en - Base\n *    -- Input usually needs to be used with other components, so the default width is 100% and the default display is block.\n *    -- If the style.width is set, the default display is inline-flex.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input placeholder=\"input something\" />\n}\n"},831:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211),o={width:120,marginRight:12};t.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{size:"small",style:o,placeholder:"small size"}),r.a.createElement(l.a,{style:o,placeholder:"default size"}),r.a.createElement(l.a,{size:"large",style:o,placeholder:"large size"}))}},832:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 提供了三种尺寸的输入框，small、default、large\n * en - Size\n *    -- There are three size of input, small, default, large.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 120, marginRight: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input size="small" style={style} placeholder="small size" />\n      <Input style={style} placeholder="default size" />\n      <Input size="large" style={style} placeholder="large size" />\n    </div>\n  )\n}\n'},833:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211),o={marginBottom:12};t.default=function(){return r.a.createElement("div",{style:{width:300}},r.a.createElement(l.a,{style:o,type:"number",placeholder:"digits undefined"}),r.a.createElement(l.a,{style:o,digits:0,type:"number",placeholder:"digits 0"}),r.a.createElement(l.a,{style:o,digits:1,type:"number",placeholder:"digits 1"}),r.a.createElement(l.a,{style:o,digits:2,type:"number",placeholder:"digits 2"}),r.a.createElement(l.a,{style:o,digits:3,type:"number",placeholder:"digits 3"}))}},834:function(e,t){e.exports='/**\n * cn - 数字\n *    -- type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数\n * en - Number\n *    -- When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} type="number" placeholder="digits undefined" />\n      <Input style={style} digits={0} type="number" placeholder="digits 0" />\n      <Input style={style} digits={1} type="number" placeholder="digits 1" />\n      <Input style={style} digits={2} type="number" placeholder="digits 2" />\n      <Input style={style} digits={3} type="number" placeholder="digits 3" />\n    </div>\n  )\n}\n'},835:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211);t.default=function(){return r.a.createElement(l.a.Number,{width:120,min:23,max:100,digits:0})}},836:function(e,t){e.exports="/**\n * cn -\n *  . -- Input.Number 组件，可以通过鼠标和上下键辅助输入\n * en -\n *  . -- Input.Number component can be assisted by mouse and up and down keyboard.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Number width={120} min={23} max={100} digits={0} />\n}\n"},837:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211),o=n(80),i=n(73),c={width:300,marginBottom:12};t.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a.Group,{style:c},r.a.createElement(i.a,{name:"user"}),r.a.createElement(l.a,{placeholder:"first name"}),"-",r.a.createElement(l.a,{placeholder:"last name"})),r.a.createElement(l.a.Group,{style:c},r.a.createElement(l.a,{placeholder:"search text"}),r.a.createElement(i.a,{name:"search"})),r.a.createElement(l.a.Group,{style:c},r.a.createElement(l.a,{style:{flex:1},placeholder:"flex 1"}),r.a.createElement(l.a,{style:{flex:3},placeholder:"flex 3"})),r.a.createElement(l.a.Group,{style:c},r.a.createElement(l.a,{placeholder:"search text"}),r.a.createElement(o.a,{type:"primary"},"Search")),r.a.createElement(l.a.Group,{size:"small",style:c},r.a.createElement("b",null,r.a.createElement(i.a,{name:"envelope"})),r.a.createElement(l.a,{placeholder:"email"}),r.a.createElement("b",null,".com")))}},838:function(e,t){e.exports='/**\n * cn - 组合\n *  . -- Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。\n * en - Group\n *  . -- The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color.\n */\nimport React from \'react\'\nimport { Button, Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group style={style}>\n        <FontAwesome name="user" />\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <FontAwesome name="search" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input style={{ flex: 1 }} placeholder="flex 1" />\n        <Input style={{ flex: 3 }} placeholder="flex 3" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button type="primary">Search</Button>\n      </Input.Group>\n\n      <Input.Group size="small" style={style}>\n        <b>\n          <FontAwesome name="envelope" />\n        </b>\n        <Input placeholder="email" />\n        <b>.com</b>\n      </Input.Group>\n    </div>\n  )\n}\n'},839:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211),o=n(73),i={marginBottom:12};t.default=function(){return r.a.createElement("div",{style:{width:300}},r.a.createElement(l.a,{style:i,placeholder:"email",tip:"enter you email.",popover:"top-left"}),r.a.createElement(l.a.Group,{style:i,tip:"enter you email."},r.a.createElement(o.a,{name:"envelope"}),r.a.createElement(l.a,{placeholder:"email"})),r.a.createElement(l.a.Group,{style:i},r.a.createElement(o.a,{name:"envelope"}),r.a.createElement(l.a,{tip:"enter you email.",placeholder:"email"})))}},840:function(e,t){e.exports='/**\n * cn - 提示文字\n *    -- 在 input 上设置的 tip 在 focus 时弹出\n * en - Tip\n *    -- The tip set on input pops up when it is focused.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} placeholder="email" tip="enter you email." popover="top-left" />\n\n      <Input.Group style={style} tip="enter you email.">\n        <FontAwesome name="envelope" />\n        <Input placeholder="email" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <FontAwesome name="envelope" />\n        <Input tip="enter you email." placeholder="email" />\n      </Input.Group>\n    </div>\n  )\n}\n'},841:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211),o=[{required:!0,message:"Please enter your email."},{type:"email",message:"Please enter a valid email."}];t.default=function(){return r.a.createElement(l.a,{placeholder:"email",rules:o,tip:"Email, required",popover:"top-left",width:300})}},842:function(e,t){e.exports="/**\n * cn - 校验\n *    -- 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出\n *    -- 如果没有设置 popover，不会弹出错误提示。\n *    -- 有错误时，提示框不会隐藏。\n * en - Validate\n *    -- When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location.\n *    -- If the popover property is not set, no error message will pop up.\n *    -- If input is invalid, the message will not be hidden.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nconst rules = [\n  { required: true, message: 'Please enter your email.' },\n  { type: 'email', message: 'Please enter a valid email.' },\n]\n\nexport default function() {\n  return <Input placeholder=\"email\" rules={rules} tip=\"Email, required\" popover=\"top-left\" width={300} />\n}\n"},843:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211),o={width:300,marginBottom:12};t.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a.Group,{disabled:!0,style:o},r.a.createElement(l.a,{placeholder:"first name"}),"-",r.a.createElement(l.a,{placeholder:"last name"})),r.a.createElement(l.a,{disabled:!0,style:o,placeholder:"disabled input"}))}},844:function(e,t){e.exports='/**\n * cn - 禁用\n *    -- 设置 disabled 属性禁用组件\n * en - Disabled\n *    -- Set the disabled property to disable the component.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group disabled style={style}>\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input disabled style={style} placeholder="disabled input" />\n    </div>\n  )\n}\n'},845:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(211);t.default=function(){return r.a.createElement(l.a.Password,{placeholder:"input password"})}},846:function(e,t){e.exports="/**\n * cn - 密码\n *    -- Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。\n * en - Password\n *    -- Input.Password is a mock input of type 'password', used for disable Chrome autofill.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Password placeholder=\"input password\" />\n}\n"}}]);