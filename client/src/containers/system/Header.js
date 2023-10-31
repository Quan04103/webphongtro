import { React, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { InputReadOnly } from '../../components'
import { useSelector } from 'react-redux'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    FiDollarSign
} from "react-icons/fi"
import {
    BsArrowLeftShort,
    BsFillPersonPlusFill,
    BsFillDatabaseFill
} from "react-icons/bs";
import {
    AiFillEnvironment,
    AiOutlineBarChart,

} from "react-icons/ai";
import {
    HeartIcon,
    BellIcon,
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline";
import { RiDashboardFill } from "react-icons/ri";
import {
    Dropdown,
    Ripple,
    Input,
    initTE
} from "tw-elements";
const Header = () => {
    // nav list component
    initTE({ Dropdown, Ripple, Input });
    const { currentData } = useSelector(state => state.user)
    const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
    const [invalidFields, setInvalidFields] = useState([])
    const [open, setOpen] = useState(true);
    const [payload, setPayload] = useState({
        name: currentData?.name || '',
        avata: currentData?.avatar,
        email: currentData?.email || '',
        fbUrl: currentData?.fbUrl || '',
        zalo: currentData?.zalo || ''
    })
    return (
        <nav class="bg-blue-200" w-96>
            <div class="mx-auto w-4xl px-2 sm:px-6 lg:px-20 ">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start   ">

                        <div class="hidden sm:ml-60 py-4 sm:block">
                            <div class="flex w-full flex-wrap items-center justify-between px-3">
                                <nav class="bg-grey-light w-full rounded-md flex-1" aria-label="breadcrumb">
                                    <ol class="list-reset flex">
                                        <li>
                                            <a href="http://localhost:3000/" class="hover:text-white  hover:bg-sky-400 rounded-md px-3 py-2 text-sm font-medium" >
                                                Home</a>
                                        </li>
                                        <li>
                                            <span class="mx-2 text-neutral-500 dark:text-neutral-200"
                                            >/</span>
                                        </li>
                                        <li>
                                            <a
                                                href="#!"
                                                class="hover:text-white  hover:bg-sky-400 rounded-md px-3 py-2 text-sm font-medium"
                                            >Quản lí tài khoản</a>
                                        </li>
                                        <li>
                                            <span class="mx-2 text-neutral-500 dark:text-neutral-200"
                                            >/</span>
                                        </li>
                                        <li>
                                            <a
                                                href="#!"
                                                class="hover:text-white  hover:bg-sky-400 rounded-md px-3 py-2 text-sm font-medium"
                                            >Quản lí tin đăng</a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="relative ml-5 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 " data-te-dropdown-ref>
                        <div class="relative ml-3" data-te-dropdown-ref >
                            <div className="relative ml-5 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 " data-te-dropdown-ref>
                                <div class="relative ml-3" data-te-dropdown-ref >
                                    <button
                                        class="hidden-arrow flex items-center whitespace-nowrap transition duration-300 ease-in-out motion-reduce:transition-none"
                                        id="dropdownMenuButton2"

                                        data-te-dropdown-toggle-ref="true"
                                        aria-expanded="false">
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                            class="rounded-full h-12 w-12"
                                            alt="Avatar"
                                            loading="lazy" />
                                        <span class="w-2 pl-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                class="h-5 w-5">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                    <ul class="absolute left-0 right-auto z-[1000] float-left m-0 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
                                        aria-labelledby="dropdownMenuButton2"
                                        data-te-dropdown-menu-ref>
                                        <li>
                                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                                href="#!"
                                                data-te-dropdown-item-ref>
                                                <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                                                    alt="jane avatar"></img>
                                                <div class="mx-1">
                                                    {isLoggedIn && (
                                                        <>
                                                            {" "}
                                                            <span className=" items-center right-[100px]">{currentData.name}</span>
                                                            <h1>Mã thành viên: #{currentData.id.match(/\d/g).join('')?.slice(0, 6)}</h1>
                                                            <p class="text-sm text-gray-500 dark:text-gray-400">Điện thoại: {currentData.phone}</p>
                                                        </>

                                                    )}
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                        </li>
                                        <li class="min-w-max">
                                            <NavLink className="group-hover:text-gray-200 text-black" to={'/he-thong/tao-moi-bai-dang'}>
                                                <button href="#" class="bg group flex items-center space-x-4  px-4 py-3 text-black  rounded-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path class="group-hover:text-gray-200" stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                    </svg>

                                                    <span class="group-hover:text-gray-200" variant="outlined">Trang chủ</span>
                                                </button>
                                            </NavLink>

                                        </li>
                                        <li class="min-w-max">
                                            <NavLink className="group-hover:text-gray-200 text-black" to={'/he-thong/tao-moi-bai-dang'}>
                                                <button href="#" class="bg group flex items-center space-x-4  px-4 py-3 text-black  rounded-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" class="group-hover:text-gray-200" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                    <span class="group-hover:text-gray-200" variant="outlined">Tin đã lưu</span>
                                                </button>
                                            </NavLink>
                                        </li>
                                        <li class="min-w-max">
                                            <NavLink className="group-hover:text-gray-200 text-black" to={'/he-thong/tao-moi-bai-dang'}>
                                                <button href="#" class="bg group flex items-center space-x-4  px-4 py-3 text-black  rounded-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" class="group-hover:text-gray-200" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                                    </svg>
                                                    <span class="group-hover:text-gray-200" variant="outlined">Thông báo</span>
                                                </button>
                                            </NavLink>
                                        </li>
                                        <li class="min-w-max">
                                            <NavLink className="group-hover:text-gray-200 text-black" to={'/he-thong/tao-moi-bai-dang'}>
                                                <button href="#" class="bg group flex items-center space-x-4  px-4 py-3 text-black  rounded-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" class="group-hover:text-gray-200" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                                    </svg>
                                                    <span class="group-hover:text-gray-200" variant="outlined">Liên hệ</span>
                                                </button>
                                            </NavLink>
                                        </li>
                                        <li class="min-w-max">
                                            <NavLink className="group-hover:text-gray-200 text-black" to={'/he-thong/tao-moi-bai-dang'}>
                                                <button href="#" class="bg group flex items-center space-x-4  px-4 py-3 text-black  rounded-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" class="group-hover:text-gray-200" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                                    </svg>
                                                    <span class="group-hover:text-gray-200" variant="outlined">Đăng xuất</span>
                                                </button>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header