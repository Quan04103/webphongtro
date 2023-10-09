import imageIntro from '../../assets/Intro.png';
import imageroom from '../../assets/room.png';
import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { LoginForm } from '../../components'
import { ComplexNavbar } from './Header'
import { useState } from 'react'
import { LoginButton } from './Header'


const Home = () => {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  console.log("isLoginPopupOpen:", isLoginPopupOpen);


  return (
    <div style={styles.container}>
      
        <div className={isLoginPopupOpen ? 'fixed inset-0 bg-black opacity-50' : ""}>
          <ComplexNavbar />
        </div>
        {/* Nội dung của Header */}
      <div style={styles.body}>
        <div style={styles.intro}>
          <img style={styles.imageIntro} src={imageIntro} alt='Intro' />
        </div>
        <div style={styles.room}>
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} style={styles.imageContainer}>
              <div style={styles.imageFrame}>
                <img style={styles.imageroom} src={imageroom} alt={`Room ${index + 1}`} />
              </div>
              <h4 style={styles.h4}>Quận 9, Tp. Hồ Chí Minh</h4>
              <p style={styles.p1}> ★ 4.86</p>
              <p style={styles.p2}>Diện tích: 300m vuông</p>
              <p style={styles.p3}>Đăng tin bởi: Minh Quốc</p>
              <h3 style={styles.h3}>Giá: 4,7 triệu/tháng</h3>
            </div>
          ))}
          <button style={{
            background: 'gray', marginLeft: '790px', fontSize: '30px', marginBottom: '50px',
          }}>Xem thêm</button>
        </div>
        <div style={styles.infor}>
          <h2 style={styles.textwhy}>Tại sao lại chọn PhongTro123.com?</h2>
          <p style={styles.textintro}>Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào là trang web đứng top google về các từ khóa: cho thuê phòng trọ, nhà trọ, thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép, cho thuê mặt bằng...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn</p>
          <span style={styles.number} >
            <p style={{ display: 'inline', marginLeft: '500px', }}>116.998+</p>
            <p style={{ display: 'inline', marginLeft: '150px', }}>116.998+</p>
            <p style={{ display: 'inline', marginLeft: '150px', }}>116.998+</p>
            <p style={{ display: 'inline', marginLeft: '150px', }}>2.500.000+</p>
            <p></p>
          </span>
          <span style={styles.text}>
            <p style={{ display: 'inline', marginLeft: '500px' }}>Thành viên</p>
            <p style={{ display: 'inline', marginLeft: '150px' }}>Tin đăng</p>
            <p style={{ display: 'inline', marginLeft: '130px' }}>Lượt truy cập/tháng</p>
            <p style={{ display: 'inline', marginLeft: '100px' }}>Lượt xem/tháng</p>
            <p style={{
              textAlign: 'center',
              color: '#000',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
              marginTop: '30px',
            }} >Chi phí thấp, hiệu quả tối đa</p>
          </span>
          <p style={{ textAlign: 'center', fontSize: '50px' }}>★★★★★</p>
          <p style={styles.textintro}>"Trước khi biết website phongtro123, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết website phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao trong khi chi phí khá thấp, không còn tình trạng phòng trống kéo dài."</p>
          <p style={styles.textwhy}>Anh Quốc (chủ hệ thống phòng trọ tại Tp.HCM)</p>
          <p style={styles.textwhy}>Bạn đang có phòng trọ / căn hộ cho thuê?</p>
          <p style={{
            textAlign: 'center',
            color: '#000',
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
            marginTop: '30px',
            marginBottom: '30px',
          }}>Không phải lo tìm người cho thuê, phòng trống kéo dài</p>
          <button style={{ background: 'gray', marginLeft: '760px', fontSize: '30px', marginBottom: '50px' }}> Đăng tin ngay</button>
        </div>
        <div style={styles.footer}>
          <h2>Data Line 1</h2>
          <p>Data Line 2</p>
          <p>Data Line 3</p>
          <h2>Data Line 4</h2>
        </div>
      </div>
    </div>
  );
};
/*<div> 
  <div className={isLoginPopupOpen ? 'fixed inset-0 bg-black opacity-50' : ""}></div>
    
    <ComplexNavbar />

    <Footer />
  </div>
</div>*/


// Định nghĩa đối tượng chứa các thuộc tính CSS
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

export default Home;
