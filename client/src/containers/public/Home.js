import imageIntro from '../../assets/Intro.png';
import imageroom from '../../assets/room.png';
import React, { useEffect } from 'react'
import Qc from './Qc'
import Header from './Header'
import Footer from './Footer'
import List from './List'
import Pagination from './Pagination';
import { LoginForm, ItemRoom } from '../../components'
import { ComplexNavbar } from './Header'
import { useState } from 'react'
import { LoginButton } from './Header'
import { useSearchParams } from 'react-router-dom';


const Home = () => {
  const [params] = useSearchParams()

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  console.log("isLoginPopupOpen:", isLoginPopupOpen);


  return (
    <div style={styles.container}>
      
        <div className={isLoginPopupOpen ? 'fixed inset-0 bg-black opacity-50' : ""}>
          <ComplexNavbar />
        </div>
        
      <div style={styles.body}>
        <div style={styles.intro}>
          <img style={styles.imageIntro} src={imageIntro} alt='Intro' />
        </div>
        <List page={params.get('page')}/>
        <Pagination page={params.get('page')}/>
        <Qc/>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};




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
