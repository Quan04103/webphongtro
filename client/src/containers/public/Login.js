import React from 'react'
import { InputForm, Button} from '../../components'
import Header from './Header'

const Login = () => {
  return (
    
      <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
         <Header></Header>
      <div class="border-t-4 border-gray-400"></div>
       <h3 className='font-semibold text-2xl mb-3'>Đăng Nhập</h3>
       <div className='w-full flex flex-col gap-5'>
        <InputForm label={'SỐ ĐIỆN THOẠI'}/>
        <InputForm label={'MẬT KHẨU'}/>
        <Button
          text='Đăng Nhập'
          textColor='text-white'
          bgColor='bg-secondary1'
          fullwidth
       />
       </div>
       <div className='mt-7 flex items-center justify-between'>
        <small className='text-[blue] hover:text-[orange] cursor-pointer'>Bạn quên mật khẩu</small>
        <small className='text-[blue] hover:text-[orange] cursor-pointer'>Tạo tài khoản mới</small>

       </div>


    </div>
    
    
  )
}

export default Login
