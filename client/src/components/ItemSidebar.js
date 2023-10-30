import React, {memo} from 'react'
import {formatVietnameseToString} from '../ultils/Common/formatVietnameseToString'
import {Link } from 'react-router-dom'
// import * as actions from '../store/actions/index'
import { useDispatch } from 'react-redux'
import { createSearchParams,useLocation, useNavigate } from 'react-router-dom'


const ItemSidebar = ({content, title, isDouble, type}) => {
  // console.log(content);
  const dispatch = useDispatch()
  const location = useLocation()
  // console.log(location);
  const navigate = useNavigate()
  

  // const formatContent = () => {
  //   const oddE1 = content?.filter((item, index) => index % 2 !==0)
  //   const evenE1 = content?.filter((item, index) => index % 2 ===0)
  //   const format = oddE1?.map((item, index) => {
  //     return {
  //       left: item,
  //       right: evenE1?.find((item, index2) => index2 === index)
  //     }
  //   })
  //   return format
  // }
  const formatContent = () => {
    const oddEl = content?.filter((item, index) => index % 2 !== 0)
    const evenEl = content?.filter((item, index) => index % 2 === 0)
    const formatContent = oddEl?.map((item, index) => {
        return {
            right: item,
            left: evenEl?.find((item2, index2) => index2 === index)
        }
    })

    return formatContent
}
  // console.log(formatContent())

  const handleFilterPosts = (code) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        [type]: code,
        
      }).toString()
    })
  }

  return (
    <div className = " w-full rounded-lg p-4 bg-white border ">
        <span className = "text-lg font-semibold pb-2 ">{title}</span>
        {!isDouble && 
        <div className="flex flex-col">
            {content?.length > 0 && content?.map(item => {
            return (
              <Link 
                to = {`${formatVietnameseToString(item.value)}`}
                key={item.code} 
                className = "text-base italic py-1 hover:text-orange-500 cursor-pointer"> 
              {'-'} {item.value}
              </Link>
            )
          })}
        </div>
        }

        {isDouble && 
        <div>
            {content?.length > 0 && formatContent(content)?.map((item,index) => {
            return (
              <div key={index} className = "flex items-center">
                <div  className = "text-base flex-1 italic py-1 hover:text-orange-500 cursor-pointer"
                  onClick={() => handleFilterPosts(item.right.code)}
                > 
                  {'-'} {item.right.value}
                </div>
                <div key={+index+1} className = "text-base flex-1 italic py-1 hover:text-orange-500 cursor-pointer"
                  onClick={() => handleFilterPosts(item.left.code)}
                > 
                  {'-'} {item.left.value}
                </div>
              </div>

            )
          })}
        </div>}
        
        


    </div>
  )
}

export default memo(ItemSidebar)