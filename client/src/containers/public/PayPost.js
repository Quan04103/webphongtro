import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { path } from '../../ultils/constant'
import { ToggleButton, PostPay, TypePost, Button } from "../../components";


const PayPost = () => {
    
    const navigate = useNavigate()
    const goCreatePost = useCallback((flag) => {
        navigate(path.CREATE_POST, { state: { flag } })
    }, [])

    return (
        <div className=" flex justify-center bg-white">
            <div className="min-w-600 grip gap-5 flex flex-col w-3/4 py-5">
                <TypePost/>
                
                <PostPay/>
                <div className="flex-row flex justify-between h-1/2">
                    
                        <button
                            type='button'
                            onClick={() => goCreatePost(false)} 
                            className="w-[10rem] border-solid border-slate-300 border-2 rounded-md px-[10px] font-semibold bg-white hover:bg-gray-300">
                            <p >Trở về</p>

                        </button>
                    
                        <div className='flex flex-row gap-3'>
                        <div className="flex flex-col ">
                            <p className="post_text_h2">Tổng tiền</p>
                            <p className="post_text_h2 text-slate-600">0 VND</p>
                        </div>
                    
                    
                        <Button  
                            text='Thanh toán và đăng tin' 
                            bgColor='bg-red-600' 
                            textColor='text-white'/>
                        </div>

                        
                    
                    
                    
                </div>
                

                
            </div>
        </div>
        
    )
}

export default PayPost