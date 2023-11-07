import React from 'react'
import momo from '../../assets/momo.png'
import visa from '../../assets/visa.jpg'
import mastercard from '../../assets/mastercard.png'
import Zalopay from '../../assets/Zalopay.png'
import Tienmat from '../../assets/Tienmat.png'
import banking from '../../assets/banking.png'
import ShopeePay from '../../assets/ShopeePay.png'
const Deposit = () => {
  return (
    <div className='flex flex-col bg-white p-4 w-full h-screen' >
      <h1 className='text-5xl font-bold py-4 h-[69px] flex-none border-b border-gray-200 mb-4'>Mời bạn chọn phương thức thanh toán</h1>
      <div className='flex flex-row-2'>
        <div className='w-3/5 grid grid-cols-3 gap-4 place-content-top mt-7 mr-48'>
          <div className='w-full h-auto border-2 rounded-md border-gray-200'>
            <img src={momo} className='w-36 h-36 p-5 mx-9' />
            <div className='h-8 w-full inset-x-0 bottom-0 bg-indigo-400 text-center rounded-b-xs'>
              <p>MoMo</p>
            </div>
          </div>
          <div className='w-full h-auto border-2 rounded-md border-gray-200'>
            <img src={visa} className='w-40 h-30  p-5 mx-7 my-[18px]' />
            <div className='h-8 w-full inset-x-0 bottom-0 bg-indigo-400 text-center rounded-b-xs'>
              <p>Visa</p>
            </div>
          </div>
          <div className='w-full h-auto border-2 rounded-md border-gray-200'>
            <img src={mastercard} className='w-42 h-36 p-5 mx-7 ' />
            <div className='w-full bg-indigo-400 text-center rounded-b-xs inset-x-0 bottom-0 h-8'>
              <p>MasterCard</p>
            </div>
          </div>
          <div className='w-full h-auto border-2 rounded-md border-gray-200'>
            <img src={Zalopay} className='w-36 h-36 p-5 mx-9' />
            <div className='w-full bg-indigo-400 text-center rounded-b-xs inset-x-0 bottom-0 h-8'>
              <p>ZaloPay</p>
            </div>
          </div>
          <div className='w-full h-auto border-2 rounded-md border-gray-200'>
            <img src={ShopeePay} className='w-42 h-42 p-5 my-[13px]' />
            <div className='w-full bg-indigo-400 text-center rounded-b-xs inset-x-0 bottom-0 h-8'>
              <p>ShopeePay</p>
            </div>
          </div>
          <div className='w-full h-auto border-2 rounded-md border-gray-200'>
            <img src={banking} className='w-40 h-34 p-5 mx-9 my-[16px]' />
            <div className='w-full bg-indigo-400 text-center rounded-b-xs inset-x-0 bottom-0 h-8'>
              <p>Internet Banking</p>
            </div>
          </div>
        </div>
        <div className='flex-auto fixed right-0 mr-24'>
          <div className='h-auto rounded-md border-2 p-3 mb-4'>
            <h2 className='text-3xl font-semibold'>Số dư tài khoản</h2>
            <p className='text-3xl font-semibold text-green-300'>0đ</p>
          </div>
          <div className='h-auto rounded-md border-2 mb-1 bg-indigo-200'>
            <p class="flex items-center">
              <span class=" text-[white] text-xl ml-5 mr-9">Lịch sử nạp tiền</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6337 10.1815C20.1218 10.5335 20.1218 11.1044 19.6337 11.4565L12.5625 16.5565C12.0744 16.9086 11.283 16.9086 10.7948 16.5565C10.3067 16.2044 10.3067 15.6336 10.7948 15.2815L16.982 10.819L10.7948 6.35645C10.3067 6.00437 10.3067 5.43353 10.7948 5.08145C11.283 4.72936 12.0744 4.72936 12.5625 5.08145L19.6337 10.1815Z" fill="white" />
              </svg>
            </p>
          </div>
          <div className='h-auto rounded-md border-2 mb-1 bg-indigo-200'>
            <p class="flex items-center">
              <span class=" text-[white] text-xl ml-5 mr-3">Lịch sử thanh toán</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6337 10.1815C20.1218 10.5335 20.1218 11.1044 19.6337 11.4565L12.5625 16.5565C12.0744 16.9086 11.283 16.9086 10.7948 16.5565C10.3067 16.2044 10.3067 15.6336 10.7948 15.2815L16.982 10.819L10.7948 6.35645C10.3067 6.00437 10.3067 5.43353 10.7948 5.08145C11.283 4.72936 12.0744 4.72936 12.5625 5.08145L19.6337 10.1815Z" fill="white" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deposit