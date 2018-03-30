/**
 * cn - 加载中
 * en - Loading
 */
import React from 'react'
import { Table, Spin } from 'shineout'
import { fetchSync } from 'doc/data/user'

const data = fetchSync(8)

const columns = [
  { title: 'id', render: 'id', width: 36 },
  { title: 'Name', render: d => `${d.firstName} ${d.lastName}` },
  { title: 'Country', render: 'country' },
  { title: 'Position', render: 'position' },
  { title: 'Office', render: 'office' },
]

export default function () {
  const loading = <Spin color="#1890ff" name="ring" />

  return (
    <Table keygen="id" loading={loading} columns={columns} data={data} />
  )
}
