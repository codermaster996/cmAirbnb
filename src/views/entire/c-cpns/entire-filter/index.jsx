import React, { memo, useState } from 'react'

import { FilterWrapper } from './style'
import filterDatas from 'assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(item) {
    const newItems = [...selectItems]
    // 判断item是否存在 存在的话就执行移除操作
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item)
    }

    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterDatas.map(item => {
            return (
              <div
                className={classNames("item", { active: selectItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter