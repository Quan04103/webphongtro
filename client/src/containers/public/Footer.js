/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { path } from '../../ultils/constant'
import logo from '../../assets/logo.png'
import momo from '../../assets/momo.png'
import visa from '../../assets/visa.jpg'
import mastercard from '../../assets/mastercard.png'
import Zalopay from '../../assets/Zalopay.png'
import Tienmat from '../../assets/Tienmat.png'
import banking from '../../assets/banking.png'

const Footer = () => {
    return (
        <footer class="rounded-lg bg-neutral-600 text-center text-neutral-600 dark:bg-gray-600 dark:text-neutral-200 lg:text-left">
            <div class="px-6 border-b-2 border-neutral-400">
                <ul class="ml-9  flex flex-row justify-items-center" data-te-navbar-nav-ref>
                    <li class="static basis-1/5" data-te-nav-item-ref data-te-dropdown-ref >
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Cho thuê phòng trọ, nhà trọ
                            <span class="ml-2 w-2">
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
                        </a>
                    </li>
                    <li class="static basis-1/5" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href=""> Cho thuê nhà nguyên căn
                            <span class="ml-2 w-2">
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
                        </a>
                    </li>
                    <li class="static basis-1/5" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Cho thuê căn hộ
                            <span class="ml-2 w-2">
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
                        </a>
                    </li>
                    <li class="static basis-1/5" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Cho thuê mặt bằng
                            <span class="ml-2 w-2">
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
                        </a>
                    </li>
                    <li class="static basis-1/5" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Tìm người ở ghép
                            <span class="ml-2 w-2">
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
                        </a>
                    </li>
                </ul>
            </div>


            <div class="py-10 border-b-2 border-neutral-200 text-center md:text-left">
                <div class="mx-6 grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div class="">
                        <div class="mb-6 lg:mb-0">
                            <img src={logo} alt='logo' class="w-72 rounded-md" />
                        </div>
                    </div>
                    <div class="">
                        <h6
                            class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Về BOYSHOUSE
                        </h6>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Trang chủ</a>
                        </p>
                        <p class="mb-4">
                            <a href="/gioithieu" class="text-neutral-600 dark:text-neutral-200"
                            >Giới thiệu</a>
                        </p>
                        <p class="mb-4">
                            <a href="/lienhe" class="text-neutral-600 dark:text-neutral-200"
                            >Blog</a>
                        </p>
                        <p class="mb-4">
                            <a href="/quychehoatdong" class="text-neutral-600 dark:text-neutral-200"
                            >Quy chế hoạt động</a>
                        </p>
                        <p class="mb-4">
                            <a href="/chinhsachbaomat" class="text-neutral-600 dark:text-neutral-200"
                            >Chính sách bảo mật</a>
                        </p>
                        {/* <p>
                            <NavLink
                                className={` text-black hover:text-white hover:bg-sky-400 text-sm flex items-center
                            gap-x-4 cursor-pointer p-4 hover:bg-light-white 
                            rounded-md  ${item.spacing ? "mt-9" : "mt-2"} `}
                                key=
                                to={path.LIENHE}
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
                        </p> */}
                    </div>
                    <div class="">
                        <h6
                            class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Hỗ trợ khách hàng
                        </h6>
                        <p class="mb-4">
                            <a href="/cauhoithuonggap" class="text-neutral-600 dark:text-neutral-200"
                            >Câu hỏi thường gặp</a>
                        </p>
                        <p class="mb-4">
                            <a href="huongdandangtin" class="text-neutral-600 dark:text-neutral-200"
                            >Hướng dẫn đăng tin</a>
                        </p>
                        <p class="mb-4">
                            <a href="/banggiadichvu" class="text-neutral-600 dark:text-neutral-200"
                            >Bảng giá dịch vụ</a>
                        </p>
                        <p class="mb-4">
                            <a href="/quydinhdangtin" class="text-neutral-600 dark:text-neutral-200"
                            >Quy định đăng tin</a>
                        </p>
                        <p>
                            <a href="/giaiquyetkhieunai" class="text-neutral-600 dark:text-neutral-200"
                            >Giải quyết khiếu nại</a>
                        </p>
                    </div>

                    <div>
                        <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Phương thức thanh toán
                        </h6>
                        <div className='grid grid-cols-3 gap-4 w-60'>
                            <a href='#!'>
                                <img src={visa} />
                            </a>
                            <a href='#!'>
                                <img src={mastercard} />
                            </a>
                            <a href='#!'>
                                <img src={Tienmat} className='mt-2' />
                            </a>
                            <a href='#!'>
                                <img src={momo} />
                            </a>
                            <a href='#!'>
                                <img src={Zalopay} />
                            </a>
                            <a href='#!'>
                                <img src={banking} className='mt-2'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <div class="px-6 border-b-2 border-neutral-200 bg-neutral-700">
                <ul class="ml-9  flex flex-row justify-items-center" data-te-navbar-nav-ref>
                    <li class="static basis-1/8 flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2" data-te-nav-item-ref data-te-dropdown-ref >

                        <span class="mr-1 w- mt-0.5">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M21 12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 A9 9 0 0 1 21 12 z" />
                                <path d="M14 9.75a3.016 3.016 0 00-4.163.173 2.993 2.993 0 000 4.154A3.016 3.016 0 0014 14.25" />
                            </svg>
                        </span>
                        <span>STAYHOME.COM.VN</span>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href=""> Terms
                            <span class="ml-2 w-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Sitemap
                            <span class="ml-2 w-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Privacy
                            <span class="ml-2 w-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="static basis-1/2" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Your Privacy Choices
                            <span class="ml-2 w-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#">
                            <span class="mr-1 w- mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </span>
                            <span>Việt Nam (VN)</span>
                        </a>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#">
                            <span class="mr-1 w- mt-0.5">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1.3em"
                                    width="1.3em"
                                >
                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                    <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
                                    <path d="M8 13.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0 .5A6 6 0 108 2a6 6 0 000 12z" />
                                </svg>
                            </span>
                            <span>VNĐ</span>
                        </a>
                    </li>
                    <li class="static basis-1/9" data-te-nav-item-ref data-te-dropdown-ref>
                        <a href="#!" class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1.3em"
                                width="1.3em"
                            >
                                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                            </svg>
                        </a>
                    </li>
                    <li class="static basis-1/9" data-te-nav-item-ref data-te-dropdown-ref>
                        <a href="#!" class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1.3em"
                                width="1.3em"
                            >
                                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                            </svg>
                        </a>
                    </li>
                    <li class="static  basis-1/9" data-te-nav-item-ref data-te-dropdown-ref>
                        <a href="#!" class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1.3em"
                                width="1.3em"
                            >
                                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer >
    )
}

export default Footer
