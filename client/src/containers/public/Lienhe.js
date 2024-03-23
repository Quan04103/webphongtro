import React, {useContext, createContext, useState} from 'react'
import { InputForm, Button } from '../../components'
import { Outlet } from 'react-router-dom'
import Header, { ComplexNavbar } from './Header'
import { useDispatch, useSelector } from 'react-redux'
 
import { Context, ContextRegiter } from "./Home";

import * as actions from '../../store/actions'




const LienHe = () => {
  const dispatch = useDispatch()
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  return (
    <>
    <ContextRegiter.Provider
      value={[isRegisterPopupOpen, setIsRegisterPopupOpen]}
    >
      <Context.Provider value={[isLoginPopupOpen, setIsLoginPopupOpen]}>
        <div>
          <div
            className={
              isRegisterPopupOpen ? "fixed inset-0 backdrop-blur-sm" : ""
            }
          >
            <div
              className={
                isLoginPopupOpen ? "fixed inset-0 backdrop-blur-sm" : ""
              }
            >
              <ComplexNavbar />
            </div>
          </div>
              </div>

    <div className='bg-[white] max-w-screen-3xl m-auto h-auto '>


      <div class="border-t-4 border-gray-400"></div>

      <h1 className='pl-[30px] font-semibold text-3xl pb-[20px] '>Liên Hệ với chúng tôi</h1>
      <div className='w-full flex justity-between pl-[50px] pr-[50px] '>
        <Outlet />
        <div className=' bg-gradient-to-r from-black to-gray-300 w-[450px] h-[350px] p-[20px] rounded-[60px] shadow-sm mr-[150px]'>
          <h3 className='text-[white] font-semibold text-2xl mb-3 pl-[20px]'>Thông Tin Liên Hệ</h3>

          <div className='mt-7 flex flex-col items-left justify-between'>
            <small className='p-[5px] pb-[10px] text-[white]'>Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa chọn chúng tôi</small>
            <small className='p-[5px] pb-[10px] text-[white]'>Điện Thoại: 09876654321</small>
            <small className='p-[5px] pb-[10px] text-[white]'>Emai: cskh.phongtro123@gmail.com</small>
            <small className='p-[5px] pb-[10px] text-[white]'>Zalo: 0987654321</small>
            <small className='p-[5px] pb-[10px] text-[white]'>Viper: 0987654321</small>
            <small className='p-[5px] pb-[10px] text-[white]'>Địa Chỉ: 101 Tân Thới Nhất 5, Tân Thới Nhất, Quận 12, Thành Phố Hồ Chí Minh, Việt Nam</small>
          </div>
        </div>
        <div className='bg-[#F4F4F4] w-[400px] h-[350px] p-[30px] rounded-md shadow-sm '>
          <h3 className='font-semibold text-2xl mb-3'>Liên Hệ Trực Tiếp</h3>
          <div className='w-full flex flex-col gap-2'>
            <InputForm label={'Họ Và Tên'} />
            <InputForm label={'Số Điện Thoại'} />
            <InputForm label={'Nội Dung'} />
          </div>
          <div className='flex justify-center items-center pt-[10px]'>
            <Button
              text='Gửi'
              textColor='text-white'
              bgColor='bg-[black]'
              width={'w-[100px]'}
            /></div>
        </div>
      </div>

    </div>
    </Context.Provider>
    </ContextRegiter.Provider>
    </>
  )
}
export default LienHe;