import React, { useEffect, useState } from 'react'
// import { textHomePage } from '../../ultils/constant'
import { Province, ItemSidebar, RelativePost } from '../../components'
import { List, Pagination } from './index'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

// import * as actions from '../../store/actions'


const SearchDetail = () => {
  const { prices, areas } = useSelector(state => state.app)
  const location = useLocation()


  return (
    <div className="w-full flex flex-col gap-3 mt-3">
      <div>
        <h1 className="font-bold text-2xl mb-2">
          {location.state?.titleSearch || 'Kết quả tìm kiém'}
        </h1>
        <span className="text-base">
          {`${location.state?.titleSearch || ' '} phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi !`}
        </span>
      </div>
      <div className="w-full flex gap-3">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%]  flex flex-col gap-4 justify-start items-center">
          <ItemSidebar content={prices} type='priceCode' title="Xem theo giá" isDouble />
          <ItemSidebar content={areas} type='areaCode' title="Xem theo diện tích" isDouble />
          <RelativePost newPost/>
        </div>
      </div>
    </div>
  )
}

export default SearchDetail