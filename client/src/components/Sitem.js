import React from 'react'
import moment from 'moment'
import 'moment/locale/vi'
import {Link} from 'react-router-dom'
import {formatVietnameseToString} from '../ultils/Common/formatVietnameseToString'
import { path } from '../ultils/constant'
import icons from '../ultils/icons'
const { GrStar } = icons


const Sitem = ({ title, price, image, createAt, overviews,id, star }) => {
    const handleStar = (star) => {
      let arrStar = []
      for (let i = 1; i <= +star; i++) {
          arrStar.push(<GrStar className="star-item" size={14} color="yellow" />)
      }
      return arrStar
  }
  const formatDate = 'DD/MM/YYYY'
  const checkStatus = (datetime) =>  moment(datetime, formatDate).isSameOrAfter(new Date().toDateString())

  return (
    <Link to={`${path.DETAIL}${formatVietnameseToString(title?.replaceAll('/',''))}/${id}`}  className="flex gap-2 border-t pt-2">
      {image && <img src={image[0]}
        alt='anh'
        className="w-[70px] h-[70px] flex-none object-cover rounded-md"
      />}
      <div className="relative w-full" >
        <div className="text-[#1266dd sitem">
        {handleStar(+star).length > 0 && handleStar(+star).map((star,number) => {
            return (
                <span key={number}>{star}</span>
            )
            })}
          {title}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[#16c784] font-semibold text-sm">
            {price}
          </div>
          <div className="text-sm italic">
            {moment(createAt).fromNow()}
          </div>
        </div>
        {!checkStatus(overviews?.expire?.split(' ')[3] || overviews?.expire ) &&  <div className="absolute z-20 w-full top-0 h-[70px] rounded-md bg-overlay-70 text-white text-sm flex items-center justify-center">Bài viết đã hết hạn !</div>}
      </div>
    </Link>
  )
}

export default Sitem