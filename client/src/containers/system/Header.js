import React, { createContext, useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import menuHeader from '../../ultils/menuHeader'
import { InputReadOnly } from '../../components'
import * as actions from "../../store/actions";
import logo from "../../assets/logo.png"
import anonavatar from "../../assets/anonavatar.png"

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
    IconButton,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
} from "@heroicons/react/24/outline";
import {
    Dropdown,
    Ripple,
    Input,
    initTE
} from "tw-elements";
import { blobToBase64 } from "../../ultils/Common/tobase64";
import { Link } from "react-router-dom";
import { path } from '../../ultils/constant'


const profileMenuItems = [

    {
        label: "Trang chủ",
        icon: UserCircleIcon,
        dispatch: '',
        key1: true,
        link: 'http://localhost:3000',
    },
    {
        label: "Liên hệ",
        icon: Cog6ToothIcon,
        dispatch: '',
        key1: true,
        link: '/lienhe',
    },
    {
        label: "Tin đã lưu",
        icon: InboxArrowDownIcon,
        dispatch: "",
        key1: true,
        link: '/tin-da-luu',
    },
    {
        label: "Đăng xuất",
        icon: PowerIcon,
        dispatchAction: actions.logout(),
        key1: false,
        link: '/',
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const closeMenu = () => setIsMenuOpen(false);
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch();

    const { currentData } = useSelector(state => state.user)
    const { isLoggedIn } = useSelector(state => state.auth);
    useEffect(() => {

    }, [currentData])

    return (

        

        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5 "
                        src={blobToBase64(currentData?.avatar || anonavatar)}
                    />
                    <div className="">
                        <span className=" items-center right-[100px] block mt-2">{currentData.name}</span>
                        <span className=" items-center block mt-2">{currentData.money}.00 VND</span>
                    </div>
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1 shadow-2xl border-blue-gray-400">
                <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700   dark:text-gray-200 "
                    href="#!"
                    data-te-dropdown-item-ref>
                    <img src={blobToBase64(currentData?.avatar || anonavatar)} alt="avatar" className='w-10 object-cover rounded-full h-10 border-2 shadow-md border-white' />
                    <div class="mx-1 ">
                        {isLoggedIn && (
                            <>
                                {" "}
                                <span className=" items-center right-[100px]">{currentData.name}</span>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Điện thoại: {currentData.phone}</p>
                            </>

                        )}
                    </div>
                </a>
                <hr />
                {menuHeader.map(item => {
                    return (
                        <NavLink
                            className={` text-black hover:bg-blue-300 hover:bg-opacity-80
                                focus:bg-blue-200 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80
                                 hover:text-blue-900 focus:text-blue-900
                                active:text-blue-900 rounded-md px-3 py-2 text-sm font-medium flex items-center gap-x-4 cursor-pointer p-2  ${item.spacing ? "mt-9" : "mt-2"} `}
                            key={item.id}
                            to={item?.path}
                        >
                            <span className="text-2xl  block float-left">
                                {item.icon ? item.icon : <Cog6ToothIcon />}
                            </span>
                            <span
                                className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"
                                    }`}
                            >
                                {item.text}
                            </span>
                        </NavLink>
                    )
                })}
            </MenuList>
        </Menu>
    );
}


export function Navbar1() {
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
        <nav class="mr-5 w-full">
            <div class=" px-1 sm:px-4 lg:px-14 ">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex">
                    <a href="http://localhost:3000">
                            <img className="mt-5 cursor-pointer py-1.5 w-28 h-28" src={logo} />
                        </a>
                       
                        <div class="hidden sm:ml-60 py-4 sm:block">
                            <div class="flex-auto w-full px-1 mt-9">
                                <nav class="bg-grey-light w-full rounded-md flex-1" aria-label="breadcrumb">
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div><ProfileMenu /></div>
                </div>
            </div>
        </nav >

    )
}

const Header = () => {
    <Navbar1 />;
};

export default Header