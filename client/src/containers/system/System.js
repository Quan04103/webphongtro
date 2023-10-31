import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from '../../ultils/constant'
import { Header, Sidebar } from './'

const System = () => {
    // const { isLoggedIn } = useSelector(state => state.auth)

    // if (!isLoggedIn) return <Navigate to={`/${path.LOGIN}`} replace={true} />
    return (
        <div className='w-full h-screen flex flex-col '>
            <div className='flex-auto fixed w-full z-999' >
                <Header />
            </div>
            <div className='flex w-full flex-auto'>
                <span className='fixed flex-auto z-999'><Sidebar /></span>
                <div className='flex-auto bg-white shadow-md h-full p-4 mt-5 z-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default System