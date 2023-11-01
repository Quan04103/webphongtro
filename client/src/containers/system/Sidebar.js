import { useState } from 'react';
import logo1 from '../../assets/logo-sb.png'
import { useSelector, useDispatch } from 'react-redux'
import menuSidebar from '../../ultils/menuSidebar'
import { NavLink } from 'react-router-dom'
import * as actions from '../../store/actions'
import { AiOutlineLogout } from 'react-icons/ai'
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
import memuSidebar from '../../ultils/menuSidebar';
initTE({ Dropdown, Ripple });

const activeStyle = 'hover:bg-gray-200 flex  rounded-md items-center gap-2 py-2 font-bold bg-gray-200'
const notActiceStyle = 'hover:bg-gray-200 flex  rounded-md items-center gap-2 py-2 cursor-pointer'

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch()
    return (

        <div className="flex">
            <div className={` bg-blue-300 fixed z-[999] p-5 pt-9 rounded-r-xl rounded-x-xl  ${open ?
                "w-72" : "w-20"} duration-300 relative h-[1000px]`}>
                <BsArrowLeftShort className={`bg-white
      text-dark-purple text-3xl 
      rounded-full absolute -right-3 top-16 border
      ☐ border-dark-purple cursor-pointer ${!open && "rotate-180"}
      `} onClick={() => setOpen(!open)} />

                <div className=" rounded flex mr-2" >
                    {/* <AiFillEnvironment
                        className={`bg-amber-300 text-4xl rounded
                    cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"
                    }`} /> */}
                    < img src={logo1} alt='logo' width={70} />
                </div>
                <ul className="pt-2 ">
                    {menuSidebar.map(item => {
                        return (
                            <NavLink
                                className={` text-black hover:text-white hover:bg-sky-400 text-sm flex items-center
                            gap-x-4 cursor-pointer p-4 hover:bg-light-white 
                            rounded-md  ${item.spacing ? "mt-9" : "mt-2"} `}
                                key={item.id}
                                to={item?.path}
                            >
                                <span className="text-2xl  block float-left">
                                    {item.icon ? item.icon : <RiDashboardFill />}
                                </span>
                                <span
                                    className={`text-base font-medium flex-1
        duration-200 ${!open && "hidden"
                                        }`}
                                >
                                    {item.text}
                                </span>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
        </div >
    )
}

export default Sidebar