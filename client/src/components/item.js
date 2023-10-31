import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { formatVietnameseToString } from '../ultils/formatVietnameseToString'
import imageIntro from '../assets/Intro.png';
import imageroom from '../assets/room.png';
import { path } from '../ultils/constant';
const indexs = [0]

const Item = ({ images, user, title, star, description, attributes, address, id }) => {

 

    return (
     
        <div style={styles.body}>   
          <div style={styles.room} > 
       
              <div style={styles.imageContainer}>
                  <Link    to={`${path.DETAILS}${formatVietnameseToString(title)}/${id}`} 
                >
                    <div style={styles.imageFrame}>   
                  {/* {images.length > 0 && images.filter((i, indexs) => indexs.some(i => i === indexs))?.map((i, indexs) => {
                    return (
                        <img key={indexs} src={i} alt="Room"style={styles.imageroom} />
                    )
                })} */}
                       <img style={styles.imageroom} src={imageroom} alt="Room" />
                
              </div>
              {/* <span  style={styles.imageroom}>{`${images.length} ảnh`}</span> */}
                  

                  </Link>
                
              {/* <span style={styles.imageroom}>{`${images.length} ảnh`}  </span>      */}
          
                <span style={styles.h4}> 
                  {`${address.split(',')[address.split(',').length - 2]}${address.split(',')[address.split(',').length - 1]}`}
                  </span>
            
                <span style={styles.p1}> </span>
                <span style={styles.p2}> {attributes?.acreage}</span>
                <p style={styles.p3}> {user?.name}</p>
                <span style={styles.h3}>${attributes?.price}</span>

                <p className='text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden'>
                    {description}
                </p>

              </div>
      
          </div>         
        </div>
   
    );
  };
  

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    header: {
      backgroundColor: 'blue',
      flex: '10%',
    },
    body: {
      backgroundColor: 'white',
      flex: '90%',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
       
    },
    intro: {
      flex: '10%'
    },
    imageIntro: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    room: {
      flex: '40%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
     
    },
  
    imageContainer: {
      width: 'calc(20%)',
      margin: '40px',
     
      
    },
    imageFrame: {
    },
    imageroom: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    h4: {
      display: 'inline',
      fontWeight: 'bold',
      marginBottom: '8px',
      fontSize: '20px'
    },
    p1: {
      display: 'inline',
      margin: '20px',
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












