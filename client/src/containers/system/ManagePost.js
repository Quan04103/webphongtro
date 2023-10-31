import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import { SelectAddress } from '../../components';
import { path } from '../../ultils/constant'
// import Footer from './Footer'
import {
    Card,
    Input,
    Typography,
    ButtonGroup, Button,
    Select, Option,
    Popover, PopoverHandler, PopoverContent


} from '@material-tailwind/react';

import {
    CameraIcon

} from "@heroicons/react/24/outline"
const ManagePost = () => {
    return (
        <div className="flex flex-col gap-10 bg-white p-7 w-full h-screen  items-center">
            <h1 className='text-3xl font-medium py-4 h-[69px] flex-none border-b border-gray-200'>ManagePost</h1>
            <div className='w-1/2 flex items-center justify-center flex-auto'></div>
        </div>

    )
}

export default ManagePost