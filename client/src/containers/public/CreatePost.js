import React, { useCallback } from 'react'
import { path } from '../../ultils/constant'
import { Overview, Address, AddImage,PostInfo, Button } from "../../components"
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate()
    const goPaypost = useCallback((flag) => {
        navigate(path.PAY_POST, { state: { flag } })
    }, [])
    return (
            <div className=" flex justify-center bg-white">
                <div className=" w-3/4 gap-5 flex flex-col py-5 min-w-600">
                    <Address />
                    <Overview />
                    <AddImage />
                    <PostInfo />
                    <div className="grid justify-items-end">

                        <Button 
                            
                            onClick={() => goPaypost(false)}  
                            text='Tiếp tục' 
                            bgColor='bg-red-600' 
                            textColor='text-white'
                            bgColorhv='bg-white'                
                        />
                    </div>

                    
            
                </div>
                
            </div>
        
    )
}

export default CreatePost