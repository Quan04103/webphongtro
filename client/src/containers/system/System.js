import React, {createContext} from 'react'
import { Outlet } from 'react-router'
import Sidebar from './sidebar'
import Header, { Navbar1, ProfileMenu } from './header'
import * as actions from "../../store/actions";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { apiCreatePost } from '../../services';

const System = () => {
    const dispatch = useDispatch()
    const { currentData } = useSelector(state => state.user)
    const { isLoggedIn} = useSelector(state => state.auth);
    
    useEffect(() => {
        
          dispatch(actions.getCurrent())
        
      }, [isLoggedIn])

    return (
        <div>
            <nav class="fixed top-0 z-50 w-full bg-blue-100 rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center w-full">
                        <Navbar1/>
                    </div>
                </div>
            </nav>

            <div class="fixed top-0 left-0 z-40 w-64 rounded-br-2xl h-screen pt-20 shadow-xl shadow-blue-gray-100 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
                <div >
                    <Sidebar />
                </div>
            </div>

            <div class="p-4 mt-6 sm:ml-64">
                <div class="p-4 border-2 rounded-lg shadow-xl shadow-blue-gray-400 dark:border-gray-700 mt-14">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default System
