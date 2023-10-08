import React, {useEffect} from 'react'
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
    <div> 
      <div className={isLoginPopupOpen ? 'fixed inset-0 bg-black opacity-50' : ""}>

        <ComplexNavbar />
        <Footer />
      </div>
    </div>

  )
}

export default Home
