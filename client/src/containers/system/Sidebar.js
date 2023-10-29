import React from 'react'
import { useState } from 'react';
import Logo from '../../assets/boyshouse.jpg'
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
import { RiDashboardFill } from "react-icons/ri";
import {
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";
import { useHref } from 'react-router-dom';
initTE({ Dropdown, Ripple });
const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Đăng tin mới", href: "/he-thong/tao-moi-bai-dang" },
        { title: "Quản lí tin đăng", href: "/he-thong/quan-li-tin-dang" },
        { title: "Sửa thông tin cá nhân", href: "/he-thong/chinh-sua-thong-tin", icon: <BsFillPersonPlusFill /> },
        { title: "Nạp tiền vào tài khoản", href: "/he-thong/nap-tien", icon: <FiDollarSign /> },
        { title: "Lịch sử nạp tiền", href: "/he-thong/lich-su-nap-tien", icon: < BsFillDatabaseFill /> },
        { title: "Lịch sử thanh toán", href: "/he-thong/lich-su-thanh-toan", icon: <AiOutlineBarChart /> },
    ];
    return (
        <div className="flex">
            <div className={` bg-blue-300  p-5 pt-9 rounded-r-xl rounded-x-xl  ${open ?
                "w-72" : "w-20"} duration-300 relative `}>
                <BsArrowLeftShort className={`bg-white
      text-dark-purple text-3xl 
      rounded-full absolute -right-3 top-9 border
      ☐ border-dark-purple cursor-pointer ${!open && "rotate-180"}
      `} onClick={() => setOpen(!open)} />

                <div className="inline-flex">
                    {/* <AiFillEnvironment
                        className={`bg-amber-300 text-4xl rounded
        cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"
                            }`} />
                    <h1 className={`text-white origin-left font-size-xl
          text-2xl duration-300 ${!open && "scale-0"}`}>
                        Stay
                    </h1> */}
                    <img src={Logo} alt="logo" className='rounded-lg' />

                </div>
                <ul className="pt-4">
                    {Menus.map((menu, index) => (
                        <>
                            <li
                                key={index}

                                className={` text-black hover:text-white hover:bg-sky-400 text-sm flex items-center
        gap-x-4 cursor-pointer p-4 hover:bg-light-white
        rounded-md  ${menu.spacing ? "mt-9" : "mt-2"} `}
                            >
                                <span className="text-2xl  block float-left">
                                    {menu.icon ? menu.icon : <RiDashboardFill />}
                                </span>
                                <span
                                    className={`text-base font-medium flex-1
        duration-200 ${!open && "hidden"
                                        }`}
                                >
                                    {menu.title}
                                    {menu.href}
                                </span>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar