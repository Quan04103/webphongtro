import React, { useCallback } from 'react'
import logo2 from '../../assets/logo2.png'
import { Button } from '../../components'
import icons from '../../ultils/icons'
import { useNavigate } from 'react-router-dom'
import { path } from '../../ultils/constant'

const { AiOutlinePlusCircle } = icons
const Header = () => {
  const navigate = useNavigate()
  const goLogin = useCallback(() => {
    navigate(path.LOGIN)
  }, [navigate])
  const navigate1 = useNavigate()
  const goLienHe = useCallback(() => {
    navigate1(path.LIENHE)
  }, [navigate1])
  const goHome = useCallback(() => {
    navigate1(path.HOME)
  }, [navigate1])


  return (
    <div>
      <div className='w-1100 flex items-center justify-between '>
        <img
          src={logo2}
          alt='logo2'
          className='w-[240px] h-[70px] object-contain'
          onClick={goHome}
        />
        <div>
          <Button
            text={'Liên Hệ'}
            textColor='text-white'
            bgColor='bg-[#C90615]'
            onClick={goLienHe}
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
        <div className='flex items-center gap-1'>
          <small>Chào nhó</small>
          <Button
            text={'Đăng Nhập'}
            textColor='text-white'
            bgColor='bg-[#0866FF]'
            onClick={goLogin}
          />
          <Button
            text={'Đăng Ký'}
            textColor='text-white'
            bgColor='bg-[#0866FF]'
            onClick={goLogin}
          />
          <Button
            text={'Đăng Tin'}
            textColor='text-white'
            bgColor='bg-[#C90615]'
            IcAfter={AiOutlinePlusCircle}
          />


        </div>

      </div>
      <div className='horizontal-line'>

      </div>
    </div>


  )
}

export default Header
