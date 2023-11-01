import React, { createContext, useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { InputReadOnly } from '../../components'
import * as actions from "../../store/actions";
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
    const profileMenuItems = [

        {
            label: "My Profile",
            icon: UserCircleIcon,
            dispatch: "",
        },
        {
            label: "Edit Profile",
            icon: Cog6ToothIcon,
            dispatch: "",
        },
        {
            label: "Inbox",
            icon: InboxArrowDownIcon,
            dispatch: "",
        },
        {
            label: "Help",
            icon: LifebuoyIcon,
            dispatch: "",
        },
        {
            label: "Sign Out",
            icon: PowerIcon,
            dispatchAction: actions.logout(),
        },
    ];

    function ProfileMenu() {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const dispatch = useDispatch();
        const closeMenu = () => setIsMenuOpen(false);

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
                            className="border border-gray-900 p-0.5"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </Button>
                </MenuHandler>
                <MenuList className="p-1">
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

                    <ProfileMenu/>
                </div>
            </div>
        </nav >
    )
}

export default Header