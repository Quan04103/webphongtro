import React, { memo, useState, useEffect } from 'react'
import { formatVietnameseToString } from '../ultils/formatVietnameseToString'
import imageroom from '../assets/room.png';
import { path } from '../ultils/constant';
import icons from '../ultils/icons'
import { Link } from 'react-router-dom';
import {
  StarIcon
} from "@heroicons/react/24/solid";
import ItemRoom from '../assets/room.png';

const indexs = [0]
const { GrStar,BiMap,FaHeart } = icons
const Item = ({ images, user, title, star, attributes, address, id,onFavoriteChange}) => {
 

  const [isFavorite, setIsFavorite] = useState(false);
  const firstImage = images?.length > 0 ? images.slice(0, 1) : null;
  function formatVietnameseToString(input) {
    // Kiểm tra xem input có tồn tại không
    if (input) {
      // Thực hiện các thao tác khác trên input
      return input.toLowerCase();  // hoặc thực hiện các thao tác khác
    } else {
      // Xử lý trường hợp input là undefined
      return '';  // hoặc giá trị mặc định khác
    }
  }
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const postKey = `${formatVietnameseToString(title)}_${id}`;
  
    // Kiểm tra xem thông tin phòng đã được lưu vào localStorage chưa
    const roomInfo = JSON.parse(localStorage.getItem(postKey)) || {};
    console.log('Room Info:', roomInfo); // Log thông tin phòng để kiểm tra
  
    // Nếu có thông tin, cập nhật state và hiển thị
    if (roomInfo) {
      setIsFavorite(favorites.includes(postKey));
    }
  }, [id, title]);

  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++) stars.push(<GrStar className='star-item' size={20} color='black' />);
    return stars;
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const postKey = `${formatVietnameseToString(title)}_${id}`;

    if (favorites.includes(postKey)) {
      favorites = favorites.filter((item) => item !== postKey);
    } else {
      favorites.push(postKey);
    }

    // Lưu thông tin phòng vào localStorage
    const roomInfo = {
      images,
      user,
      title,
      star,
      attributes,
      address,
      id,
    };
    console.log('Saving to localStorage:', postKey, roomInfo);
    localStorage.setItem(postKey, JSON.stringify(roomInfo));
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Thông báo cho thành phần cha (FavoriteList) về sự thay đổi trong danh sách yêu thích
    if (onFavoriteChange) {
      onFavoriteChange(postKey, isFavorite);
    }
  };

  return (
    <div>
    <a href={`${path.DETATLS}${formatVietnameseToString(title)}/${id}`}>
    <div 
     className='md:grid md:grid-flow-row md:rounded-md flex flex-rows transform  hover:scale-[1.02] md:hover:scale-[1.02]  ' 
     style={styles.imageContainer}
     >
       <div className='basis-[30%]' >
         <img  src={firstImage} alt={`Hinh anh minh hoa`} className='h-[15rem] w-full lg:h-[25rem] md:w-[90%]'  style={styles.imageFrame}/>
       </div>
       <div className='basis-[70%]' style={styles.content}>
           <h5 style={styles.h5} className='flex flex-row gap-1 w-full'>
             <BiMap size={20} color='gray'/>
             {`${address.split(',')[address.split(',').length - 1]}`}
             
           </h5>
           <h4 style={styles.h4} className='md:flex hidden'>
             
             {`${title.split(' ',10).join(' ')} ...`}         
           </h4>
           <h4 style={styles.h4} className='md:hidden flex'>
             {title}
                      
           </h4>

           <p style={styles.p2}>{`Diện tích: ${attributes?.acreage}`}</p>
           <p style={styles.p3}>{`Đăng tin bởi: ${user?.name}`}</p>
           <h3 style={styles.h3}>{`Giá: ${attributes?.price}`}</h3>
       </div>
     </div>
   </a>
      <button className='ml-10' onClick={() => handleFavorite()}>
        <FaHeart className={isFavorite ? 'text-red-500' : 'text-black'} />
      </button>
      </div>
  );
};
const styles = {
  imageContainer: {
    // borderWidth:'1px',
    // borderRadius:'10px',
    margin: '30px',
    borderColor: 'rgb(226 232 240)',
    
  },
  imageFrame: {
    borderRadius:'10px',
    
  },
  content: {
    padding:'10px',
  },
  imageroom: {
    width: 'calc(100%)',
    height: '20rem',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  h4: {
    // display: 'inline',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '18px'
  },
  h5: {
    color: 'gray',
    fontSize: '15px'
  },
  p1: {
    display: 'inline',
    // margin: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '20px'
  },
  p2: {
    marginBottom: '8px',
    marginTop: '8px',
  },
  p3: {
    marginBottom: '8px',
  },
  h3: {
    fontWeight: 'bold',
    fontSize: '20px'
  },
  infor: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    flex: '20%',
  },
  textwhy: {
    paddingTop: '20px',
    color: 'black',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    textAlign: 'center',
    marginBottom: '8px',
  },
  textintro: {
    color: '#000',
    fontfamily: 'Inter',
    fontsize: '16px',
    fontstyle: 'normal',
    fontweight: '400',
    lineheight: 'normal',
    textAlign: 'center',
    marginLeft: '40px',
    marginRight: '40px',
    marginBottom: '8px',
  },
  number: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginBottom: '8px',
  },
  text: {

    color: '#000',
    fontfamily: 'Inter',
    fontsize: '24px',
    fontstyle: 'normal',
    fontweight: '700',
    lineheight: 'normal',
  },
  footer: {
    backgroundColor: 'yellow',
    flex: '20%',
  },
};
export default memo(Item)












