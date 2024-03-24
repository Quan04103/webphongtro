import { useState } from 'react';
import { useDispatch } from 'react-redux'
import menuSidebar from '../../ultils/menuSidebar'
import { NavLink } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri";
import {
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";
initTE({ Dropdown, Ripple });
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch()
    return (

        <div className="flex">
            <div className={` class="space-y-2 font-medium`}>
                {/* <BsArrowLeftShort className={`bg-white
      text-dark-purple text-3xl 
      rounded-full absolute -right-3 top-40 border
      ☐ border-dark-purple cursor-pointer ${!open && "rotate-180"}
      `} onClick={() => setOpen(!open)} /> */}
                <div className='mt-5 ml-4'>

                    <ul className="pt-4 ">
                        {menuSidebar.map(item => {
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
                                        {item.icon ? item.icon : <RiDashboardFill />}
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
                    </ul>
                </div>
            </div >
        </div>
    )
}

export default Sidebar