// import React, { memo } from 'react'
// import { formatVietnameseToString } from '../ultils/formatVietnameseToString'
// import imageroom from '../assets/room.png';
// import { path } from '../ultils/constant';
// import { Link } from 'react-router-dom';
// // import {
// //   StarIcon

// // } from "@heroicons/react/24/outline";
// import {
//   StarIcon
// } from "@heroicons/react/24/solid";

// const indexs = [0]

// const Item = ({ images, user, title, star, description, attributes, address, id }) => {
  
//   // const firstImage = images.slice(0, 1);
//   const imageL = []

//   return (
//     <div style={styles.imageContainer}>
//       <a href={`${path.DETATLS}${formatVietnameseToString(title)}/${id}`}>
                
//         <div style={styles.imageFrame}>
//         {/* <img style={styles.imageroom} src={firstImage} alt={`Hinh anh minh hoa`} class="rounded-md ..." /> */}
//         {/* <img style={styles.imageroom} src={imageroom} alt={`Room `} /> */}
//           {i. > 0 && images.filter((i, index) => indexs.some(i => i === index))?.map((i, index) => {
//                     return (
//                         <img key={index} src={i} alt={`Ảnh minh họa`}  />
//                     )
//                 })}
//         </div>
//         <h4 style={styles.h4}>{title}</h4>
//         <p style={styles.p1}> {`${star} ★`} </p>
//         <p style={styles.p2}>{`Diện tích: ${attributes?.acreage}`}</p>
//         <p style={styles.p3}>{`Đăng tin bởi: ${user?.name}`}</p>
//         <h3 style={styles.h3}>{`Giá: ${attributes?.price}`}</h3>
//       </a>
//     </div>

//   );
// };







import React, { memo } from 'react'
import { formatVietnameseToString } from '../ultils/formatVietnameseToString'
import imageroom from '../assets/room.png';
import { path } from '../ultils/constant';
import icons from '../ultils/icons'
// import {
//   StarIcon

// } from "@heroicons/react/24/outline";
import {
  StarIcon
} from "@heroicons/react/24/solid";

const indexs = [0]
const { GrStar } = icons
const Item = ({ images, user, title, star, description, attributes, address, id }) => {

  const firstImage = images.slice(0, 1);

  const handleStar = (star) => {
    let stars = []
    for (let i = 1; i <= +star; i++) stars.push(<GrStar className='star-item' size={20} color='black' />)
    return stars

}

  return (
    <div style={styles.imageContainer}>
      <a href={`${path.DETATLS}${formatVietnameseToString(title)}/${id}`}>
        <div style={styles.imageFrame}>
          <img style={styles.imageroom} src={firstImage} alt={`Hinh anh minh hoa`} class="rounded-md ..." />
          {/* {images.length > 0 && images.filter((i, index) => indexs.some(i => i === index))?.map((i, index) => {
                    return (
                        <img key={index} src={i} alt={`Ảnh minh họa`}  />
                    )
                })} */}
        </div>
        <h4 style={styles.h4}>
          {title}
        </h4>
        <pr></pr>
        <p  className='flex flex-row'> 
          {handleStar(+star).length > 0 && handleStar(+star).map((star, number) => {
                              return (
                                  <span key={number}>{star}</span>
                              )
                          })}
        </p>
        <p style={styles.p2}>{`Diện tích: ${attributes?.acreage}`}</p>
        <p style={styles.p3}>{`Đăng tin bởi: ${user?.name}`}</p>
        <h3 style={styles.h3}>{`Giá: ${attributes?.price}`}</h3>
      </a>
    </div>

  );
};
const styles = {
  imageContainer: {
    width: 'calc(20%)',
    margin: '40px',
  },
  imageFrame: {
  
  },
  imageroom: {
    width: '300px',
    height: '294px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  h4: {
    // display: 'inline',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '18px'
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







