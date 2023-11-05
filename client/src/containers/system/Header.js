import React, { createContext, useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
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
import { Link} from "react-router-dom";


const profileMenuItems = [

    {
        label: "Trang chủ",
        icon: UserCircleIcon,
        dispatch: "",
    },
    {
        label: "Tin yêu thích",
        icon: Cog6ToothIcon,
        dispatch: "",
    },
    {
        label: "Thông báo",
        icon: InboxArrowDownIcon,
        dispatch: "",
    },
    {
        label: "Liên hệ ",
        icon: LifebuoyIcon,
        dispatch: "",
    },
    {
        label: "Đăng xuất",
        icon: PowerIcon,
        dispatchAction: actions.logout(),
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const closeMenu = () => setIsMenuOpen(false);

    const dispatch = useDispatch();

    const {currentData} = useSelector(state => state.user)
    const { isLoggedIn} = useSelector(state => state.auth);

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
                    <span className=" items-center right-[100px]">{currentData.name}</span>
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
                {profileMenuItems.map(({ label, icon, dispatchAction }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    const handleClickOn = async () => {
                        dispatch(dispatchAction);
                    }
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            <span className="flex" onClick={handleClickOn}>
                                {React.createElement(icon, {
                                    className: `h-4 w-4 mt-0.5 ${isLastItem ? "text-red-500" : ""}`,
                                    strokeWidth: 2,
                                })}
                                <Typography

                                    as="span"
                                    variant="small"
                                    className="font-normal ml-6"
                                    color={isLastItem ? "red" : "inherit"}
                                >
                                    {label}

                                </Typography>
                            </span>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}


export function Navbar1 () {
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
                        <img className="mt-5 cursor-pointer py-1.5 w-28 h-28" src={logo} />
                        <div class="hidden sm:ml-60 py-4 sm:block">
                            <div class="flex-auto w-full px-1 mt-9">
                                <nav class="bg-grey-light w-full rounded-md flex-1" aria-label="breadcrumb">
                                    <ol class="list-reset flex">
                                        <li>
                                            <a href="http://localhost:3000/" class="hover:bg-blue-gray-50 hover:bg-opacity-80
                                             focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80
                                              hover:text-blue-gray-900 focus:text-blue-gray-900
                                             active:text-blue-gray-900 rounded-md px-3 py-2 text-sm font-medium" >
                                                Home</a>
                                        </li>
                                        <li>
                                            <span class="mx-2 text-neutral-500 dark:text-neutral-200"
                                            >/</span>
                                        </li>
                                        <li>
                                            <a
                                                href="#!"
                                                class="hover:bg-blue-gray-50 hover:bg-opacity-80
                                                focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80
                                                 hover:text-blue-gray-900 focus:text-blue-gray-900
                                                active:text-blue-gray-900 rounded-md px-3 py-2 text-sm font-medium"
                                            >Quản lí tài khoản</a>
                                        </li>
                                        <li>
                                            <span class="mx-2 text-neutral-500 dark:text-neutral-200"
                                            >/</span>
                                        </li>
                                        <li>
                                            <a
                                                href="#!"
                                                class="hover:bg-blue-gray-50 hover:bg-opacity-80
                                                focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80
                                                 hover:text-blue-gray-900 focus:text-blue-gray-900
                                                active:text-blue-gray-900 rounded-md px-3 py-2 text-sm font-medium"
                                            >Quản lí tin đăng</a>
                                        </li>
                                    </ol>
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