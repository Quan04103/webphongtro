import React, { memo } from 'react'
import { formatVietnameseToString } from '../ultils/formatVietnameseToString'
import imageroom from '../assets/room.png';
import { path } from '../ultils/constant';
// import {
//   StarIcon

// } from "@heroicons/react/24/outline";
import {
  StarIcon
} from "@heroicons/react/24/solid";

const indexs = [0]

const Item = ({ images, user, title, star, description, attributes, address, id }) => {



  return (

    <div className="w-full h-[446px] display:flex ">
      <div className="w-[294px] h-[446px] top-0 left-0 bg-red-100 rounded-[25px_25px_15px_15px]" >
        <a href={`${path.DETATLS}${formatVietnameseToString(title)}/${id}`}>
          <div className="w-[294px] h-[294px]">
            <img className=" w-[294px] h-[294px] top-0 left-0 object-cover" src={imageroom} alt='Room' />
          </div>
          <div className="w-[294px] display: flex">
            <p className=" w-[254px] h-full top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] tracking-[0] leading-[normal]">
              {`${address.split(',')[address.split(',').length - 2]}${address.split(',')[address.split(',').length - 1]}`}
            </p>
            <div className=" margin-left: 50px;  w-[16px] h-[16px]">
              {React.createElement(StarIcon, {
                className: `h-4 w-4 `,
                strokeWidth: 2,
              })}
            </div>
            <div class="w-10 h-[17px] text-black text-base font-semibold font-['Inter']">4.68 </div>
          </div>
          <div className='w-[294px] display: flex'>
            <span className="text-black text-sm font-medium font-['Inter'] ">Diện tích: </span>
            <span className="text-black text-sm font-normal font-['Inter']">{attributes?.acreage}</span>
            <span className="text-black text-sm font-medium font-['Inter']"> </span>
          </div>
          <div class="text-black text-sm font-medium font-['Inter'] w-[294px] display: flex">Đăng tin bởi :
            <img class="w-5 h-5 rounded-full shadow" src="https://via.placeholder.com/user" />
            <div class="w-[140px] h-6 text-black text-sm font-medium font-['Inter']">{user?.name} </div>
          </div>
          <div class="w-[294px] h-[21px] text-black text-base font-semibold font-['Inter']">{attributes?.price}</div>
        </a>
      </div>

    </div>

  );
};



export default memo(Item)












