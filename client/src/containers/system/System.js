import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from '../../ultils/constant'
import { Header, Sidebar } from './'

const System = () => {
    // const { isLoggedIn } = useSelector(state => state.auth)

    // if (!isLoggedIn) return <Navigate to={`/${path.LOGIN}`} replace={true} />
    return (
        <div className='w-full  flex flex-col '>

            <div className='flex-auto fixed w-full z-2' >
                <Header />

            </div>
            <div className='flex w-full flex-auto'>
                <div className='fixed z-3'> <Sidebar /></div>

                <div className='flex-auto bg-white shadow-md  p-4 mt-24 z-1'>
                    <div>
                    <Outlet /></div>
                </div>
            </div>
        </div>
    )
}

export default System