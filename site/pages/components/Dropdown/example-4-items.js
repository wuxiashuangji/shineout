/**
 * cn - 平铺选项
 * en - Multiple columns
 */
import React from 'react'
import { Dropdown } from 'shineout'

export default function () {
  const menu = []
  for (let i = 1; i <= 30; i++) {
    menu.push((
      {
        id: `${i}`,
        content: `item${i}`,
      }
    ))
  }

  return (
    <Dropdown placeholder="Dropdown" width={500} columns={5} data={menu} />
  )
}
