import React, { memo } from 'react'
import { formatVietnameseToString } from '../ultils/formatVietnameseToString'
import imageroom from '../assets/room.png';
import { path } from '../ultils/constant';
import icons from '../ultils/icons'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getPostsLimit } from '../store/actions';

const indexs = [0]
const { GrStar,BiMap, CiHeart, FaHeart } = icons
const Item = ({ images, user, title, star, attributes, address, id, posts }) => {
 

  const firstImage = images.slice(0, 1);


  return (
    <a href={`${path.DETATLS}${formatVietnameseToString(title)}/${id}`}>
    <div 
     className='md:grid md:grid-flow-row md:rounded-md xl:rounded-xl flex flex-rows transform  hover:scale-[1.02] md:hover:scale-[1.02] border border-solid border-gray-500' 
     style={styles.imageContainer}
     >
       <div className='basis-[30%]' >
         <img  src={firstImage} alt={`Hinh anh minh hoa`} className='h-[15rem] w-full lg:h-[25rem] md:w-[90%] xl:w-full xl:h-[255px]'  style={styles.imageFrame}/>
       </div>
       <div className='basis-[70%] p-1 pl-4 pt-5'>
           <div  className='flex flex-row gap-1 w-full text-[25px]'>
             {`${address.split(',')[address.split(',').length - 1]}`}
               
           </div>
           {/* <FaHeart size={20} className='hover:text-red-500 text-[#6d6c6c]'/> */}
           <div className='md:flex hidden text-[28px] text-[#034DA1]'>
             <b>
              {`${title.split(' ',10).join(' ')} ...`}         

             </b>
           </div>
           
           <h4 style={styles.h4} className='md:hidden flex'>
             {title}
                      
           </h4>

           <p style={styles.p2}>{`Diện tích: ${attributes?.acreage}`}</p>
           <div className='flex w-full'>
            <div className='flex-1'>{`Giá: ${attributes?.price}`}</div>
            <div className='flex-1'>{`${attributes?.published}`}</div>
           </div>
       </div>
     </div>
   </a>

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












