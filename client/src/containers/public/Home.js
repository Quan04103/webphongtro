import React from 'react'
import Header from './Header'
//import { Button } from '../../components'
import { Outlet } from 'react-router-dom'
import { Button, InputForm } from '../../components'


const Home = () => {
  return (
    <div className='bg-[white] w-1100 m-auto h-auto '>
      <Header></Header>
      <div class="border-t-4 border-gray-400"></div>
      

    
    </div>

  )
}

export default Home
