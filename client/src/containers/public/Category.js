import React from 'react'
import tphcm from "../../assets/tphcm.jpg";
import tphn from "../../assets/tphanoi.jpg";
import tpdn from "../../assets/thdanang.jpg";
import tptth from "../../assets/tpthuathienhoa.jpg";



const Category = () => {
  return (
    <div className='pt-[55px] '>
        <div className='md:px-[12rem] text-[30px]  text-[#034DA1] font-semibold font-sans inline-block'>
            <b>
                Tỉnh/Thành phố nổi bật
            </b>
        </div>
        <div className='grid grid-cols-1 md:grid md:grid-cols-4 md:px-[12rem] pt-5'>
            <div className=' bg-red-500 w-[350px] h-[450px] rounded-xl'>
                <img src={tphcm} alt='tphcm' className='w-full h-full cursor-pointer'/>
                
            </div>
            <div className=' bg-blue-500 w-[350px] h-[450px] rounded-xl'>
                <img src={tphn} alt='tphn' className='w-full h-full rounded-xl cursor-pointer'/>
            </div>
            <div className=' bg-green-500 w-[350px] h-[450px] rounded-xl'>
                <img src={tpdn} alt='tpdn' className='w-full h-full rounded-xl cursor-pointer'/>
            </div>
            <div className=' bg-yellow-500 w-[350px] h-[450px] rounded-xl'>
                <img src={tptth} alt='tptth' className='w-full h-full rounded-xl cursor-pointer'/>
            </div>

        </div>
       
       
    
    
    </div>
  )
}

export default Category