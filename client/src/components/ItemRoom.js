import React, {memo} from 'react';
import imageeroom from '../../src/assets/room.png';
 
const ItemRoom = ( {attributes,images,star,title,user,address} ) => {
  
    return (
        // <div style={styles.imageContainer}>
        //       <div style={styles.imageFrame}>
        //         <img style={styles.imageroom} src={imageroom} alt={`Room `} />
        //       </div>
        //       <h4 style={styles.h4}>{title}</h4>
        //       <pr></pr>
        //       <p style={styles.p1}> {`★ ${star}`} </p>
        //       <p style={styles.p2}>{`Diện tích: ${attributes?.acreage}`}</p>
        //       <p style={styles.p3}>{`Đăng tin bởi: ${user?.name}`}</p>
        //       <h3 style={styles.h3}>{`Giá: ${attributes?.price}`}</h3>
        // </div>
        
        <div className='w-700px h-500px bg-[#c24040] p-30px'>
          <div>
              <img className='w-400px h-300px' src={imageeroom} alt={`Room `} />

          </div>
          <div >
            <div className='w-140px h-100px bg-black text-white'>
            {`Giá: ${attributes?.price}`}

            </div>
          </div>

        </div>


    )
};

const styles = {

    imageContainer: {
      width: 'calc(20%)',
      margin: '40px',
    },
    imageFrame: {
    },
    imageroom: {
      width: '400px',
      height: '300px',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    h4: {
      display: 'inline',
      fontWeight: 'bold',
      marginBottom: '8px',
      fontSize: '18px'
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

export default memo(ItemRoom)