/**
 * 此文件根据 scripts/components-page.tpl 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'
import locate from 'doc/locate'

import cn from 'doc/pages/components/Table/cn.md'
import en from 'doc/pages/components/Table/en.md'

const source = locate(cn, en)

const examples = [
  {
    title: locate('基本用法', 'Overview'),
    component: require('doc/pages/components/Table/example-01-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-01-base.js'),
  },
  {
    title: locate('边框和底纹', 'Style (bordered, striped)'),
    component: require('doc/pages/components/Table/example-02-style.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-02-style.js'),
  },
  {
    title: locate('紧凑表格 \n 设置 size=small', 'Small table'),
    component: require('doc/pages/components/Table/example-03-small.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-03-small.js'),
  },
  {
    title: locate('表头分组', 'Column group'),
    component: require('doc/pages/components/Table/example-04-column-group.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-04-column-group.js'),
  },
  {
    title: locate('横向滚动', 'horizontal scroll'),
    component: require('doc/pages/components/Table/example-05-width.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-05-width.js'),
  },
  {
    title: locate('固定表头 \n *固定表头需要设置整个表格的高度', 'Fixed head'),
    component: require('doc/pages/components/Table/example-06-fixed-header.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-06-fixed-header.js'),
  },
  {
    title: locate('固定列 \n * 需要设置 fixed 属性为 true', 'Fixed column'),
    component: require('doc/pages/components/Table/example-07-fixed-column.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-07-fixed-column.js'),
  },
  {
    title: locate('', ''),
    component: require('doc/pages/components/Table/example-07-fixed-column2.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-07-fixed-column2.js'),
  },
  {
    title: locate('超大数据 \n * 这个例子加载了10000条数据。可以通过设置rowsInView调整单次最多render的行数，默认为20', 'Big data'),
    component: require('doc/pages/components/Table/example-08-bigdata.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-08-bigdata.js'),
  },
  {
    title: locate('只使用样式 \n 使用原生的tr, td来显示表格', 'Style only'),
    component: require('doc/pages/components/Table/example-99-raw.js').default,
    rawText: require('!raw-loader!doc/pages/components/Table/example-99-raw.js'),
  },
]

export default navable(props => <MarkDown {...props} source={source} examples={examples} />)
